// make code more readable: check
// random look function: check
// add button for clothes: check
// use small descriptive functions: check

// #nobeard
// turn buttons around
// save name 
// Save variables

// Optional: 
// make the character jump on click
// don't use jquery + vue?
// change clothes based on clicking on clothes of character

<template>
  <div>
      <div id="avatarContainerPosition">
        <div id="avatarContainer">
          <div id="avatarImageContainer">
          </div>
        </div>
    </div>

    <!-- buttons to customize body parts -->
     <div id="buttonContainer">
     <button class="buttonAvatarCreation" name="skin" @click="changeBodyPartButton">Skin</button>
     <button class="buttonAvatarCreation" name="hair" @click="changeBodyPartButton">Hair</button>
     <button class="buttonAvatarCreation" name="beard" @click="changeBodyPartButton">Beard</button>
     <button class="buttonAvatarCreation" name="shirt" @click="changeBodyPartButton">Shirt</button>
     <button class="buttonAvatarCreation" @click="randomLookButton">Random</button>
     </div>
     <input id="avatarCreationNameInput" type="text"/>
  
  </div>
</template>

<script>

// VARIABLES

//structure items with weapons / robes / etc. 
  var body = [
  {
    number: 0,
    name: "no bodyPart",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_ea8349.png",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 1,
    name: "white hair bangs",
    layer: 3,
    source: "static/raw_sprites/spritesmith/customize/hair/hair_bangs_1_ghostwhite.png",
    category: "hair",
    coordinates: [17,30],
    size: [88,88],
  },
  {
    number: 2,
    name: "dark skin",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_98461a.png",
    category: "skin",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 3,
    name: "midnight hair bangs",
    layer: 3,
    source: "static/raw_sprites/spritesmith/customize/hair/hair_bangs_1_midnight.png",
    category: "hair",
    coordinates: [17,30],
    size: [88,88],
  },
  {
    number: 4,
    name: "aurora skin",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_aurora.png",
    category: "skin",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 5,
    name: "halloween hair bangs",
    layer: 3,
    source: "static/raw_sprites/spritesmith/customize/hair/hair_bangs_1_halloween.png",
    category: "hair",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 6,
    name: "green hair bangs",
    layer: 3,
    source: "static/raw_sprites/spritesmith/customize/hair/hair_bangs_1_green.png",
    category: "hair",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 7,
    name: "aurora beard",
    layer: 5,
    source: "static/raw_sprites/spritesmith/customize/beards/hair_beard_1_aurora.png",
    category: "beard",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 8,
    name: "black beard",
    layer: 5,
    source: "static/raw_sprites/spritesmith/customize/beards/hair_beard_2_black.png",
    category: "beard",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 9,
    name: "midnight beard",
    layer: 5,
    source: "static/raw_sprites/spritesmith/customize/beards/hair_beard_2_midnight.png",
    category: "beard",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 10,
    name: "frost beard",
    layer: 5,
    source: "static/raw_sprites/spritesmith/customize/beards/hair_beard_1_frost.png",
    category: "beard",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 11,
    name: "midnight beard",
    layer: 5,
    source: "static/raw_sprites/spritesmith/customize/beards/hair_beard_3_midnight.png",
    category: "beard",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 12,
    name: " candicorn hair bangs",
    layer: 3,
    source: "static/raw_sprites/spritesmith/customize/hair/hair_bangs_2_candycorn.png",
    category: "hair",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 13,
    name: "orange hair bangs",
    layer: 3,
    source: "static/raw_sprites/spritesmith/customize/hair/hair_bangs_4_porange2.png",
    category: "hair",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 14,
    name: "light skin",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_ddc994.png",
    category: "skin",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 15,
    name: "winterstar skin",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_winterstar.png",
    category: "skin",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 16,
    name: "dark skin",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_98461a.png",
    category: "skin",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 17,
    name: "dapper skin",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_dapper.png",
    category: "skin",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 18,
    name: "white skin",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_ea8349.png",
    category: "skin",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 19,
    name: "broad black shirt",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/broad_shirt_black.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 20,
    name: "broad shirt blue",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/broad_shirt_blue.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 21,
    name: "broad shirt fire",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/broad_shirt_fire.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 22,
    name: "broad green shirt",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/broad_shirt_green.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 23,
    name: "broad shirt ocean",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/broad_shirt_ocean.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 24,
    name: "slim black shirt",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/slim_shirt_black.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 20,
    name: "slim blue shirt",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/slim_shirt_blue.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 21,
    name: "slim fire shirt",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/slim_shirt_fire.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },{
    number: 22,
    name: "slim green shirt",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/slim_shirt_green.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },
  {
    number: 23,
    name: "slim ocean shirt",
    layer: 2,
    source: "static/raw_sprites/spritesmith/customize/shirts/slim_shirt_horizon.png",
    category: "shirt",
    coordinates: [19,32],
    size: [85,85],
  },
  ],
  itemsEquipped = [],
  avatar = 
  {
    body: {
      skin: 18,
      hair: 13,
      beard: 11,
      shirt: 21,
    },
    equipped: {
      shield: 0,
      weapon: 0,
      armor: 0,
      helmet: 0,
      shoes: 0
  }};



// LOAD AVATAR INTO RIGHT POSITION


