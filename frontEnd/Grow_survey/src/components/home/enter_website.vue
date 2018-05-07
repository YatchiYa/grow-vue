<template>
 <div id="enter-website-container">
 	<a href="#first-sec" @click="enterWebsite"><img src="../../../static/images/scroll.gif" class="scrollDown"></a>
 </div>			
  	
</template>

<script>
import first_sec from './first_sec.vue'

export default {  
  name: 'enter_website',
  data() {
    return {

    }
  },
  methods: {
  	enterWebsite(){
  		// remove first part
  		document.getElementById('enter-website-container').remove();

  		// move first section to top and show second section which was previously hidden due to same position with first section
  		document.getElementById('first-sec').style.top = "0px";
  		
  		// second section currently disabled
  		// document.getElementById('second-sec').style.display = "inline-block"; 		
  	}
   }

}
</script>

<style>

#enter-website-container{
  position: absolute;
  overflow: hidden;
  background-image: url('../../../static/images/grow-play.jpg'); 
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width : 100%;
  height : 100%;
}

</style>