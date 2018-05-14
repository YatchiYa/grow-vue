<template>
        

               <!-- ************************* The bottom section ******************************-->
            <div id="bottom-sec">
              <div id="request" class="bottom-key" >
                Get The BETA Key
              </div>
              <div class="subscribe" >
                
                  <input v-model='email' @keyup.enter="showinfo" type="Email" placeholder="Subscribe Your Email" title="Subscribe Your Email" name="Email" size=27 class="zone-text" >
                
              </div>

              <!-- feed back systeme -->
              <a href="#footer-sec"  @click="showFeedbacks" ><img src="../../../static/images/feedback.png" class="feedbacks" title="click to show The FeedBacks"></a>
            
            </div>
            <!--  ********************* The end of the bottom secion *************************-->



</template>


<script>

import swal from 'sweetalert'
import Firebase from 'firebase'

export default {  
  name: 'bottom_sec',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    showFeedbacks: function() {
      $('#feedback_sec').show(400);
      $('#footer-sec').css({
      'top':'690%'
    });
    },
    showinfo: function() {

      swal(' an Email has been sent to your Email Adress !! ');

    }
  }
}
</script>


<style>


#bottom-sec{
  position: absolute;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: url('../../../static/images/home-bottom.jpg');
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
  left: 30%;
  font-size: 20px;
  text-align: center;
  color: #847692;
}
</style>