<template>
  <div>

          <header-todos class="header-list">
              ToDo-List
          </header-todos>


          <input class="input-task"
          autofocus autocomplete="off"
          name="name"
          size="40" title=" Add To Do "
          placeholder="What needs to be done?"
          v-model="newtodo"
          @keyup.enter="addTodo">

          <div class="todo-list">

            <div v-for="todo in todos" class="todo-task"
            :key="todo.id"
            :class="{ completed: todo.completed, editing: todo == editedTodo }">

                <input class="toggle" type="checkbox" v-model="todo.completed" @click="doneTodo">
                <label v-if="!todo.visibility" class="todo-task-li" @dblclick="editTodo(todo)"> {{ todo.title }} </label>
                <label class="delete" @click="removeTodo(todo)"></label>

                <input v-if="todo.visibility" class="editText" type="text"
                  v-model="todo.title"
                  v-todo-focus="todo == editedTodo"
                  @blur="doneEdit(todo)"
                  @keyup.enter="doneEdit(todo)"
                  @keyup.esc="cancelEdit(todo)">

                <img src="../../../static/images/dust.png" class="dust-award">
            </div>

          </div>

          <div class="counter" style="position: relative;
                            border: 1px solid black;
                            width: 25px;
                            height: 25px;
                            margin-left: 155px;
                            margin-top: 15%;
                            border-radius:7px;
                            font-size: 15px;">

                            {{ count }}/{{ todoCountAll }}

              </div>

  </div>
</template>

<script>

export default {  
  name:'ToDos',
  components: { },
  data() {
  	return {
      todos: [],
      tasks: [],
      newtodo: '',
      editedTodo: '',
      count: 0
  	}
  },
  methods: {
    addTodo: function () {                                           // add function Todo
      var value = this.newtodo && this.newtodo.trim()                 // grab the value of ToDo

      if (!value) {
        return                                                          // if the value is empty return nothing 
      }

      if(this.todos.length < 3){                                          // if Todos length < 3 : add todo
        this.todos.push({
          title: value,
          completed: false,
          visibility: false
        })

        this.newtodo = ''                                             // clear the field of todo
        }

      if (this.todos.length >= 3){                                      // else if todo length > ou = 3 : add todo to task in order to add it 
        this.tasks.push({                                               // general task in the box of important, urgent ......
          title: value,
          completed: false
        })
      }

      if(this.tasks.length == 1){
            alert(' you have 3 or more ToDo \'s to do, all your ToDos will be placed on General Box !! :)' );         // a simple alert to show that
      }
                                                                                                                        // the new tasks will be deplaced
        this.newtodo = ''
    },
    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1 )                  // remove the todo using the comande splice to split the todo
    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
      todo.visibility = true
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        todo.visibility = false
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
        todo.visibility = false
    },

    cancelEdit: function (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
      todo.visibility = false
    },



    doneTodo: function () {                                           // done function
      $('#ToDos').on('change','.toggle', function(){                  // using the jquery function 
        $(this).parent().hide(3000); 
        $(this).parent().find('.dust-award').css({
            'animation':'prize 2s .1s ease-out both',                     // the animation 
            '-webkit-animation' : 'prize 2s .1s ease-out both',
            'z-index':'100000'
          });

          $(this).append('<audio src="../static/multimedia/audio/reward.mp3" autoplay></audio>');
      });
      this.count +=1 ;
    }
  },
  created: {

  },
  computed: {
  	todoCountAll: function() {
      return this.todos.length                                                                    // return the length of the todos 
    }
  }
}
</script>

<style>
/* define the font family */
@font-face{

  font-family: 'LDPU';

  src: url('../../../static/polices/Lovely.ttf');
  src: url('../../../static/polices/Lovely.ttf') format('truetype');
}


.header-list{ 
  position: relative;
  font-size: 15px;
  color: rgb(24,255,0);
  font-family: 'LDPU';
  margin-left: 35%;
  top: 4%;
}

.input-task{
  position: relative;
  text-align: center;
  font-size: 10px;
  left: 20%;
  top: 7%;
}

.todo-task{
  position: relative;
  width:88%;
  height: 50px;
  margin-right: 15px;
  background: url('../../../static/images/fill.png') no-repeat;
  background-size: 100% 100%;
  border : 1px solid green;
  box-shadow: 0 2px 0 green;
  margin: 1% 6%;
}

.todo-task-li{
  position: relative;
  left: 20px;
  font-size: 10px;
}

.todo-list{
  top: 12%;
  font-size: 10px;
  height: 168px;
  overflow: auto;
  position: relative;
}


.toggle{
  transform:translate(57%,130%);
  font-size: 15px;
}

.dust-award{
  position: absolute;
  z-index: 100;
  width: 45px;
  left: 45%;
  transform: translate(-5%,-4%);
  opacity: 0;
}

/* the annimation of showing the dust Reward */
@-webkit-keyframes prize {
  0% {
    opacity: 0;
    -webkit-transform: translate(-5%, -4%);
            transform: translate(-5%, -4%);
  }
  10% {
    opacity: 1;
    -webkit-transform: translate(-5%, -15%);
            transform: translate(-5%, -15%);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(-5%, -200%);
            transform: translate(-5%, -200%);
  }
}
 
@keyframes prize {
  0% {
    opacity: 0;
    -webkit-transform: translate(-5%, -4%);
            transform: translate(-5%, -4%);
  }
  10% {
    opacity: 1;
    -webkit-transform: translate(-5%, -15%);
            transform: translate(-5%, -15%);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(-5%, -200%);
            transform: translate(-5%, -200%);
  }
}


.todo-task .delete{
  position: relative;
  cursor: pointer;
  float: right;
  font-size: 10px;
  background-color: red;
  margin-right: 2px;
  margin-top: 2px;
  display: none;
}

.todo-task:hover .delete{
  display:block;
}


.editText{
  position: relative;
  left: 20px;
}

</style>