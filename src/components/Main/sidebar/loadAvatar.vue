// DON'T BOTHER MUCH ABOUT STYLE AT THE MOMENT, JUST TAKE CARE OF THE FUNCTIONALITY

// make code more readable: check
// random look function: check
// add button for clothes: check
// use small descriptive functions: check
// put better items: check 
// make pet jump again: check
// move avatar when pet is equipped or not equipped: check
// experiencebar: check
// level up: check
// create sideBar: check
// consoles: check
// add items to itemsowned: check
// create reward feedback (You unlocked this item!): check

// pomodoro timer 


// Create experience feedback! Stars flying
// create drop function
// change clothes and items based on clicking on clothes of character

// Optional
// make function to hit with a sword on click
// don't use jquery + vue?

<template>
  <div>
    <div id="sideBar">

      <!-- the health background -->
      <healthBackground style="position: absolute;z-index: -10000000000000;">

      </healthBackground>


        <div id="avatarContainer">
        </div>

       <div id="experienceBar">
        <span id="experienceProgress"></span>
      </div>

      <div id="levelContainer">
        <span id="level">{{level}}</span>
      </div>

      <div id="vaultContainer">
        <div id="goldContainer">
          {{gold}} Gold
        </div>
        <div id="marketContainer">
          <div id="clickMarketContainerBox">
            <span id="buyButtonYes"> Yes </span> 
            <span id="buyButtonNo"> No </span>
          </div>
          <div id="marketImageContainer">
          </div>
        </div>
    </div>

    </div>

    <div id="statConsole">
      <button id="increaseExperienceButton" @click="experience += 7; rewardAnimation(); updateExperience();">Experience++</button>
      <button @click="gold +=5">Gold++</button>
    </div>

    <div id="customizationConsole">

      <!-- Select your pet --> 
     <select v-model="petSelected" @change="petLoad">
      <option value=""></option>
      <option v-for="pet in pet" :value="pet.number" :key="pet.id">{{pet.name}}</option>
     </select>
     <br>

     <!-- Select pets size -->
     <input type="range" min="0" max="10" v-model="petSize" @change="petLoad(); petJump(); ">
     <br><br>

    <!-- buttons to customize body parts -->
     <button class="buttonAvatarCreation" name="skin" @click="changeBodyPartButton">Skin++</button>
     <button class="buttonAvatarCreation" name="hair" @click="changeBodyPartButton">Hair++</button>
     <button class="buttonAvatarCreation" name="beard" @click="changeBodyPartButton">Beard++</button>
     <button class="buttonAvatarCreation" name="shirt" @click="changeBodyPartButton">Shirt++</button>
     <button class="buttonAvatarCreation" @click="randomLookButton">Random</button>
     <br><br>

    <!-- Weapon Equip -->
     <select v-model="weaponSelected" @change='avatarEquipmentLoad'>
      <option v-for="item in weaponFilter" :value="item.number" :key="item.id">{{item.name}}</option>
     </select>

     <!-- Armor equip --> 
     <select v-model="armorSelected" @change="avatarEquipmentLoad">
      <option v-for="item in armorFilter" :value="item.number" :key="item.id">{{item.name}}</option>
     </select>

     <!-- Items Owned // itemsowned has the item numbers stacked // @change send item to avatarEquipmentLoad // hier-->
     <select v-model="itemSelected" @change='itemSelectedCategory(); avatarEquipmentLoad();'>
      <option v-for="items in itemsOwned" :value="item[items].name" :key="items.id">{{item[items].name}}</option>
     </select>
     
    
    </div>
  </div>
</template>

<script>

import healthBackground from './healthBackground.vue'




// VARIABLES
// AVATAR BACKGROUND VARIABLES
 
