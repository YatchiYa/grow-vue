<template>
  <div>
        

        <header-skills class="header-list_s">
            Skills In Training
        </header-skills>


        <b-tabs>
            <b-tab title="Stats" class="bbox" active>
              <br/>
              <!-- social -->
                        <div class="social_skill">
                          <img src="../../../static/images/social.png" class="social_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;" >Social lvl {{social_lvl}}</label>
                        </div>
                        <!-- health -->
                        <div class="health_skill">
                          <img src="../../../static/images/health.png" class="health_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;">Health lvl {{health_lvl}}</label>
                        </div>

                        <!-- Experience -->
                        <div class="experience_skill">
                          <img src="../../../static/images/experience.png" class="experience_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;">Experience lvl {{experience_lvl}}</label>
                        </div>

                        <!-- Skills -->
                        <div class="Skills_skill">
                          <img src="../../../static/images/skills.png" class="Skills_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;">Skills lvl {{skills_lvl}}</label>
                        </div>


                        <!-- Knowledge -->
                        <div class="Knowledge_skill">
                          <img src="../../../static/images/knowledge.png" class="Knowledge_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;"> Knowledge lvl {{knowledge_lvl}}</label>
                        </div>

                        
            </b-tab>
            <b-tab title="recommended" >
              <br/>
                        <div class="Knowledge_skill" style="cursor: pointer;" @click="addSkill_k" >
                                    <img src="../../../static/images/knowledge.png" class="Knowledge_img"> 
                                    <label style="float:right;margin-top: -28px;margin-right: 2px;"> Creative Thinking </label>
                        </div>

                        <div class="experience_skill" style="cursor: pointer;" @click="addSkill_e" >
                          <img src="../../../static/images/experience.png" class="experience_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;">Decision Making </label>
                        </div>

                        <div class="health_skill" style="cursor: pointer;" @click="addSkill_h" >
                          <img src="../../../static/images/health.png" class="health_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;">Sports </label>
                        </div>

                        <div class="social_skill" style="cursor: pointer;" @click="addSkill_e" >
                          <img src="../../../static/images/social.png" class="social_img"> 
                          <label style="float:right;margin-top: -28px;margin-right: 2px;" >Problem Solving </label>
                        </div>


            </b-tab>

            <b-tab  v-for="skill in skills" :key="skill.id" :title="skill.title">
              

                    <!-- Adding part in each section  -->
                     

                      <div class="dailie-list_s">

                                <div v-for="dailie in dailies" class="dailie-task_s"
                                :key="dailie.id"
                                >

                                    <label v-if="dailie.categorie == 'knowledge' " ><img   class="img_cat_d" src="../../../static/images/knowledge.png" @click="activeDaili(dailie)" /></label>
                                    <label v-if="dailie.categorie == 'social' " ><img   class="img_cat_d" src="../../../static/images/social.png" @click="activeDaili(dailie)" /></label>
                                    <label v-if="dailie.categorie == 'experience' " ><img   class="img_cat_d" src="../../../static/images/experience.png" @click="activeDaili(dailie)" /></label>
                                    <label v-if="dailie.categorie == 'skills' " ><img   class="img_cat_d" src="../../../static/images/skills.png" @click="activeDaili(dailie)" /></label>
                                    <label v-if="dailie.categorie == 'health' " ><img   class="img_cat_d" src="../../../static/images/health.png" @click="activeDaili(dailie)" /></label>
                                    <label class="dailie-task-li" > {{ dailie.title }} </label>

                                    

                                    <span class="grade_dailie_s"> {{ dailie.grades }} </span>


                                        



                                  </div>

                      </div>


                                         <div id="Dailies_input_s">
                                                  <div class="front_input_bg" v-if="showDailieBg" @click="showDailieIn">
                                                    <span class="addDailies">+</span>
                                                  </div>

                                                    <input name="dailies_input" class="dailies_input_s" type="text" placeholder="add a Daily" size="38" 
                                                    v-if="showDailieInput"
                                                    v-model="newDailie" 
                                                    @keyup.13="showDailieCategorie">
                                                    
                                                  <div class="dailies_categories" v-if="showDailieCat">
                                                      <img type="image" name="da_img" value="knowledge" class="img_cat knowledge" src="../../../static/images/knowledge.png" title="knowledge " @click="cat_k(), addDailie()" />
                                                      <img type="image" name="da_img" value="experience" class="img_cat experience" src="../../../static/images/experience.png" title="experience " @click="cat_e() ,addDailie()" />
                                                      <img type="image" name="da_img" value="s_imsocialage" class="img_cat social" src="../../../static/images/social.png" title="social " @click="cat_s() ,addDailie()" />
                                                      <img type="image" name="da_img" value="health" class="img_cat health" src="../../../static/images/health.png" title="health " @click="cat_h() ,addDailie()" />
                                                      <img type="image" name="da_img" value="skills" class="img_cat skills" src="../../../static/images/skills.png" title="skills " @click="cat_sk(), addDailie()" />
                                                  </div>


                                                  
                                       </div>


            </b-tab>

           <b-nav-item slot="tabs" @click.prevent="showAddSki = !showAddSki" href="#">
            +
           </b-nav-item>



        </b-tabs>



           <div id="adding_skill_container" v-if="showAddSki">
                      <input v-model="newSkill" class="skill_input" type="text" name="skill_input" placeholder="Write title Of your new list here" size="40" @keyup.enter="addSkill" >
                    
                    
                    <label class="suggestions_skills">Suggestions : </label>
                    <div class="Happiness_Recipes">
                      <span> Happiness Recipes </span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <br>
                      <span> Find Exemples tasks <a href="#">here</a> ! </span>

                    </div>
                    <div class="Beacons">
                      <span> Beacons </span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <span  class="glyphicon glyphicon-star-empty" style="color:gold;"></span>
                      <br>
                      <span> Find Exemples tasks <a href="#">here</a> ! </span>

                    </div>
          </div>



  </div>
