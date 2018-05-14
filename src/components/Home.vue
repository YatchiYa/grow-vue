<template>
  <div id="app_home">
  	
  		<a v-show="showToTop" href="#" @click="ToTop"><img src="../../static/images/GoTop.gif" class="DragonTop"></a>

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


    
  	<!-- 
    <div id="window">
        reading
    </div>
    -->


  </div>
</template>



<script>
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
  components: { first_sec, second_sec,third_sec, eigth_sec, fourth_sec, nero_sec, bottom_sec, feedback_sec, footer_sec, login_sec, signup_sec, undefined_sec },
  data() {
  	return {
      showToTop: true
  	}
  },
  methods: {
    ToTop: function(){
      $('html, body').animate({scrollTop : 0},800);
       return false;
    }
  },
  computed: {
  
  }
}

</script>


<style>


.DragonTop{
  position: fixed;
  top: 89%;
  left: 94%;
  z-index: 100;
  width: 80px;
  border-radius: 50px;
  cursor: pointer;
}


#window{
  position: absolute;
  width: 200px;
  height: 200px;
  background: red;
  z-index: 1000000;
  color: green;
}
</style>