// linking up everything to one location and moving it relative from that point!
var avatarBackground = [
  {
    number: 0,
    name: "background-red",
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497443338/BackgroundRed_nzpixc.png",
    category: "background",
    size: [100, 100],
  },{
    number: 1,
    name: "background-yellow",
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497785371/BackgroundYellow_nzpixc_gcbil8.png",
    category: "background",
    size: [100, 100],
  },
  {
    number: 2,
    name: "background-cherry-trees",
    source: "static/raw_sprites/spritesmith/backgrounds/background_cherry_trees.png",
    category: "background",
    size: [100, 100],
  },
  ],
  backgroundsOwned = [],

// PET VARIABLES
  pet = [{  
    name: "Dressed-up water melon",
  number: 0,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1497446465/verkleidete_Wassermelone_fgucfh_qswtyf.png",
    layer: 5,
    coordinates: [0, 84],
    size: [52, 45],
  equipped: false,
  },{
    name: "white fox",
  number: 1,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1497446465/whitefox_hfsbft_j0iojq.png",
  layer: 5,
    coordinates: [0, 84],
    size: [54, 45],
  equipped: false,
  }, {  
    name: "blue fox",
  number: 2,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/foxBlue_juyx95.png",
    layer: 5,
    coordinates: [0, 84],
    size: [40, 34],
  equipped: false,
  },{
    // ONLY ONE WITH CHANGED COORDINATES SO FAR 
    name: "golden fox",
  number: 3,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/foxGold_lyva5x.png ",
  layer: 5,
  coordinates: [0, 84],
  size: [54, 45],
  equipped: true,
  }, {  
    name: "black bear",
  number: 4,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/BearBlack_kar4to.png",
    layer: 5,
    coordinates: [0, 84],
    size: [52, 45],
  equipped: false,
  }, {  
    name: "blue flying pig",
  number: 5,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/PigBlue_tnm2uy.png",
    layer: 5,
    coordinates: [0, 84],
    size: [85, 85],
  equipped: false,
  },{
    name: "green flying pig",
  number: 6,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/PigGreen_dskhns.png",
  layer: 5,
    coordinates: [0, 84],
    size: [54, 45],
  equipped: false,
  },      
],


//structure items with weapons / robes / etc. 
  body = [
  {
    number: 0,
    name: "no bodyPart",
    layer: 1,
    source: "static/raw_sprites/spritesmith/customize/skin/skin_ea8349.png",
    coordinates: [19,32],
    category: "beard",
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


    item = [
  {
  number: 0,
  name: "no item",
  category: "weapon"
  },
  {
    number: 1,
    name: "basic sword",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211196/55_9_f43pm3.png",
    category: "weapon",
    coordinates: [35,70],
    size: [35, 35],
  },
  {
    number: 2,
    name: "apprentice staff",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1498582495/apprentice_staff_j6u0ot.png",
    category: "weapon",
    coordinates: [7, 49],
    size: [68,60],
    gold: 15,
  },
  {
    number: 3,
    name: "rusty hat",
    layer: 3,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497210647/55_22_apqpad.png",
    category: "helmet",
    coordinates: [80, 123],
    size: [64, 44],
  },
  {
    number: 4,
    name: "viking hat",
    layer: 3,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211123/55_23_hcoanh.png",
    category: "helmet",
    coordinates: [78, 123],
    size: [65, 45],
    gold: 20,
  },
  {
    number: 5,
    name: "warrior armor",
    layer: 3,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211148/55_18_j0wdw1.png",
    category: "armor",
    coordinates: [39, 79],
    size: [66, 42],
    gold: 20,
  },
 {
  number: 6,
  name: "hitchhikers suits",
  layer: 3,
  source: "http://res.cloudinary.com/gionisos/image/upload/v1499957110/pageArmor_xt3cww.png",
  category: "armor",
  coordinates: [42, 59],
  size: [60, 65],
  gold: 25,
  },
  {
    number: 7,
    name: "golden shield",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497212849/latest_19_gnx49k.png",
    category: "shield",
    coordinates: [27, 103],
    size: [40, 40], 
    gold: 50
  },
  {
    number: 8,
    name: "Bad Ass Sword",
    layer: 4,
    source: 'static/raw_sprites/spritesmith/gear/weapon/weapon_special_1.png',
    category: "weapon",
    coordinates: [26, 35],
    size: [60,80], 
    gold: 20
  },
  {
  number: 9,
  name: "chainsaw",
  layer: 4,
  source: "http://res.cloudinary.com/gionisos/image/upload/a_29/v1497786925/chainsaw_klqmdz.png",
  category: "weapon",
  descriptionShop: "RHMMMM RHMMMM!",
  descriptionSideBar: "It's so shiny!",
  coordinates: [16,54],
  size: [55, 50],
  gold: 50,
  },
];

var itemsEquipped = [],
  
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
      weapon: 2,
      armor: 6,
      helmet: 0,
      shoes: 0
  },
  stats: {
    level: 1,
    experience: 10,
    experienceNeeded:[0,50,55,60,65,70,75,80,85,90,95,100], // should be in backend I suppose
    gold: 20,
    itemsOwned: [4,1]
  }};



