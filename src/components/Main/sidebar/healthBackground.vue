<template>

<div>
  <div id="healthContainerPosition">
    <div id="healthContainer">
    </div>
  </div>
  
  <!-- to check after -->

  <!-- 
  
  <button>{{health}}</button>
  <button @click="incrementHealth">Health++</button>
  <button @click="decreaseHealth">Health--</button>

  -->
</div>

</template>

<script>
//This data could be imported from a JSON file
var health = 30,
    maxHealth = 50;

export default {
  name: 'healthBackground',
  data () {
    return {
      health: health
    }
  },

methods: {
// BUTTON OPTIONS TO PLAY AROUND WITH INCREASING AND DECREASING HEALTH
incrementHealth: function () {
  this.health += 10;
},

decreaseHealth: function() {
  this.health -= 10;
},


loadHealth: function () {
 let healthPercentage = this.health / maxHealth * 100,
     colorMinus = 255 - healthPercentage * 2;

// SIMPLE DYING FUNCTIONS
if (this.health <= 0) {
    alert("You just died!");
    this.health = maxHealth;
}
// SIMPLE MAX HEALTH FUNCTION
if (this.health > maxHealth) {
alert("max health!");
this.health = maxHealth;
}

// LOADING HEALTH BACKGROUND
$("#healthContainer").css({
  "background-image": "radial-gradient(ellipse farthest-corner at 50% 50%, rgba(" +
    colorMinus + ", 0, 0, 0.2) 10%, rgba(0," + Math.floor(healthPercentage * 2.5) + ",0, 0.8) 90%)" //?
});

//SETTING HEALTH EQUAL TO THE UPDATED HEALTH AGAIN --> SAVING DATA IN SERVER
health = this.health;
},

},

// INITIAL LOADING OF HEALTH BACKGROUND
mounted:
function(){
this.loadHealth();
},

// LOAD HEALTH BACKGROUND WHEN HEALTH CHANGES
updated:
function(){
this.loadHealth()
},

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#healthContainerPosition {
  height: 192px;
  width: 255px;
}
#healthContainer {
  height: 192px;
  width: 255px;
  background-color: #A3320B;
  -webkit-transition: background-image 0.5s;
  -moz-transition: background-image 0.5s;
  -ms-transition: background-image 0.5s;
  -o-transition: background-image 0.5s;
  transition: background-image 0.5s;
  position: absolute;
  border-bottom: 1px solid gray;
  /* Keeps Avatar Image in the foreground */
  z-index: 9;
}

</style>




 <!-- FETCH DATA EXAMPLE 
  created () {

    fetch('https://api.giphy.com/v1/gifs/search?q=cheeseburger')
      .then(res => res.json())
      .then(data => {
        this.msg = data.pages[0].title
      })
  
  }
 
} -->