export default {
  name: 'loadAvatar',
  data() {
    return {
      skinSelected: avatar.body.skin,
      hairSelected: avatar.body.hair,
      beardSelected: avatar.body.beard,
      shirtSelected: avatar.body.shirt,
      avatarCoordinateX: 52, 
      avatarCoordinateY: 40
      }
  },
  methods: {

// Button to switch between differen body parts: One button to switch them all!
changeBodyPartButton: function(){
  let bodyFilter = body.filter(function(element) {
  // if number that is passed in is the same as avatar.... category == this way you know if its skin or beard
         if(element.category === event.target.name) {
          return element;
         }});

for(let i=0;i<bodyFilter.length; i++){
  if(this[event.target.name + "Selected"] === bodyFilter[i].number ){
    this[event.target.name + "Selected"] = bodyFilter[i+1].number;
    break;
  } else if(this[event.target.name + "Selected"] === bodyFilter[bodyFilter.length-1].number){
    this[event.target.name + "Selected"] = bodyFilter[0].number;
    break;
  }
}
  // remove old bodyPart
  $('#avatarContainer img[alt="' + body[avatar.body[event.target.name]].name + '"]').remove();
  
  // sew new bodyPart to body
  this.avatarBodyLoad();
},


randomLookButton: function() {

let bodyPartCategory = ["skin", "hair", "beard", "shirt"];

for(let i=0; i<bodyPartCategory.length; i++){

//filter bodyparts by category
var bodyFilter = body.filter(function(element) {
         if(element.category === bodyPartCategory[i]) {
          return element;
         }});

//remove old bodyparts
$('#avatarContainer img[alt="' + body[avatar.body[bodyPartCategory[i]]].name + '"]').remove();

//change bodyparts to random new number 
this[bodyPartCategory[i] + "Selected"] = bodyFilter[(Math.floor(Math.random() * bodyFilter.length))].number;
}

//sew new bodyparts to body
this.avatarBodyLoad();
},


avatarBodyLoad: function(){

// creating character out of several pieces 
let bodyPartCategory = ["skin", "hair", "beard", "shirt"];

for (let i=0; i<bodyPartCategory.length; i++){
 if (body[avatar.body[bodyPartCategory[i]]].length !== 0 && body[avatar.body[bodyPartCategory[i]]].number !== 0) {
 
 // update avatar.body to fit for example this.skinSelected
 avatar.body[bodyPartCategory[i]] = this[bodyPartCategory[i] + "Selected"];

 $("#avatarContainer").append(
      "<img src='" + body[avatar.body[bodyPartCategory[i]]].source +
        "' alt='" + body[avatar.body[bodyPartCategory[i]]].name + 
        "' value='" + bodyPartCategory[i] + "Equipped" +  "' style=' width:" + body[avatar.body[bodyPartCategory[i]]].size[0]  + "px; height:" + body[avatar.body[bodyPartCategory[i]]].size[1] +  
        "px; position:absolute;top:" + (body[avatar.body[bodyPartCategory[i]]].coordinates[1] + this.avatarCoordinateY) + "px;left:" + (body[avatar.body[bodyPartCategory[i]]].coordinates[0] + this.avatarCoordinateX) + "px; z-index:"+ body[avatar.body[bodyPartCategory[i]]].layer + "'>");
}};
}},
  mounted () {
  this.avatarBodyLoad();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background-color: #464646;
  }

#avatarContainer {
  height: 192px;
  width: 255px;
  background-color: #A3320B;

  background-image: url("../../static/raw_sprites/spritesmith/backgrounds/background_autumn_forest.png");
  background-size:cover;
  -webkit-transition: background-image 0.5s;
  -moz-transition: background-image 0.5s;
  -ms-transition: background-image 0.5s;
  -o-transition: background-image 0.5s;
  transition: background-image 0.5s;
  position: absolute;
  left: 413px;
  border-bottom: 1px solid gray;
  /* Keeps Avatar Image in the foreground */
  z-index: 9;
  
}

#avatarContainerPosition {
  height: 192px;
  width: 255px;
}

#avatarContainerBackgroundDiv {
  position: absolute; 
  top: 100px;
  left: -10px;
  
}

#avatarContainerBackground {
  margin-left: 84px;
  margin-top: -5px;
  z-index: 10;
}

#sideBarPet {
  position: absolute;
}

#avatarCreationNameInput {
  position: relative;
  top: -20px;
  left: 40px;
  text-align: center;
}

#buttonContainer {
 width: 120px;
 position: absolute;
 top: 18px;
 left: 670px;
}

.buttonAvatarCreation{
  width: 100px;
  height: 40px;
  background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
  border: none;
  border-radius: 5px;
  position: relative;
  margin-bottom: 2px;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 1px 1px 1px rgba(0,0,0,.4);
  font-size: 15px;
  text-align: left;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
  cursor: pointer;
}
.buttonAvatarCreation:active {
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
  top: 1px;
}

.buttonAvatarCreation:after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  border-top: 20px solid #187dbc;
  border-bottom: 20px solid #187dbc;
  border-left: 16px solid transparent;
  border-right: 20px solid #187dbc;
  position: absolute;
  opacity: 0.6; 
  right: 0;
  top: 0;
  border-radius: 0 5px 5px 0;  
}

#avatarCreationNameInput {
  position: absolute;
  top: 230px;
  left: 438px;
  width: 200px;
}


@keyframes petJump {
  0% {
    transform: translate(0px,7px);
  }
  25% {
    transform: translate(0px, 0px);
  }
  50% {
   transform: translate(0px,7px)
  }
  75% {
    transform: translate(0px, 0px)
  }
  100% {
   transform: translate(0px,7px)
  }
}

</style>