// LOAD AVATAR INTO RIGHT POSITION


export default {


  name: 'loadAvatar',
  data() {
    return {
   
      item: item,
      pet: pet,
      petSelected: "3",
      petEquipped: true,
      petSize: 5,
      itemSelected: "",
      weaponSelected: avatar.equipped.weapon,
      armorSelected: avatar.equipped.armor,
      helmetSelected: avatar.equipped.helmet,
      skinSelected: avatar.body.skin,
      hairSelected: avatar.body.hair,
      beardSelected: avatar.body.beard,
      shirtSelected: avatar.body.shirt,
      avatarCoordinateX: 68, 
      avatarCoordinateY: 35,

      // Experience function
      experience: avatar.stats.experience,
      level: avatar.stats.level,
      experienceNeeded: avatar.stats.experienceNeeded[avatar.stats.level],
      

      // Vault function
      gold: avatar.stats.gold,
      itemOfInterest: 8,
      itemsOwned: avatar.stats.itemsOwned,
      }
  },
     // HEALTH BACKGROUND



  components: { healthBackground },



  methods: {

/********************************* VAULT / GOLD METHODS ********************************************/

// MARKET - ITEM OF INTEREST
loadItemOfInterest: function(){
  
  // Adjust size of picture to box size
  let computeSize = 1.1;
  do {
     computeSize -= 0.1;
  } while (item[this.itemOfInterest].size[0] * computeSize >= 30 && item[this.itemOfInterest].size[1] * computeSize >= 50);
    

  // append item and its prize
  $("#marketImageContainer").html(
    "<img src='" + item[this.itemOfInterest].source + "'" + "id='marketImage' alt='"+ item[this.itemOfInterest].name +"' style='width: " + item[this.itemOfInterest].size[0] * computeSize + "px; height: "+ item[this.itemOfInterest].size[1] * computeSize + "px'><span id='marketImageText'>Gold: " + item[this.itemOfInterest].gold +"</span>"
  );
},


clickMarketContainer: function(){
  // Open or close container based on width of containerbox
  if(document.getElementById("clickMarketContainerBox").clientWidth == "0") {
  document.getElementById("clickMarketContainerBox").style.width = "40px";
  document.getElementById("clickMarketContainerBox").style.border = "1px solid black";
  $("#buyButtonYes, #buyButtonNo").css("display","block");
  } else {
  document.getElementById("clickMarketContainerBox").style.width = "0px";
  document.getElementById("clickMarketContainerBox").style.border = "";
  $("#buyButtonYes, #buyButtonNo").css("display","none");
  }  
},


buyItemOfInterest: function(){

// If gold is higher than price, buy item
if(this.gold >= item[this.itemOfInterest].gold){

  // equip item 
  this[item[this.itemOfInterest].category + "Selected"] = this.itemOfInterest;

  // remove gold
  this.gold -= item[this.itemOfInterest].gold;

  // push item to list of itemsowned
  avatar.stats.itemsOwned.push(this.itemOfInterest);

  // Display Reward
  this.rewardPopUpItem(this.itemOfInterest);

  //Change itemOfInterest (make real function in the future, based on what the person would be able to buy next
  this.itemOfInterest++;

  // reload functions
  this.loadItemOfInterest();
  this.avatarEquipmentLoad();
} else {
  alert("You currently don't have enough gold!");
}
},


rewardPopUpItem: function(itemNumber){
  // element is number of item that you found
  
  // Shift popup text to ALL CAPS
  let popUpText = item[itemNumber].name.toUpperCase();
  
  // Create PopUp
  $("body").append("<div id='popUpRewardContainer'><img src='"+ item[itemNumber].source +"'><span>You unlocked a new item!<br>"+ popUpText +"</span><br><span id='popUpClose'>Amazing!</span></div>");

  // FadeIn PopUp
  $("#popUpRewardContainer").hide().fadeIn("slow");


  // Close PopUp
  $(document).on("click", "#popUpClose", function(){
  $(this).parent().fadeOut("slow", function(){$(this).remove();});
  });

},


itemSelectedCategory: function(){
// Search for item name in item!
 for(let i=0; i<item.length;i++){
  if(this.itemSelected === item[i].name){
    this.itemSelected = item[i];
    break;
  }
 }

// change for example weaponSelected to basic sword 
 this[this.itemSelected.category + "Selected"] = this.itemSelected.number; 
},



/********************************************** EXPERIENCE FUNCTIONS ****************************************************/


// EXPERIENCE FUNCTIONS!

// EXPERIENCE BAR

updateExperience: function(event){

  if (this.experience >= this.experienceNeeded) {

    this.experience -= this.experienceNeeded;
    this.level++;
    this.experienceNeeded = avatar.stats.experienceNeeded[this.level];

  }

  //Calculate experience Percentage 
  let experiencePercentage = this.experience / this.experienceNeeded * 100;

  // Set length of experience bar equal to experiencePercentage
  $("#experienceProgress").css("width", + experiencePercentage + "%");
  $("#experienceProgress").css("background-color", "#FF851B");
 


},


 // feedback: append image at position a and change position to point b - change over time in css (speed) - remove after time - Problemkind
rewardAnimation: function(event){

 $("body").append('<img id="experienceFeedback"src="static/raw_sprites/backer-only/BackerOnly-Weapon-DarkSoulsBlade.gif" >');

  
  let newPosition = $(levelContainer).offset();
  
  $("#experienceFeedback").css({ top: newPosition.top, left: newPosition.left});

},





showConsole: function(event){

// load customizationConsole on keypress
 if (event.keyCode == "81" && $("#customizationConsole").css("display")  == "none"){
  $("#customizationConsole").css("display","block");
 } else if (event.keyCode == "81" && $("#customizationConsole").css("display") == "block"){
  $("#customizationConsole").css("display","none");
 }

// load stat console on keypress
 if (event.keyCode == "87" && $("#statConsole").css("display")  == "none"){
  $("#statConsole").css("display","block");
 } else if (event.keyCode == "87" && $("#statConsole").css("display") == "block"){
  $("#statConsole").css("display","none");
 }
},






/****************************************************** BODY FUNCTIONS ***************************************************/

changeBodyPartButton: function(){
  // Button to switch between differen body parts: One button to switch them all!
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
},


/*********************************************************** EQUIPMENT FUNCTION *************************************************/

avatarEquipmentLoad: function() {


let itemCategory = ["armor","shield","weapon","helmet","shoes"],
    itemCategorySelected = ["armorSelected","shieldSelected","weaponSelected","helmetSelected","shoesSelected"];

// Adding items to character
for (let i=0; i< itemCategory.length; i++){
 if (item[avatar.equipped[itemCategory[i]]].length !== 0 && item[avatar.equipped[itemCategory[i]]].number !== 0) {
 
 // Remove old items
 $('#avatarContainer img[alt="' + item[avatar.equipped[itemCategory[i]]].name + '"]').remove();

// link avatar up to variables in data object
 avatar.equipped[itemCategory[i]] = this[itemCategorySelected[i]];

// Append new items
 $("#avatarContainer").append(
      "<img src='" + item[avatar.equipped[itemCategory[i]]].source +
        "' alt='" + item[avatar.equipped[itemCategory[i]]].name + 
        "' value='" + itemCategory[i] + "Equipped" +  "' style=' width:" + item[avatar.equipped[itemCategory[i]]].size[0]  + "px; height:" + item[avatar.equipped[itemCategory[i]]].size[1] +  
        "px; position:absolute;top:" + (item[avatar.equipped[itemCategory[i]]].coordinates[1] + this.avatarCoordinateY) + "px;left:" + (item[avatar.equipped[itemCategory[i]]].coordinates[0] + this.avatarCoordinateX) + "px; z-index:"+ item[avatar.equipped[itemCategory[i]]].layer + "'>");

}}

// $("#avatarContainer > img").hide().fadeIn(800);

},



petLoad: function() {

 // ATTACH ITEMS TO AVATAR RELATIVE TO POSITION 
if (this.petSelected !== "" && !this.petEquipped){

// remove all images and then reload avatar and pet;
$("#avatarContainer img").remove();

// Shift avatar back into the center
this.avatarCoordinateX += 15;

//APPEND PET
$("#avatarContainer").append('<img id="sideBarPet" style="width:'+ (pet[this.petSelected].size[0] * (0.5 + (0.1 * this.petSize)))  +'px; height:'+ (pet[this.petSelected].size[1] * (0.5 + (0.1 * this.petSize))) +'px" src="'+ pet[this.petSelected].source +'"></img>');


//Reload avatar body
this.avatarBodyLoad();

//Don't move avatar again on reloading next pet
this.petEquipped = true;


} else if (this.petSelected !== "" && this.petEquipped) {

// Get rid of old pet!
 $('#avatarContainer img[id="sideBarPet"]').remove();

 //APPEND PET
$("#avatarContainer").append('<img id="sideBarPet" style="width:'+ (pet[this.petSelected].size[0] * (0.5 + (0.1 * this.petSize)))  +'px; height:'+ (pet[this.petSelected].size[1] * (0.5 + (0.1 * this.petSize))) +'px" src="'+ pet[this.petSelected].source +'"></img>');


} else {
  // Get rid of old pet!
 $('#avatarContainer img[id="sideBarPet"]').remove();

 // Shift avatar to the right to make space for pet
 this.avatarCoordinateX -= 15;

 // remove all images and then reload avatar and pet;
 $("#avatarContainer img").remove();
 this.avatarBodyLoad();

 // set petEquipped to true, so that on the next call the avatar is not moved again
 this.petEquipped = false;
} 
  

 //MOVE PET INTO RIGHT POSITION
$("#sideBarPet").css({
   "top": this.avatarCoordinateY + pet[this.petSelected].coordinates[1],
   "left":this.avatarCoordinateX + pet[this.petSelected].coordinates[0]
});

 $("#sideBarPet").css({
      animation: "petJump " + 0.8 + "s linear"
    });



}
},


  computed: {

    // replace weapon with respective item category
     weaponFilter: function(element) {
      //Problemkind I would like this to be a filter for all the categories

       return this.item.filter(function(argument) {
         if(argument.category === "weapon") {
          return argument;
         }
     })
   },
   armorFilter: function() {
       return this.item.filter(function(argument) {
         if(argument.category === "armor") {
          return argument;
         }
     })
   },
  },


  mounted () {
  // load experienceBar
  this.updateExperience();

  // load itemOfInterest
  this.loadItemOfInterest();

  // load avatar, items and pet on start
  this.avatarBodyLoad();
  this.avatarEquipmentLoad();
  this.petLoad();

  // listen for click on Market Container
  document.getElementById("marketContainer").addEventListener("click", this.clickMarketContainer);

  // listen for click on Buy Button
   document.getElementById("buyButtonYes").addEventListener("click", this.buyItemOfInterest);

  // listen for keypress
  window.addEventListener('keyup', this.showConsole);



  // test!
  this.rewardPopUpItem();

  },

  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#sideBar {
  min-width: 256px;
  min-height: 630px;
  border: 1px solid #10eccb;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  /*                                               */
}

