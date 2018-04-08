<template>
        

               
            <!-- ************************ The nero section ******************-->
            <div id="nero-sec">
              <div class="nero-title">
                <h3>Your Turn !!</h3>
              </div>
              <div class="nero-desc">
                You, as the player, become one of the first testers of this device. To test it out you need to go on journeys and collect as much dust as you can. If this experiment proves to be successful humanity will have a tool to train their dust weavers and bring all of them together to beat Eon back once and for all!
              </div>        
            </div>
            <!-- ********************The End Of the Nero section ************************ -->



</template>


<script>
export default {  
  name: 'nero_sec',
  data() {
    return {
      
    }
  }
}
</script>


<style>




/*  neroo section  ******************/

#nero-sec{
  position: absolute;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background: url('../../../static/images/home-7.png');
  background-size: 100% 100%;
  top: 500%;
  width: 100%;
  height: 50%;
  border-bottom: 2px solid black;  
}

.nero-title{
  position: relative;
  width: 620px;
  height: 115px;
  margin-top: 5%;
  margin-left: 25%;
  text-align: center;
}
.nero-title h3{
  color: white;
  font-size: 35px;
  font-weight: 890;
  font-family: 'VBG';
  text-shadow: 0px 2px 46px silver;
}

.nero-desc{
  position: relative;
  color: white;
  width: 510px;
  height: 115px;
  margin-top: 0%;
  margin-left: 30%;
  text-align: center;
  font-size: 14px;
}


.dust-is{
  position: absolute;
  top: 544%;
  left: 33%;
  z-index: 100;
}



.feedbacks{
  position: absolute;
  top: 18%;
  left: 77%;
  z-index: 1000;
  cursor: pointer;
  width: 180px;
}


</style>