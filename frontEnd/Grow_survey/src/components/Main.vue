<template>
  <div id="app_main">
  	
  		<a class="logout"><img src="../../static/images/logout.png"></a>
      <label @click="canvasset" class="anime_screen" title="anime screen"> Screen </label>
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

    <div id="Grow_playground">
                    <!-- SideBar Box -->
          <div id="sideBar">

          </div>


          <!-- Container of the different boxes-->
          <container id="container" @click.left="closeMenu">

                <!-- Habits Box -->
              <dailies id="habits">

              </dailies>


                <!-- Skills Box  -->
              <calendar id="skills">

              </calendar>


                <!--  ToDos Box  -->
              <ToDos id="ToDos">

              </ToDos>


                <!-- Calendar Box  -->
              <calendar id="Calendar">

              </calendar>

          </container>
  	</div>

  </div>
</template>



<script>
import canvas from './Main/canvas.vue'

export default {  
  name:'Main',
  components: { canvas },
  data() {
  	return {

  	}
  },
  methods:{
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
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
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

  src: url('../../static/polices/Lovely Day Personal Use.ttf');
  src: url('../../static/polices/Lovely Day Personal Use.ttf') format('truetype');
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
  width: 22.8%;
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

#skills,#habits,#ToDos,#Calendar{
  width: 47%;
  height: 49%;
  float:left;
  margin-bottom: 13px;
  margin-right: 20px;
  box-sizing: border-box;
  overflow: auto;
  display: inline-box;
  background: white;
}

#habits{
  background-image: url('../../static/images/border1.03.png');
  background-size: 100% 100%;
}
#skills{
  background-image: url('../../static/images/border1.04.png');
  background-size: 100% 100%;
}
#Calendar{
  background-image: url('../../static/images/border1.05.png');
  background-size: 100% 100%;
}


/*  *********  Header-list        ***********   */

#ToDos{
  background-image: url('../../static/images/border1.02.png');
  background-size: 100% 100%;
}



/* the differrent frame in the main box */
.link-boxes{
  position: absolute;
  transform:translate(182%,160%);
  z-index: -1;
}
.link-boxes1{

  position: absolute;
  transform:translate(182%,1410%);
  z-index: -1;
}
.link-boxes2{

  position: absolute;
  transform:translate(515%,14%);
  z-index: -1;
}
.link-boxes3{

  position: absolute;
  transform:translate(515%,1630%);
  z-index: -1;
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





</style>