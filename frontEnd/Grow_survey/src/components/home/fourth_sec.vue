<template>
        

              
            <!-- ************************** Fourth Section ***********************( still changing) -->
            <div id="fourth-sec">
              <!-- The small frame on top of the section -->
              <img src="../../../static/images/footer-0-bar.png" class="bar-fourth">
              <!-- The small image in the middle of the section -->
              <!--<img src="../../../static/images/logo-sec.png" class="logo-sec">-->
              <h2 class="middle-sec" >&emsp; Co-create the world of Elyrion</h2>

              <!-- The different boxes representing the tool boxes -->
              <div class="To-Do-list">
                <h3 style="padding-top: 100px; color:green; font-size:25px; text-shadow: 0px 2px 46px green;"> Connect to a growing community in your area  </h3>
            
                <!--<div class="To-Do-List-desc">
                  Keep your tasks, lists and reminders in one place, always in-sync across all your devices
                </div>-->
              </div>

              <div class="calendar">
                  <h3 style="padding-top: 150px; padding-bottom: 25px; color: aqua; font-size: 25px; text-shadow: 0px 2px 46px #00fff6;"> Solve riddles and fight powerful foes together </h3>
                
                <!--<div class="calendar-desc">
                  Plan your day, week, month, and life. Beautifully designed to help you rock your day, everyday
                </div>-->
              </div>

              <div class="Skill-List">
                  <h3 style="padding-top: 150px; padding-bottom: 25px; color: red; font-size: 25px; text-shadow: 1px 2px 46px red;"> Unlock tools to build positive habits </h3>
                
                <!--<div class="Skill-desc">
                  Do your Tasks, Improve your Self, And Up your Skill's To Fight with the Dust Weaver team 
                </div>-->
              </div>

              <div class="Daillies">
                <h3 style="padding-top: 100px; color: #ff00ea; font-size:25px; text-shadow: 0px 2px 46px #ed00fc;"> Start on your own hero’s journey and complete quests in your real life </h3>
                
                <!--<div class="Daillies-desc">
                  Bad Habits ? Good ones ? this is for you ! do your habits with the fantasiest schedule, with Us.
                </div>-->
              </div>
              <a href="#nero-sec"><img src="../../../static/images/scroll.gif" class="scroll" style="left: 50%; top: 87%; position:absolute;"></a>

            </div>

            <!-- *********************** The End of the fourth section *****************-->



</template>


<script>
export default {  
  name: 'fourth_sec',
  data() {
    return {
      
    }
  }
}
</script>


<style>


/*  fourth sec */

#fourth-sec{
  position: absolute;
  overflow: hidden;
  background-image: url('../../../static/images/home-0.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  top: 500%;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
}

.bar-fourth{
  position: absolute;
  left:22%;
  top: 1%;
}


#bottom-sec{
  position: absolute;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: url('../../../static/images/home-bottom.png');
  background-size: cover;
  background-attachment: fixed;
  top: 550%;
  width: 100%;
  height: 60%;
}

.bottom-key{
  text-align: center;
  padding-top: 70px;
  font-size: 45px;
  font-family: 'VBG';
  color: white;
}

.subscribe{
  position: relative;
  background: url('../../../static/images/email-background.png') no-repeat;
  color: white;
  width: 49%;
  height: 100px;
  top: 10%;
  left: 23%;  
}
.zone-text{
  position: absolute;
  border: none;
  top: 40%;
  left: 37%;
  font-size: 20px;
  text-align: center;
  color: black;
}



.calendar{
  position: absolute;
  width: 350px;
  height: 350px;
  left: 65%;
  text-align: center;
}
.calendar-logo{
  position: relative;
  width: 50px;
  height: 50px;
  left: 1%;
}
.calendar-desc{
  position: relative;
  padding-top: 7%;
  left: 10%;
  color: #dee2e6;
  width: 279px;
  height: 137px;
  font-size: 20px;
  text-align: center;
}

/*  ToDo List */
.To-Do-list{
  position: absolute;
  width: 350px;
  height: 350px;
  left: 10%;
  top: 48%;
  text-align: center;
}


.checked-logo{
  position: relative;
  width: 50px;
  height: 50px;
  margin-top: 4%;
}
.To-Do-List-desc{
  position: relative;
  left: 8%;
  color: #dee2e6;
  width: 279px;
  height: 137px;
  font-size: 20px;
  text-align: center;
}



/* Skill's */
.Skill-List{
  position: absolute;
  width: 350px;
  height: 350px;
  left: 10%;
  text-align: center;
}
.Skill-logo{
  position: relative;
  width: 50px;
  height: 50px;
  left: 1%;
}
.Skill-desc{
  position: relative;
  padding-top: 7%;
  left: 10%;
  color: #dee2e6;
  width: 279px;
  height: 137px;
  font-size: 20px;
  text-align: center;
}


/*  Daillies */
.Daillies{
  position: absolute;
  width: 350px;
  height: 350px;
  left: 65%;
  top: 48%;
  text-align: center;
}


.Daillies-logo{
  position: relative;
  width: 50px;
  height: 50px;
  margin-top: 4%;
}
.Daillies-desc{
  position: relative;
  left: 8%;
  color: #dee2e6;
  width: 279px;
  height: 137px;
  font-size: 20px;
  text-align: center;
}

.logo-sec{
  position: absolute;
  width: 130px;
  top: 37%;
  left: 46%;
}
.middle-sec{
  position: absolute;
  width: 530px;
  top: 41%;
  left: 36%;
  color: white;
  text-shadow: 0px 2px 41px #0843d1;
  font-size : 26px;
}



</style>