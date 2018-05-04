<template>
  <div id="app_home">
  	
  		

    <enter_website></enter_website>
  	<first_sec> </first_sec>
  	<second_sec> </second_sec>
  	<third_sec> </third_sec>
  	<eigth_sec> </eigth_sec>
  	<fourth_sec> </fourth_sec>
  	<nero_sec> </nero_sec>
  	<bottom_sec> </bottom_sec>
  	<feedback_sec> </feedback_sec>
  	<footer_sec> </footer_sec>


    <login_sec> </login_sec>
    <signup_sec> </signup_sec>
    <undefined_sec> </undefined_sec>
  	

  </div>
</template>



<script>
import enter_website from './home/enter_website.vue'
import first_sec from './home/first_sec.vue'
import second_sec from './home/second_sec.vue'
import third_sec from './home/third_sec.vue'
import eigth_sec from './home/eigth_sec.vue'
import fourth_sec from './home/fourth_sec.vue'
import nero_sec from './home/nero_sec.vue'
import bottom_sec from './home/bottom_sec.vue'
import feedback_sec from './home/feedback_sec.vue'
import footer_sec from './home/footer_sec.vue'

import login_sec from './home/login_sec.vue'
import signup_sec from './home/signup_sec.vue'
import undefined_sec from './home/undefined_sec.vue'



export default {  
  name:'Home',
  components: { enter_website, first_sec, second_sec,third_sec, eigth_sec, fourth_sec, nero_sec, bottom_sec, feedback_sec, footer_sec, login_sec, signup_sec, undefined_sec },
  data() {
  	return {
  	}
  },
  methods: {
    ToTop: function(){
      $('html, body').animate({scrollTop : 0},800);
       return false;
    }
  }
}

</script>


<style>


#DragonTop{
  position: fixed;
  top: 89%;
  left: 94%;
  z-index: 100;
  width: 80px;
  border-radius: 50px;
  cursor: pointer;
}

#scrollDown{
  position:absolute;
  left: 45%; 
  top: 82%; 
}

</style>