<template>
   <div>
    <div class="block">
        <p class="digit">{{ days | two_digits }}</p>
        <p class="text">Days</p>
    </div>
    <div class="block">
        <p class="digit">{{ hours | two_digits }}</p>
        <p class="text">Hours</p>
    </div>
    <div class="block">
        <p class="digit">{{ minutes | two_digits }}</p>
        <p class="text">Minutes</p>
    </div>
    <div class="block">
        <p class="digit">{{ seconds | two_digits }}</p>
        <p class="text">Seconds</p>
    </div>
   </div>
</template>
<script>
export default {
    name: "pomodoro",
    ready() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },
    props : {
        date : {
            type: Number,
            coerce: str => Math.trunc(Date.parse(str) / 1000)
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    computed: {
        seconds() {
            return (this.date - this.now) % 60;
        },
        minutes() {
            return Math.trunc((this.date - this.now) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.date - this.now) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.date - this.now) / 60 / 60 / 24);
        }
    }
}
</script>
<style>
body {
  background-color: black;
}
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
    display: inline-block;
}
.text {
    color: #1abc9c;
    font-size: 30px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}
.digit {
    color: #ecf0f1;
    font-size: 30px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
}
</style>








<!-- 
<template>
  <div id="pomodoroContainer">
      <span>{{timeMax}}</span>
  </div>
</template>


<script>
export default {
  name: 'pomodoro',
  data () {
    return {
    timeMax: 25 * 60,
    timeCurrent: this.timeMax,
  }
  }
}







</script>


<style>

#pomodoroContainer{
   width: 300px;
   height: 300px;
   display: block;
   position: absolute;
   top: 25%;
   left: 35%;
   background-color: lightblue;
   text-align: center;
}

#pomodoroContainer > span {
  font-size: 35px;
  position: absolute;
  top: 40%;
  left: 38%;

}
</style>

