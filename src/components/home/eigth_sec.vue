<template>
        

               <!-- ******************* Eigth Section *************************** -->
            <div id="eigth-sec">
              <div class="eigth-title" >
                <h3>The framework behind Grow</h3>
              </div>
              <div class="eigth-desc" >
                The framework behind Grow is a combination of positive psychology research, philosophy and game design. We combine these disciplines to you to reflect on the kind of person you want to become and then give you the tools to develop yourself in this direction.

              </div>
              <img class="fifth-img-frame" src="../../../static/images/st.png">
              <img class="fifth-img" src="../../../static/images/grow-play.jpg">
              <a href="#fourth-sec"><img src="../../../static/images/scroll.gif" class="scroll" style="left: 50%; top: 85%; position:absolute;"></a>
            </div>

            <!-- ***********************End Of The Eigth Section  *****************-->


</template>


<script>
export default {  
  name: 'eigth_sec',
  data() {
    return {
      
    }
  }
}
</script>


<style>


  /* eighth Area  */

#eigth-sec{
  position: absolute;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background: url('../../../static/images/home-003.jpg');
  background-size: 100% 100%;
  top: 300%;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid black;
}

.eigth-title{
  position: relative;
  width: 620px;
  height: 115px;
  margin-top: 12%;
  margin-left: 50%;
  text-align: center;
}
.eigth-title h3{
  color: white;
  font-size: 45px;
  font-weight: 890;
  font-family: 'VBG';
  text-shadow: 0px 2px 46px silver;
}

.eigth-desc{
  position: relative;
  color: white;
  width: 510px;
  height: 115px;
  margin-top: 0%;
  margin-left: 54%;
  text-align: center;
  font-size: 19px;
}



.scroll{
  position: absolute;
  width: 90px;
  top: 80%;
  left: 45%;
}

.fifth-img{
  position: absolute;
  width: 340px;
  height: 220px;
  top: 30%;
  left: 10%;                                    
}
.fifth-img-frame{
  position: absolute;
  width: 340px;
  height: 222px;
  top: 30%;
  left: 10%;
  z-index: 1;
}



</style>