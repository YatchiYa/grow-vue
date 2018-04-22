<template>
        

            <!-- ********************* Second Section ******************* -->
            <div id="second-sec">
              <div class="secondo-title-1" >
                Be Ready !!
              </div>
              <div class="secondo-title-2" >
                Get Started !!
              </div>
              <div class="secondo-title-3" >
                Change Your Life !!
              </div>
              <div class="secondo-title-4" >
                
              </div>
              <a href="#third-sec"><img src="../../../static/images/scroll.gif" class="scroll" style="left: 50%; top: 87%; position:absolute;"></a>
            </div>
            <!--******************** End Of The Second Section *******************-->


</template>


<script>
export default {  
  name: 'second_sec',
  data() {
    return {
      
    }
  }
}
</script>


<style>


    /************************   Second Area  ****************** */

#second-sec{
  position: absolute;
  overflow: hidden;
  background: url('../../../static/images/home-001.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 100%;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
}

/****************  The differrent title text in the second section ****************/
.secondo-title-1{
  position: absolute;
  font-size: 55px;
  font-family: 'VBG';
  color: white;
  top: 12%;
  left: 25%;
}



.secondo-title-2{
  position: absolute;
  font-size: 59px;
  font-family: 'VBG';
  color: white;
  top: 30%;
  left: 60%;
}
.secondo-title-3{
  position: absolute;
  font-size: 37px;
  font-family: 'VBG';
  color: white;
  top: 66%;
  left: 40%;
}
.secondo-title-4{
  position: absolute;
  font-size: 30px;
  font-family: 'VBG';
  color: white;
  top: 82%;
  left: 19%;
}


</style>