<template>
        
    <div id="ab">
               <div id="container-us">
                  <div class="ref-home">
                    <router-link :to="{ name: 'Home' }"> « Home </router-link>
                  </div>
                  <div class="title">
                    Who Are We ? 
                  </div>

                  <div class="desc">
                    Hum.....<br><br> 
                    <strong>  Pascal : </strong> The Founder.<br><br> <br> 
                    <strong> Aurel : </strong> The Web Designer. <br><br> <br> 

                    <strong> Vero, Mathieu, Pedro : </strong> the 3 Front Dev ! <br> <br>
                    <strong>  Yatchi : </strong> The Other Dev ... <br><br> <br> 
                    <strong> Others ? </strong>  <br> <br> 

                    we welcome you any time ! 24h/24 ! <br>
                    visit our page facebook : <a href="https://www.facebook.com/notes/grow-playground/where-grow-will-go-and-i-will-follow/131323230913619/">Grow</a>

                  </div>

               </div>
    </div>
</template>


<script>
export default {  
  name: 'about',
  data() {
    return {
      
    }
  }
}
</script>


<style>


#container-us{
      position: absolute;
      background: silver;
      box-shadow: -8px 7px 25px silver;
      border-radius: 15px;
      height: 103%;
      width: 80%;
      top: 5%;
      left: 10%;
    }

    .title{
      position: relative;
      padding-top: 5%;
      padding-left: 40%;
      font-size: 30px;
      color: red;
    }

    .desc{
      position: relative;
      padding-top: 5%;
      padding-left: 10%;
      padding-right: 5%;
      font-size: 17px;
    }
    

    .ref-home{
      display: block;
      position: absolute;
      font-size: 20px;
      top: 2px;
      left: 10px;
      cursor: pointer;
      z-index: 100;
    }
    .ref-home a{
      text-decoration: none;
      color: #722167;
      }


</style>