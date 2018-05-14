<template>
  <div id="app_main">
  	 <!-- logout Button  -->
  		<label @click="signOut" class="logout"><img src="../../static/images/logout.png"></label>


      <!-- to start the animation background or not -->
      <label @click="canvasset" class="anime_screen" title="anime screen"> Screen </label>
      <!-- to show the header part -->
      <label @click="showHeaderSwitch = !showHeaderSwitch" class="showHeader" title="showHeader"> Config </label>

    <audio src="../../static/multimedia/audio/tokyo_ghoul.mp3" controls loop  style="z-index:100; position: absolute;width: 50px;border-radius: 60px;left: 96%; height: 20px;"></audio>


    <img src="../../static/images/link-boxes2.png" class="link-boxes">
    <img src="../../static/images/link-boxes3.png" class="link-boxes1">
    <img src="../../static/images/link-boxes4.png" class="link-boxes2">
    <img src="../../static/images/link-boxes5.png" class="link-boxes3">


    <div class="demo-2">
          <div class="content">
                    <div id="large-header" class="large-header">
                        <canvas id="demo-canvas"></canvas>
                    </div>
                </div>         
        </div>



        <!-- this the header nav to switch the different vues -->

        <header_switch id="header_switch" v-if="showHeaderSwitch">


        </header_switch>




    <div id="Grow_playground">
                    <!-- SideBar Box -->
          <sidebar id="sideBar">

          </sidebar>


          <!-- Container of the different boxes-->
          <container id="container">

          </container>


          <!-- RoomShow of the show  -->
         
          <!--
          <RoomShow id="RoomShow">
          
          </RoomShow>
          -->

  	</div>

  </div>
</template>



<script>
import canvas from './Main/canvas.vue'
import container from './Main/container.vue'
import RoomShow from './Main/RoomShow.vue'
import header_switch from './header_switch.vue'
import sidebar from './Main/sidebar.vue'


import Firebase from 'firebase'

export default {  
  name:'Main',
  components: { sidebar, header_switch, canvas, container, RoomShow },
  data() {
  	return {
      showHeaderSwitch: false
  	}
  },
  methods:{
  // show the header section 
    showHeaderS: function() {
      this.showHeaderSwitch = true
    },
    signOut: function() {
      Firebase.auth().signOut().then(() => {
        this.$router.replace('/');
      });
    },
    
    canvasset: function () {
      (function() {

    var width, height, head, canvas, ctx, circles, target, animateHeader = true;

    // Main
    init();
    addevent();

    function init() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        head = document.getElementById('large-header');
        head.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addevent() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        head.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(24,255,0,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();
  },
  created: function () {
    alert()
  }


    }
}

</script>


<style>


#app_main{
  overflow: hidden;
}

/* 
@font-face{

  font-family: 'SF';

  src: url('../../static/polices/Mon Cherry Personal Use.ttf');
  src: url('../../static/polices/Mon Cherry Personal Use.ttf') format('truetype');
}

@font-face{

  font-family: 'LDPU';

  src: url('../../static/polices/Lovely.ttf');
  src: url('../../static/polices/Lovely.ttf') format('truetype');
}
*/

  /*  delimited box for our template */
#Grow_playground{
  box-sizing: border-box;
  background: none;
  width: 1124px;
  height: 630px; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 1000;
}
/*  logout logo   */
.logout{
  position: absolute;
  z-index: 10000;
  cursor: pointer;
}

/* animating screen  */
.anime_screen{
  position:absolute;
  left:3%;
  z-index:10000;
  color:red;
  cursor:pointer;
}

  /* the side-bar sizer */
#sideBar{
  width: 22.7%;
  height: 100%;
  float: left;
  background-color: white;
}

/*  set the different boxes  */

#container{
  width: 70%;
  height: 100%;
  box-sizing: border-box;
  float: right;
}


/* the differrent frame in the main box */
.link-boxes{
  position: absolute;
  top: 9%;
  left: 28%;
  z-index: 10;
}
.link-boxes1{

  position: absolute;
  top: 86%;
  left: 28%;
  z-index: 10;
}
.link-boxes2{

  position: absolute;
  left: 56%;
  top: 9%;
  z-index: 10;
}
.link-boxes3{

  position: absolute;
  top: 85%;
  left: 56%;
  z-index: 10;
}


/*   -------------------------------------------- Animation  *********************************************************  */

/*  canvas animation */
  canvas{
    display:inline-block;
  }
  body{
    margin:0;
  }
/* Header */
.large-header {
  position: relative;
  width: 100%;
  background: #333;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  height:718px;
}


.demo-2 .large-header {
  background-image: url('../../static/images/demo-2-bg.jpg');
  background-position: center bottom;
}

/*  ----------------------------------------- Header switch  ---------------------------------------  */
#header_switch{
  position: absolute;
  height: 200px;
  width: 1000px;
  border: 1px solid #1b7a54;
  top: 0%;
  z-index: 10000;
  left: 16%;
  background: rgba(12, 92, 45, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.showHeader{
  position:absolute;
  left:7%;
  z-index:10000;
  color:green;
  cursor:pointer;
}



/* ------------------------------------------------------ Room Show   ---------------------------------------------  */
#RoomShow {
  position: absolute;
  width: 67.5%;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: right;
  border: 5px groove red;
  background: url('../../static/images/op.jpg');
  background-size: 100% 100%;
  left: 30%;
  z-index: 1;
}


</style>