#avatarContainer {
  height: 192px;
  width: 255px;
  -webkit-transition: background-image 0.5s;
  transition: background-image 0.5s;
  border-bottom: 1px solid gray;
  z-index: 9;
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



/****************************  CONSOLE CSS ***************************************/

#customizationConsole {
  height: 200px;
  width: 400px;
  background-color: lightgrey;
  position: absolute;
  margin-top: 15px;
  top: 30px;
  left: 300px;
  display: none;
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

#statConsole {
  height: 200px;
  width: 400px;
  background-color: lightgrey;
  position: absolute;
  margin-top: 15px;
  top: 30px;
  left: 300px;
  display: none;
}



/********************************************** Experience CSS *********************************************************/

#experienceBar {
  height: 31px;
  margin: 4px 0 1px 0;
  width: 220px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 30px;
  overflow: hidden;
  background-color: white;
}

#experienceProgress {
display: block;
  height: 100%;
  width: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #FF851B;
  background-image: linear-gradient( center bottom, rgb(43, 194, 83) 37%, rgb(84, 240, 84) 69%);
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  /* transition: all 800ms; */
}

#level {
  line-height: 20px;
  border: 2px double black;
  cursor: pointer;
  color: white;
  background-color: gray;
  text-align: center;
  width: 20px;
  height: 20px;
  display: inline-block;
  position: absolute;
  left: 225px;
  top: 200px;
}

