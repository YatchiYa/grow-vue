<template>
        

            <!-- *************************** Third Section ********************** -->
            <div id="third-sec">
              <div class="third-title">
                <h3> Our vision ?  </h3>
              </div>
              <div class="third-desc">
                  is to use games to increase the number of lives lived well. We want to achieve this by bringing people together, empowering them to have an open discussion and giving them the tools to make a change.  
              </div>
              <img class="third-img-frame" src="../../../static/images/st.png">
              <img class="third-img" src="../../../static/images/dust-society.jpg"><a href="#eigth-sec"><img src="../../../static/images/scroll.gif" class="scroll" style="left: 50%; top: 88%; position:absolute;"></a>
            </div>
            <!-- ******************** End Of The Third Section  ************************ -->





</template>


<script>
export default {  
  name: 'third_sec',
  data() {
    return {
      
    }
  }
}
</script>


<style>


  /* ************************************** Third Area  ********************************* */

#third-sec{
  position: absolute;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('../../../static/images/home-002.jpg');
  background-size: cover;
  background-attachment: fixed;
  top: 200%;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid black;
}


.third-title{
  position: relative;
  width: 360px;
  height: 115px;
  margin-top: 10%;
  margin-left: 10%;
  text-align: center;
}
.third-title h3{
  color: white;
  font-size: 66px;
  font-weight: 890;
  font-family: 'VBG';
  text-shadow: 0px 2px 46px silver;
}

.third-desc{
  position: relative;
  color: white;
  width: 470px;
  height: 115px;
  margin-top: 5%;
  margin-left: 7%;
  text-align: center;
  font-size: 23px;
}

.third-img{
  position: absolute;
  width: 340px;
  height: 222px;
  top: 33%;
  left: 60%;                                    
}
.third-img-frame{
  position: absolute;
  width: 340px;
  height: 222px;
  top: 33%;
  left: 60%;
  z-index: 1;
}


</style>