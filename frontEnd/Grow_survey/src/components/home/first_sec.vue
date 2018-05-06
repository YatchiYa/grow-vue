<template>

   			<!--  ********** First Section ************** -->
	    			<div id="first-sec">
	    				<!-- *******   The Menu Bar on Top ************ -->
		    			<nav class="topMenu">
		    				<ul class="Menu">
                  <li class="home"><router-link :to="{ name: 'Main' }"> Game </router-link></li>
		    					<li class="blog"><router-link :to="{ name: 'story' }"> Story </router-link></li>
		    					<li class="about_us"><router-link :to="{ name: 'about' }"> About Us </router-link></li>
		    					<li class="request_demo" @click="showsocialmodal"> Social Media</li>
		    					<li id="login_signup">
		    						<div class="login-signup">
				    					<span class="login" @click="showlogin"> Login </span>
				    					<span> / </span>
				    					<span class="signup" @click="showsignup"> SignUp </span>
				    				</div>	
			    				</li>
		    				</ul>
		    			</nav>
		    			<!-- End Of The Menu Bar  -->


		    		<!-- The different Logo images on the first section -->
		    			<img src="../../../static/images/role-playing.png" class="role-playing" >
		    			<a ><img src="../../../static/images/learn-more.png" class="learn-logo" ></a>
		    			<a href="#bottom-sec"><img src="../../../static/images/for-Beta.png" class="for-beta" ></a>
		    			<a href="#third-sec" @click="scroll"><img src="../../../static/images/scroll.gif" class="scrollDown"></a>
	    			</div>
	    			<!-- ******************* End Of The First section *********************-->

  	
  	
</template>

<script>
export default {  
  name: 'first_sec',
  data() {
    return {

    }
  },
  methods: {
    showlogin: function(){
      $('#login-PopUp').fadeIn();
      $('#login-PopUp-main').show();
    },
    showsignup: function(){
      $('#signUp-PopUp').fadeIn();
      $('#signUp-PopUp-main').show();
    },
    showsocialmodal: function(){
      $('#social-PopUp').fadeIn();
      $('#social-PopUp-main').show();    
    }

  }

}
</script>


<style>

/*   ----------------  First section  **************************** */
#first-sec{
  position: absolute;
  overflow: hidden;
  background-image: url('../../../static/images/home-01.jpg'); 
  background-size: cover;
  background-attachment: fixed;
  top:100%;
  width : 100%;
  height : 100%;
}

 /* ------------------------ Font Define ------------------------*/
@font-face{

  font-family: 'roots';

  src: url('../../../static/polices/HEAVENLYROOTED.ttf');
  src: url('../../../static/polices/HEAVENLYROOTED.ttf') format('truetype');
}

@font-face{

  font-family: 'VBG';

  src: url('../../../static/polices/ValeriaBoldGrunge.ttf');
  src: url('../../../static/polices/ValeriaBoldGrunge.ttf') format('truetype');
}


/* ************************** Menu Navigation *********************** */

.Menu{
  position: relative;
  list-style: none;
  width: 967px;
  height: 127px;  
  background: url('../../../static/images/menu-background.png');
  margin: 0 auto;
  color: white;
  border: none;
}
.Menu li{
  float: left;
  letter-spacing: 1px;
  font-family: 'roots';
  margin-left: 20px;
  padding-right: 10px;
  font-size: 31px;
  text-align: center;
  height: 92px;
  overflow: hidden;
  display: block;
  -webkit-transform: skew(-12deg);
  -moz-transform: skew(-12deg);
  -o-transform: skew(-12deg);
  -ms-transform: skew(-12deg);
}

.Menu li a{
  color: inherit;
  text-decoration: none;
  background-color:transparent;
}
a:hover{
  color: inherit;
  text-decoration: none;
  background-color:transparent;
}
/* login/sign Up */
#login_signup{
  display: flex;
  list-style: none;
  padding-top: 20px;
}
.login{
  cursor: pointer;
}
.login:hover{
  color:#00ffba;
}
.signup{
  cursor: pointer;
}
.signup:hover{
  color: #00ffba;
}

.home, .blog, .about_us, .request_demo{
  cursor: pointer;
  border-right: 1px solid grey;
  padding-top: 20px;
  transition: color 0.3s ease;
}

.home{
  padding-left: 100px;
}
.home:hover{
  color:#00c344;
}
.blog:hover{
  color:#ffa800;
}
.about_us:hover{
  color:#ff0000;
}
.request_demo:hover{
  color:#013dff;
}


/*****************************  first section       ****************************** */

/* the small black in the middle-bottom */
.logo-ho{
  position: absolute;
  width: 75px;
  top: 90%;
  left: 50%;
  z-index: 1;
}

/*  The role playing logo*/
.role-playing{
  position: absolute;
  top: 68%;
  left: 0%;
  width: 50%;
}
/*  The small sign up for Beta logo */
.for-beta{
  position: absolute;
  width: 30%;
  top: 83.5%;
  left: 18%;
  border-radius: 10px;
  cursor: pointer;
}

.textToTop{
  position: fixed;
  top: 84.5%;
  left: 94%;
  z-index: 100;
  width: 40px;
  border-radius: 50px;
}


/* learn more logo  */

.learn-logo{
  position: absolute;
  width: 13%;
  top: 83%;
  left: 4%;
  border-radius: 15px;
  cursor: pointer;
  z-index: 1;
}

.learn-logo:hover{
  transform: scale(1.1);
}


.we_recruit{
  position: absolute;
  left: 80%;
  top: 80%;
  width: 200px;
  cursor: pointer;
}


</style>