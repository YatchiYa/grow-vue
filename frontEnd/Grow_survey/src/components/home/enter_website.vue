<template>
 <div id="enter-website-container">
 	<a href="#first-sec" @click="enterWebsite"><img src="../../../static/images/scroll.gif" id="scrollDown"></a>
 </div>			
  	
</template>

<script>
export default {  
  name: 'enter_website',
  data() {
    return {

    }
  },
  methods: {
  	enterWebsite(){
  		// remove first part
  		$("body").append('<a href="#" @click="ToTop"><img src="../../static/images/GoTop.gif" id="DragonTop"></a>');

  	}
   }

}
</script>

<style>

#enter-website-container{
  position: absolute;
  overflow: hidden;
  background-image: url('../../../static/images/grow-logo.jpg'); 
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width : 100%;
  height : 100%;
}

</style>