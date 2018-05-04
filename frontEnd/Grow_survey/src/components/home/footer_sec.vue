
<template>
        

              <!-- *********************** The footer section ******************** -->
            <div id="footer-sec">
              <div>
                <img src="../../../static/images/logo-bottom.png" class="logo-footer">
                <a href="https://www.facebook.com/GrowPlayground"><img src="../../../static/images/facebook-logo.png" class="facebook-logo"></a>
                <img src="../../../static/images/twitter-logo.png" class="twitter-logo">
                <a href="mailto:grow.playground@gmail.com" target="_top"><img src="../../../static/images/contact.png" class="contact" title="grow.playground@gmail.com"></a>

                <span  class="privacy"> Privacy </span>
                <span class="terms"> Terms </span>
                <span class="notice"> @2018 Grow PlayGround .CRI</span>
              </div>
            </div>
            <!--******************** The End Of the fouter section *************************-->



</template>


<script>
export default {  
  name: 'footer_sec',
  data() {
    return {
      
    }
  }
}
</script>


<style>



/* foooter section  *************************** */


#footer-sec{
  position: absolute;
  overflow: hidden;
  background: url('../../../static/images/footer-0.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 710%;
  width: 100%;
  height: 20%;
  border-top: 1px solid black;
}
#footer-sec span{
  padding-right: 5px;
  padding-left: 5px;
  z-index: 1000;
}

.logo-footer{
  cursor: pointer;
}
.logo-footer:hover{
  transform: scale(1.1);
}

.privacy, .terms, .notice{
  cursor: pointer;
  color: white;
}

.privacy:hover{
  color: #c7a002;
}
.terms:hover{
  color: #c7a002;
}
.notice:hover{
  color: #c7a002;
}

.facebook-logo{
  position: relative;
  top: -20%;
  left: 50%;
  cursor: pointer;
}
.facebook-logo:hover{
  transform:scale(1.1);
}

.twitter-logo{
  position: relative;
  top: -20%;
  left: 50%;  
  cursor: pointer;
}
.twitter-logo:hover{
  transform:scale(1.1);
}

.contact{
  position: absolute;
  left: 77%;
  top: 17%;
  cursor: pointer;  
}
.contact:hover{
  transform:scale(1.1);  
}



</style>