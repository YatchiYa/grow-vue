<template>
        

               <!-- ******************* login Section *************************** -->
            <div id="login-PopUp">
                  <div id="login-PopUp-bg" class="close" @click="hideLogin"></div>
                    <div id="login-PopUp-main">
                      <img src="../../../static/images/closeIcon.png" class="closeIcon close" @click="hideLogin"/>
                      <img src="../../../static/images/login-ico.gif" class="logo-login-ico">
                      <img src="../../../static/images/login.png" class="logo-login">

                      <form method=POST style="text-align:center; padding-top:10%;">
                         <label for="email">Email</label>
                          <input v-model="email" type="text" class="control-user" name="email" placeholder="email" style="margin-left:40px;">
                            <br>
                          <label for="pass">Password </label>
                          <input v-model="password" type="password" class="control-pass" name="pass" placeholder="Password" style="margin-left:13px;">
                            <br>
                        <button @click.prevent='login' class="btn-submit" style="margin-top:20px;">Log In</button>
                      </form>

                    </div>
              </div>

            <!-- ***********************End Of The login Section  *****************-->


</template>


<script>

import Firebase from 'firebase'
import swal from 'sweetalert'

export default {  
  name: 'login_sec',
  data() {
    return {
      email : '',
      password : ''
    }
  },
  methods: {
    hideLogin: function(){
      $('#login-PopUp').fadeOut();
      $('#login-PopUp-main').fadeOut();
    },
  login: function () {
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('Main');
        },
        (error) => {
          swal(' opps '+ error.message)
        }
      );
  }
  }
}
</script>


<style>


/**********************   login pop  ****************************/

#login-PopUp{
  position: fixed;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  top: 0;
  margin-left: 0;
  display:none;
}

#login-PopUp-bg{
  background : rgba(0,0,0,0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 15px;
  top: 0;
}

#login-PopUp-main{
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
  display:none;
}

/*  close icon */
.closeIcon{
  position: absolute;
  right: 0;
  top: 0.6%;
  cursor: pointer;
}

.logo-login{
  position: relative;
  padding:1% 27%;
}

.logo-login-ico{
  position: relative;
  transform : translate(-10% -10%);
}

</style>