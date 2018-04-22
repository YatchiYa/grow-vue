<template>
	<div id="container_app">

  			 <!-- Habits Box -->
              <dailies id="habits">

              </dailies>


                <!-- Skills Box  -->
              <Skills id="skills">

              </Skills>


                <!--  ToDos Box  -->
              <ToDos id="ToDos">

              </ToDos>


                <!-- Calendar Box  -->
              <Calendar id="Calendar">

              </calendar>

    </div>
</template>


<script>
import dailies from './Dailies.vue'
import Skills from './Skills.vue'
import ToDos from './ToDos.vue'
import Calendar from './Calendar.vue'

export default {  
  name:'container',
  components: { dailies, Calendar, ToDos, Skills },
  data() {
  	return {

  	}
  },
  methods: {
    
  },
  created: {

  },
  computed: {
  	
  }
}

</script>

<style>

#skills,#habits,#ToDos,#Calendar{
  width: 47%;
  height: 49%;
  float:left;
  margin-bottom: 13px;
  margin-right: 20px;
  box-sizing: border-box;
  overflow: hidden;
  display: inline-box;
  background: white;
}

#habits{
  background-image: url('../../../static/images/border1.03.png');
  background-size: 100% 100%;
}
#skills{
  background-image: url('../../../static/images/border1.04.png');
  background-size: 100% 100%;
}
#Calendar{
  background-image: url('../../../static/images/border1.05.png');
  background-size: 100% 100%;
}


/*  *********  Header-list        ***********   */

#ToDos{
  background-image: url('../../../static/images/border1.02.png');
  background-size: 100% 100%;
}


</style>