<template>
  <div>
    <div id="ToDos_n" v-show="ShowToDoNow">

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

                <input class="toggle" type="checkbox" v-model="todo.completed" @click="doneTodo(todo)">
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
                            margin-top: 12%;
                            border-radius:7px;
                            font-size: 15px;">

                            {{ count }}/{{ todoCountAll }}

              </div>


                  <img class="img-all" src="../../../static/images/all.png" title="show all tasks" @click="ShowTo()">

    </div>

    <div id="ToDos_all" v-show="ShowAllToDo">

                <h3 class="all-Todos-title"><strong>All The Way There Is To Do</strong></h3>
                <div id="all_there_is">
                    
                    <div v-for="task in tasks" class="todo-task"
                      :key="task.id"
                      :class="{ completed: task.completed, editing: task == editedtask }">

                          <img class="toggle_t" src="../../../static/images/row.png" @click="addTodo2(task)" >
                          <label v-if="!task.visibility" class="todo-task-li" @dblclick="editTodo(task)" style="left:7px;"> {{ task.title }} </label>
                          <label class="delete" @click="removetask(task)"></label>

                          <input v-if="task.visibility" class="editText" type="text"
                            v-model="task.title"
                            v-task-focus="task == editedtask"
                            @blur="doneEdit(task)"
                            @keyup.enter="doneEdit(task)"
                            @keyup.esc="cancelEdit(task)"
                            style="font-size:11px;">

                          <img src="../../../static/images/dust.png" class="dust-award">
                      </div>



                </div>
              <div id="blocks">
                <div id="Important_urgent">         <!--  block important and urgent -->
                  <div id="title-IU">
                    <h1> Important and Urgent (10%)</h1>
                  </div>
                  <div id="important_urgent-task">

                  </div>
                </div>

                <div id="important">          <!--  block important -->
                  <div id="title-I">
                    <h1> Important (90%)</h1>
                  </div>
                  <div id="important-task">

                  </div>

                </div>

                <div id="urgent">           <!-- block urgent -->
                  <div id="title-U">
                    <h1> Urgent </h1>
                  </div>
                  <div id="urgent-task">

                  </div>
                </div>

                <div id="not_important-urgent">     <!--  block not important and not urgent -->
                  <div id="title-NIU">
                    <h1> Not Important and Not Urgent </h1>
                  </div>
                  <div id="not_important-urgent-task">

                  </div>
                </div>
                <img class="img-todo" src="../../../static/images/todo.png" title="show all tasks" @click="HideTo()" style="cursor:pointer; position: absolute;top: 38%;left: 2%;">

              </div>

              
    </div>

  </div>
</template>

<script>
import swal from 'sweetalert'