#experienceFeedback {
  position: absolute;
  transition: all 800ms;
}


/******************************* VAULT / GOLD CSS *************************************/


#vaultContainer {
  height: 100px;
  width: 256px;
  box-sizing: border-box;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
}

#goldContainer {
  height: 100px;
  width: 180px;
  box-sizing: border-box;
  border-right: 1px solid black;
  float: left;
  line-height: 100px;
  text-align: center;
}

#goldImage {
  height: 98px;
  width: 178px;
}

#marketContainer {
  height: 98px;
  width: 76px;
  box-sizing: border-box;
  background-color: white;
  float: left;
}

#marketImageContainer {
  width: 60px;
  height: 60px;
  border-radius: 5px 0 0 5px;
  margin: 20px 8px 20px 8px;
  border: 1px solid black;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
}

#marketImage {
  display: block;
  margin: 0 auto;
  padding-left: 7px;
}

#marketImageText {
  line-height: 10px;
  font-size: 10px;
  position: relative;
  top: -11px;
}

#clickMarketContainerBox {
  position: absolute;
  top: 250px;
  left: 250px;
  width: 0;
  height: 62px;
  padding-top: 5px;
  border-left: 0px !important;
  border-radius: 0 10px 10px 0;
  box-sizing: border-box;
  background-color: white;
  font-size: 10px;
  line-height: 19px;
  text-align: center;
  z-index: 99;
  transition: all 400ms;
}

#buyButtonYes,
#buyButtonNo {
  cursor: pointer;
  display: none;
}

#buyButtonYes {
  color: green;
  display: none;
}

#buyButtonNo {
  color: red;
  margin-top: 10px;
}


#popUpRewardContainer {
  display: inline-block;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 50;
  background-color: white;
  border: 4px double darkgrey;
  text-align: center;
  line-height: 30px;
  z-index: 10000;
}

#popUpRewardContainer span {
  font-size: 18px;
  display: inline-block;
  clear: both;
}

#popUpRewardContainer img {
  float: left;
  width: 80px;
  height: 80px;
  margin: 50px 0 30px 110px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 20px;
  background-color: grey;
}

#popUpClose {
  display: inline-block;
  margin-top: 5px;
  width: 80px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  line-height: 40px;
  background-color: black;
  color: white;
  cursor: pointer;
}

</style>

