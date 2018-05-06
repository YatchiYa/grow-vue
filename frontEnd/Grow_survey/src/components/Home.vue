<template>
  <div id="app_home">
  	
  		

    <enter_website></enter_website>
  	<first_sec> </first_sec>
  	<third_sec> </third_sec>
  	<fourth_sec> </fourth_sec>
  	<fifth_sec> </fifth_sec>
  	<sixth_sec> </sixth_sec>
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
import third_sec from './home/third_sec.vue'
import fourth_sec from './home/fourth_sec.vue'
import fifth_sec from './home/fifth_sec.vue'
import sixth_sec from './home/sixth_sec.vue'
import bottom_sec from './home/bottom_sec.vue'
import feedback_sec from './home/feedback_sec.vue'
import footer_sec from './home/footer_sec.vue'

import login_sec from './home/login_sec.vue'
import signup_sec from './home/signup_sec.vue'
import undefined_sec from './home/undefined_sec.vue'



export default {  
  name:'Home',
  components: { enter_website, first_sec,third_sec, fourth_sec, fifth_sec, sixth_sec, bottom_sec, feedback_sec, footer_sec, login_sec, signup_sec, undefined_sec },
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

.scrollDown{
  position:absolute;
  left: 45%; 
  top: 82%;
}

</style>