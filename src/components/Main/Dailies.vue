<template>
  <div>

      <header-dailies class="header-list_d">
              Dailies
      </header-dailies>


     

      <div class="dailie-list">

            <div v-for="dailie in dailies" class="dailie-task"
            :key="dailie.id"
            >

                <label v-if="dailie.categorie == 'knowledge' " ><img   class="img_cat_d" src="../../../static/images/knowledge.png" @click="activeDaili(dailie)" /></label>
                <label v-if="dailie.categorie == 'social' " ><img   class="img_cat_d" src="../../../static/images/social.png" @click="activeDaili(dailie)" /></label>
                <label v-if="dailie.categorie == 'experience' " ><img   class="img_cat_d" src="../../../static/images/experience.png" @click="activeDaili(dailie)" /></label>
                <label v-if="dailie.categorie == 'skills' " ><img   class="img_cat_d" src="../../../static/images/skills.png" @click="activeDaili(dailie)" /></label>
                <label v-if="dailie.categorie == 'health' " ><img   class="img_cat_d" src="../../../static/images/health.png" @click="activeDaili(dailie)" /></label>
                <label class="dailie-task-li" > {{ dailie.title }} </label>

                

                <span class="grade_dailie"> {{ dailie.grades }} </span>


                    <img class="progressDailie" src="../../../static/images/fill_dailies.png" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_d.png" v-if="dailie.count > 0 " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:20%;" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_d.png" style="left:20%;" v-if="dailie.count > 1 " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:23%;" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_d.png" style="left:23%;" v-if="dailie.count > 2 " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:26%;"  />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_d.png" style="left:26%;" v-if="dailie.count >3  " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies.png" style="left:29%;" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_f.png" style="left:29%;" v-if="dailie.count > 4 " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:32%;" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_f.png" style="left:32%;" v-if="dailie.count > 5 " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:35%;"  />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_f.png" style="left:35%;" v-if="dailie.count >6  " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:38%;"  />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_g.png" style="left:38%;" v-if="dailie.count >7  " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies.png" style="left:41%;"  />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_g.png" style="left:41%;" v-if="dailie.count >8  " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:44%;" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_g.png" style="left:44%;" v-if="dailie.count > 9 " />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:47%;" v-if="dailie.grades == 'Master'" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_h.png" style="left:47%;" v-if="dailie.count > 10  && dailie.grades == 'Master'" />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:50%;" v-if="dailie.grades == 'Master'" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_h.png" style="left:50%;" v-if="dailie.count > 11  && dailie.grades == 'Master'" />

                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini.png" style="left:53%;" v-if="dailie.grades == 'Master'" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_mini_h.png" style="left:53%;" v-if="dailie.count > 12  && dailie.grades == 'Master'" />

                    <img class="progressDailie" src="../../../static/images/fill_dailies.png" style="left:56%;"  v-if="dailie.grades == 'Master'" />
                    <img class="progressDailie" src="../../../static/images/fill_dailies_h.png" style="left:56%;" v-if="dailie.count > 13  && dailie.grades == 'Master'" />




            </div>

      </div>


       <div id="Dailies_input">
                <div class="front_input_bg" v-if="showDailieBg" @click="showDailieIn">
                  <span class="addDailies">+</span>
                </div>

                  <input name="dailies_input" class="dailies_input" type="text" placeholder="add a Daily" size="40" 
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


  </div>
</template>

<script>

export default {  
  name:'dailies',
  components: { },
  data() {
  	return {
      showDailieBg : true,
      showDailieInput : false,
      showDailieCat : false,
      dailies: [],
      newDailie: '',
      categorie: ''
  	}
  },
  methods: {
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

.header-list_d{ 
  position: relative;
  font-size: 15px;
  color: rgb(216, 7, 214);
  font-family: 'LDPU';
  margin-left: 42%;
  top: 4%;
}

#Dailies_input{
  position: relative;
  padding: 5px 8px;
  margin: 0px 64px;
  background: #f4dff9;
  border-radius: 6px;
  top: 13%;
  opacity: 0;
  height: 30px;
}

#Dailies_input:hover{
  opacity: 1;
}

.dailies_input{
  position: relative;
  font-size: 10px;
  top: -20%;
  left: 3%;
}

.front_input_bg{
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

.addDailies{
  position: absolute;
  font-size: 25px;
  left: 48%;
  top: -20%;
}

.dailies_categories{
  position: relative;
  width: 300px;
  height: 30px;
  margin-top: -24px;
  margin-left: 20px;
  z-index: 2;
}

.img_cat{
  position: relative;
  cursor: pointer;
  width: 31px;
  top: 20px;
}

/* the dailies  */

.dailie-list{
  top: 12%;
  font-size: 10px;
  height: auto;
  overflow: auto;
  position: relative;
}

.dailie-task{
  position: relative;
  width: 70%;
  height: 43px;
  border: 1px solid #730080;
  -webkit-box-shadow: 0 2px 0 #6c0080;
  box-shadow: 0 2px 0 #6c0080;
  margin: 1% 15%;
  background: rgba(225, 159, 249, 0.5);
}

.dailie-task-li{
  position: relative;
  left: 17%;
  font-size: 10px;
}

.img_cat_d{
  width: 40px;
  height: 42px;
  position: absolute;
  top: 0;
}

.img_cat_d:hover{
  transform: scale(1.1);
}

.grade_dailie{
  position: relative;
  float: right;
  top: 67%;
  left: -3px;
  font-size: 9px;
}


.progressDailie{
  width: 10px;
  position: absolute;
  top: 42%;
  left: 17%;
}



</style>