</template>

<script>

export default {  
  name:'Skills',
  components: { },
  data() {
  	return {
      social_lvl: 1,
      health_lvl: 1,
      experience_lvl: 1,
      skills_lvl: 1,
      knowledge_lvl: 1,
      showAddSki: false,

      skills: [],
      newSkill: '',
      tabCounter: 0,

      // adding part in each section 

      showDailieBg : true,
      showDailieInput : false,
      showDailieCat : false,
      dailies: [],
      newDailie: '',
      categorie: ''
  	}
  },
  methods: {
    addSkill () {
      var value = this.newSkill
      this.skills.push({
        title: value
      })
      this.showAddSki = false
      this.newSkill = ''
    },
    showAddSkill: function () {
      this.showAddSki = true
    },

    addSkill_h: function () {
      var value = "Sport"
      this.skills.push({
        title: value
      })
      this.showAddSki = false
      this.newSkill = ''
    },
    addSkill_k: function () {
      var value = "Creative Thinking"
      this.skills.push({
        title: value
      })
      this.showAddSki = false
      this.newSkill = ''
    },
    addSkill_e: function () {
      var value = "Decision Making"
      this.skills.push({
        title: value
      })
      this.showAddSki = false
      this.newSkill = ''
    },
    addSkill_s: function () {
      var value = "Problem Solving "
      this.skills.push({
        title: value
      })
      this.showAddSki = false
      this.newSkill = ''
    },



    // adding part in each section 
    showDailieIn: function() {

      if (this.dailies.length < 3 ){
        this.showDailieBg = false;
        this.showDailieInput = true;
        }

       if (this.dailies.length >= 3 ){
       alert(' you have already 3 dailies <3 ');
        }

    },
    showDailieCategorie: function() {
      this.showDailieInput = false;
      this.showDailieCat = true;
    },
    addDailie: function() {
      var value = this.newDailie;
      var cat = this.categorie;
      var grd = 'novice';
      var c = 0;

      if (!value){
        return
      }

        this.dailies.push({
          title: value,
          categorie: cat,
          grades: grd,
          count: c
        })
        this.newDailie = ''
        this.showDailieBg = true
        this.showDailieInput = false
        this.showDailieCat = false
      
    },
    cat_k: function() {
      this.categorie = 'knowledge'
    },
    cat_sk: function() {
      this.categorie = 'skills'
    },
    cat_s: function() {
      this.categorie = 'social'
    },
    cat_h: function() {
      this.categorie = 'health'
    },
    cat_e: function() {
      this.categorie = 'experience'
    },

    activeDaili: function(dailie) {

      dailie.count +=1;

      if (dailie.count >= 10 && dailie.grades == 'novice'){
        alert(' Lvl Up !!! ');
        dailie.count = 0;
        dailie.grades = 'Master';
      }

      if (dailie.count >= 14 && dailie.grades == 'Master'){
        alert(' Lvl Up !!! ');
        dailie.count = 0;
        dailie.grades = 'Ghost';
      }

      if (dailie.count >= 10 && dailie.grades == 'Ghost'){
        alert(' Lvl Up !!! ');
        alert(' you might be very usefull for others, to Help them or to Be their Mentor :) ')
        dailie.count = 0;
      }

    }
  },
  created: {

  },
  computed: {
  	
  }
}
</script>

<style>


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


/* define the font family */
@font-face{

  font-family: 'LDPU';

  src: url('../../../static/polices/Lovely.ttf');
  src: url('../../../static/polices/Lovely.ttf') format('truetype');
}