export default {  
  name:'ToDos',
  components: { },
  data() {
  	return {
      todos: [],
      tasks: [],
      newtodo: '',
      editedTodo: '',
      count: 0,
      ShowAllToDo : false,
      ShowToDoNow: true
  	}
  },
  methods: {
    addTodo: function () {                                           // add function Todo
      var value = this.newtodo && this.newtodo.trim()                 // grab the value of ToDo

      if (!value) {
        return                                                          // if the value is empty return nothing 
      }

      if(this.todos.length <= 2){                                          // if Todos length < 3 : add todo
        this.todos.push({
          title: value,
          completed: false,
          visibility: false
        })

        this.newtodo = ''                                             // clear the field of todo
        }

      if (this.todos.length >2){                                      // else if todo length > ou = 3 : add todo to task in order to add it 
        this.tasks.push({                                               // general task in the box of important, urgent ......
          title: value,
          completed: false,
          visibility: false
        })
      }

      if(this.tasks.length == 1){
            swal(' you have 3 or more ToDo \'s to do, all your ToDos will be placed on General Box !! :)' );         // a simple alert to show that
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



    doneTodo: function (todo) {                                           // done function
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
    },

    // showing ToDoS All
    ShowTo: function() {
      this.ShowToDoNow = false
      this.ShowAllToDo = true
    },
    HideTo: function() {
      this.ShowToDoNow = true
      this.ShowAllToDo = false      
    },

    // tasks part 

    removetask: function (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1 )                  // remove the task using the comande splice to split the task
    },

    edittask: function (task) {
      this.beforeEditCache = task.title
      this.editedtask = task
      task.visibility = true
    },

    doneEdit_t: function (task) {
      if (!this.editedtask) {
        task.visibility = false
        return
      }
      this.editedtask = null
      task.title = task.title.trim()
      if (!task.title) {
        this.removetask(task)
      }
        task.visibility = false
    },

    cancelEdit_t: function (task) {
      this.editedtask = null
      task.title = this.beforeEditCache
      task.visibility = false
    },



    donetask: function () {                                           // done function
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
    },

    // about the task, adding to the ToDos 


    addTodo2: function (task) {                                           // add function Todo
      var value = task.title                 // grab the value of ToDo

      if(this.todos.length <= 2){                                          // if Todos length < 3 : add todo
        this.todos.push({
          title: value,
          completed: false,
          visibility: false
        })
          this.tasks.splice(this.tasks.indexOf(task), 1 )
        }

        if(this.todos.length > 2){                                          // if Todos length < 3 : add todo
          swal(' You Have 3 task or more on your ToDos');
        }


      
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



/*  the different updates that i had made from the last ....  */
#ToDos_n{
  position: relative;
  top:4%;
}



/*  this the second part of the ToDos where you can select the different categories to your task */



/*  General Todos  All  */

#all-Todos{
  position: absolute;
  height: 400px;
  width: 300px;
  background-size: 100% 100%;
  background-color: rgba(57, 216, 115, 0.86);
  left: 63%;
  top: 20%;
  border-radius: 10px;
  box-shadow: -3px 3px 6px #eeeeee;
  z-index: 1000;
  border: 5px groove greenyellow;
  display: none;
}
.all-Todos-title{
  margin-top: 10px;
  font-size: 11px;
  text-align: center;
  color: #590050;
  font-family: 'LDPU';
}

.img-all{
  position: relative;
  transform:translate(-65%,-130%);
  cursor: pointer;
  float: right;
}
.closeIcon-all{
  position: relative;
  float: right;
  width: 11px;
  cursor: pointer;
  top : 1px;
}




/*  -------------  the different field   -------------------*/

/* all there is todo */
#all_there_is{
  position: relative;
  width: 82%;
  height: 140px;
  margin-left: 27px;
  overflow: auto;
  margin-top:3%;
}



#blocks{
  width: 94%;
  height: 250px;
  overflow: auto;
  position: relative;
  margin-left: 10px;
  margin-top: 0;;
}



/* ----------------field title -------------------*/
#title-IU,#title-I,#title-U,#title-NIU,#title-A{  
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
}

/* ---------------------cursor hover title ------------------------ */
#title-IU,#title-I,#title-U,#title-NIU,#title-A:hover{
  font-size: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/*  ------------------block tasks-------------------------- */
#important_urgent-task,#important-task,#urgent-task,#not_important-urgent-task{
  position: relative;
  margin-top: 5px;
  height: 70px;
  font-size: 12px;
  padding: 0;
  margin: 0;
  overflow: auto; 
  display:none;
}

/*  make the boxe of title small */
#Important_urgent h1, #important h1, #urgent h1, #not_important-urgent h1{
  margin-top: 4px;
  margin-bottom: 6px;
  font-size: 9px;
}


#important_urgent-task ul,#important-task ul,#urgent-task ul,#not_important-urgent-task ul{
  display: block;
  background-image: url('../../../static/images/fill.png');
  padding: 10px 0px 10px 0px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 20px;
  margin: 0 7px;
  box-shadow: 2px 2px 0px black;
}


/*  ------------------important & urgent ----------------------------- */
#title-IU{
  border-bottom: 1px solid red;
}

#Important_urgent h1{
  color: red;
}

#title-IU:hover{
  background-color: rgba(255,4,4,0.3);
  cursor: pointer;
}




/*  ------------------- important --------------------------*/
#title-I{
  border-bottom: 1px solid brown;
}

#important h1{
  color: brown;
}

#title-I:hover{
  background-color: rgba(211,100,67,0.4);
  cursor: pointer;
}



/* -----------------------urgent ------------------------- */
#title-U{
  border-bottom: 1px solid green;
}
#urgent h1{
  color: green;
}

#title-U:hover{
  background-color: rgba(143,237,126,0.4);
  cursor: pointer;
}





/*  -------------------------- not important & not urgent ---------------------------- */
#title-NIU{
  border-bottom: 1px solid #03327f;
}
#not_important-urgent h1{
  color: #03327f;
}

#title-NIU:hover{
  background-color: rgba(69,222,239,0.4);
  cursor: pointer;
}

/* space in the end to show the box */
#not_important-urgent{
  margin-bottom: 10px;
}

.toggle_t{
  width:20px;
  position: relative;
  top:20%;
  cursor: pointer;
}



</style>