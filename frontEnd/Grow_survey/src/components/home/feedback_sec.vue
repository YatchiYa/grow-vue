<template>
        

               <!-- ******************* feedback Section *************************** -->
            
              <div id="feedback_sec">
              <h3 style="position: absolute; color: white;top: 10%;left: 38%;">Tell Us What You Think </h3>
              <label class="feed-display" @click="hideFeedbacks">x</label>
              <div style="font-size:11px;">
                <form method=POST>
                  <label class="pseudo" for="pseudo">Pseudo : </label>
                  <input name="pseudo" type="text" id="pseudo-feedb" size=25 placeholder="pseudo">
                  <br>
                  <label class="comment" for="comment">Comment : </label> <br>
                  <textarea name="comment" type="text" id="comment-feedb" row="4" cols="25" placeholder="comment" ></textarea>
                  <input type="submit" style="position: absolute;top: 25%;left: 35%;font-size: 17px;">
                </form>
              </div>
              <div class="container-feeds">
                
              </div>
            </div>

            <!-- ***********************End Of The feedback Section  *****************-->


</template>


<script>
export default {  
  name: 'feedback_sec',
  data() {
    return {
      
    }
  },
  methods: {
    hideFeedbacks: function() {
      $('#footer-sec').css({
      'top':'510%'
    });
    $('#feedback_sec').hide(400);
    }
  }
}
</script>


<style>


  /*  **************  feeback section  ************* */

#feedback_sec{
  position: absolute;
  overflow: hidden;
  background: url('../../../static/images/feedback-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 510%;
  width: 100%;
  height: 80%;
  border-top: 1px solid black;
  display: none;
}


.pseudo{
  position: relative;
  padding-top: 7%;
  color: white;
  padding-left: 15%;
}

.comment{
  position: relative;
  padding-top: 0;
  color: white;
  padding-left: 15%;
}

#comment-feedb{
  position: relative;
  margin-left: 18%;
}

.feed-display{
  position: relative;
  font-size: 20px;
  color: silver;
  cursor: pointer;
  float: right;
  margin-right: 1%;
}



.container-feeds{
  top: 10%;
  position: relative;
  left: 22%;
  height: 50%;
  width: 50%;
  overflow: auto;
  background: rgba(255,255,255,0.9);
  border-radius: 5px;
}

#feedbacks_list{
  color: white;
  height: auto;
  width: auto;
  margin-left: 40px;
  margin-top: 3px;
}


</style>