.header-list_s{ 
  position: relative;
  font-size: 15px;
  color: rgb(174, 20, 45);
  font-family: 'LDPU';
  margin-left: 35%;
  top: 4%;
}


/* skill box input */
#adding_skill_container{
  position: absolute;
  height: 185px;
  width: 320px;
  border: 1px solid #e36ea8;
  z-index: 1;
  top: 15%;
  background: white;
  margin-left: 22px;
  border-radius: 5px;
  padding-right: 10px;
  box-shadow: 1px 2px 20px gold;
}

.ar_s{
  color: #e36ea8;
  left: 53%;
  transform: translate(0%,-145%);
}

/* adding a skill */
.skill_input{
  font-size: 11px;
  margin-left: 10px;
  margin-top: 10px;
}

.suggestions_skills{
  font-size: 12px;
  position: relative;
  margin-left: 10px;
  margin-top: 20px;
}

.Happiness_Recipes{
  border: 1px solid black;
  padding-left: 10px;
  margin-left: 10px;
  font-size: 12px;
  margin-bottom: 2px;
}

.Beacons{
  border: 1px solid black;
  padding-left: 10px;
  margin-left: 10px;
  font-size: 12px;
  margin-bottom: 2px;
}



/*  tabs  */
.tabs{
  position: relative;
  top: 10%;
  margin: 0 9%;
  font-size: 11px;
}

.tabs{
  display: table;
}





/* social skills */

.social_skill{
  position: relative;
  margin-top: 7px;
  margin-left: 12px;
  width: 294px;
  height: 22px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  margin-bottom: 10px;
}
.social_img{
  width: 35px;
  z-index: 1;
  transform: translate(0%,-12%);
}

/* health skills */

.health_skill{
  position: relative;
  margin-top: 7px;
  margin-left: 12px;
  width: 294px;
  height: 22px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  margin-bottom: 10px;
}
.health_img{
  width: 35px;
  z-index: 1;
  transform: translate(0%,-12%);
}


/* experience skills */

.experience_skill{
  position: relative;
  margin-top: 11px;
  margin-left: 12px;
  width: 294px;
  height: 22px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  margin-bottom: 10px;
}
.experience_img{
  width: 35px;
  z-index: 1;
  transform: translate(0%,-12%);
}



/* Skills skills */

.Skills_skill{
  position: relative;
  margin-top: 7px;
  margin-left: 12px;
  width: 294px;
  height: 22px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  margin-bottom: 12px;
}
.Skills_img{
  width: 35px;
  z-index: 1;
  transform: translate(0%,-12%);
}


/* social skills */

.Knowledge_skill{
  position: relative;
  margin-top: 7px;
  margin-left: 12px;
  width: 294px;
  height: 22px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}
.Knowledge_img{
  width: 35px;
  z-index: 1;
  transform: translate(0%,-12%);
}

#__BVID__10___BV_tab_button__{
  color:red;
}
#__BVID__12___BV_tab_button__{
  color: green;
}
#__BVID__9___BV_tab_button__{
  color:red;
}
#__BVID__11___BV_tab_button__{
  color: green;
}


/*  adding part  */

#Dailies_input_s {
    position: relative;
    padding: 5px 8px;
    margin: 0px 0;
    background: #f4dff9;
    border-radius: 6px;
    top: 17px;
    opacity: 0;
    height: 30px;
    width: 200px;
    left: 24%;
}

#Dailies_input_s:hover{
  opacity:1;
}

.front_input_bg {
    position: relative;
    z-index: 1;
    height: 30px;
    width: 106%;
    background: #dad4d4;
    border-radius: 6px;
    top: -20%;
    left: -3%;
    cursor: pointer;
}

.addDailies {
    position: absolute;
    font-size: 25px;
    left: 48%;
    top: -20%;
}

.dailies_input_s{
  position: relative;
  top:0;
  font-size: 9px;
  left: 3%;
}

.dailies_categories {
    position: relative;
    width: 300px;
    height: 30px;
    margin-top: -24px;
    margin-left: 20px;
    z-index: 2;
}

.dailie-list_s {
    top: 15px;
    font-size: 10px;
    height: auto;
    overflow: auto;
    position: relative;
    width: 155%;
}

.dailie-task_s {

    position: relative;
    width: 265px;
    height: 43px;
    border: 1px solid #9d1717;
    -webkit-box-shadow: 0 2px 0 #d81010;
    box-shadow: 0 2px 0 #d81010;
    margin: 1% 3%;
    background: rgba(225, 159, 249, 0.5);

}


.grade_dailie_s {

    position: relative;
    float: right;
    top: 10%;
    left: -3px;
    font-size: 9px;

}



</style>