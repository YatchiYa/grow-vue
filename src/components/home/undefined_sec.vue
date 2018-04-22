<template>
        

          <!-- social pop up page -->


              <div id="social-PopUp">
                  <div id="social-PopUp-bg" class="close" @click="hideSocial"></div>
                    <div id="social-PopUp-main">
                      <img src="../../../static/images/closeIcon.png" class="closeIcon close" @click="hideSocial"/>
                      <img src="../../../static/images/sorry.gif" class="sorry"/>
                      <div class="text">
                        waaff waff !!!
                      </div>
                      

                    </div>
              </div>
  
          <!-- End social pop up main page  -->


</template>


<script>
export default {  
  name: 'undefined_sec',
  data() {
    return {
      
    }
  },
  methods: {
    hideSocial: function(){
      $('#social-PopUp').fadeOut();
      $('#social-PopUp-main').fadeOut();
    }
  }
}
</script>


<style>

/**********************   social pop  ****************************/

#social-PopUp{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  top: 0;
  margin-left: 0;
  display: none;
}

#social-PopUp-bg{
  background : rgba(0,0,0,0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 15px;
  top: 0;
}

#social-PopUp-main{
  position: relative;
  width: 30%;
  height: 70%;
  top: 20%;
  margin : auto; 
  background: white;
  background-size: 100% 100%;
  border-radius: 15px;
  z-index: 1; 
  box-shadow: 5px 5px 5px rgba(18,70,15,0.6);
  display: none;
}

/*  close icon */
.closeIcon{
  position: absolute;
  right: 0;
  top: 0.6%;
  cursor: pointer;
}


.sorry{
  position: relative;
  width: 100%;
}

#social-PopUp-main .text{
  font-size: 15px;
  text-align: center;
  color: #8a038f;
}





</style>  