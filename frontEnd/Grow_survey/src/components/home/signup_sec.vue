<template>
        

               <!-- ******************* signUp Section *************************** -->
            <div id="signUp-PopUp">
                  <div id="signUp-PopUp-bg" class="close" @click="hidesignUp"></div>
                    <div id="signUp-PopUp-main">
                      <img src="../../../static/images/closeIcon.png" class="closeIcon close" @click="hidesignUp" />
                      <img src="../../../static/images/signup-ico.gif" class="logo-login-ico">
                      <img src="../../../static/images/signUp.png" class="logo-login">

                      <form method=POST style="text-align:center; padding-top:5%;">
                               <label for="username">Username</label>
                                  <input type="text" class="control-user" name="username" placeholder="Username" style="margin-left:10px;">
                                    <br>
                                  <label for="Email">E-mail</label>
                                  <input type="email" class="control-user" name="Email" placeholder="E-mail" style="margin-left:35px;">
                                    <br>
                                  <label for="pass">Password </label>
                                  <input type="password" class="control-pass" name="pass" placeholder="Password" style="margin-left:13px;">
                                    <br>
                                  <label for="pass"> Key </label>
                                  <input type="text" class="control-pass" name="Key" placeholder="Beta-Key" style="margin-left:52px;">
                                    <br>
                                <button type="submit" class="btn-register" style="margin-top:20px;">Register</button>
                            </form>


                    </div>
              </div>

            <!-- ***********************End Of The signUp Section  *****************-->


</template>


<script>
export default {  
  name: 'signup_sec',
  data() {
    return {
      
    }
  },
  methods: {
    hidesignUp: function(){
      $('#signUp-PopUp').fadeOut();
      $('#signUp-PopUp-main').fadeOut();
    }
  }
}
</script>


<style>

/**********************   signUp pop  ****************************/

#signUp-PopUp{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  top: 0;
  margin-left: 0;
  display: none;
}

#signUp-PopUp-bg{
  background : rgba(0,0,0,0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 15px;
  top: 0;
}

#signUp-PopUp-main{
  position: relative;
  width: 30%;
  height: 60%;
  top: 25%;
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
  right: 10%;
  top: 0.6%;
  cursor: pointer;
}




</style>