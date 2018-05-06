<template>
        
                  <div id="story">
                          <div class="ref-home">
                            <router-link :to="{ name: 'Home' }"> « Home </router-link>
                          </div>
                          <div class="story-title">
                            A History of Dust
                          </div>

                          <div class="story-desc">
                            &emsp;&emsp;&emsp;In the beginning of time there were two gods. The God of Order, Hu, and the God of Chaos, Eon. The energy that was released during a fight between them created the universe as we know it today. But as the force created the world it shattered Hu’s consciousness into a thousand pieces, while hurling Eon into the Ether. <br/>
                            
                            &emsp;&emsp;&emsp;These pieces of Hu’s shattered consciousness floated around the newborn universe for many centuries, slowly deteriorating into Dust. This Dust reached the world of Elyrion and rained down on it for several days and nights drenching the soil and water in Hu’s consciousness. From this Dust the first conscious life emerged, first animals and trees, then humans.<br/>

                            &emsp;&emsp;&emsp;Over the centuries Eon, regained its strength, more and more parts of him escaping the Ether. His aim is to destroy 
                            every last fragment of Hu’s consciousness and take control of the whole universe. Since then the battle of the gods 
                            continues within each one of us and depending on which god wins, we turn into heroes with the power to save this 
                            world or into demons, threatening every living thing around us.<br/>

                            &emsp;&emsp;&emsp;Unable to deal with the rising number of demons, humanity was on the brink of extinction but in its final battle a 
                            group of heroes emerged that rediscovered their connection to Hu. They learned how to use the Dust that made up their 
                            consciousness to cast powerful magic, unlocking some of Hu’s former god abilities. This knowledge turned the tides of 
                            battle and returned the demons back into their original form. This victory of humanity was known as “The Rise of the 
                            first Dust Weavers”.<br/>

                            &emsp;&emsp;&emsp;Despite humanities new found power, Eon influence on the world grew stronger and demon attacks steadily increased. 
                            During their first battles, Dust Weavers realized that if their minds were aligned on one common goal, their dust 
                            would combine and awaken Hu’s forgotten abilities. To help groups of people to align their values and foster their 
                            magic abilities Dust Weavers devised many collaboration tools that helped them to fight their enemies. Weavers 
                            devised governments and religions, but as the time passed, these were also corrupted by Eon’s influence and their 
                            original purpose forgotten.<br/>
                            
                          </div>

                          <div class="tool-title">
                            The Birth Of A New Collaborative Tool
                          </div>

                          <div class="tool-desc">
                            
                            &emsp;&emsp;&emsp;In the last hundred years Eon’s corrupting influence on the world increased, leading to greater and greater wars and 
                            rising anonymity and coldness. In response to that the “Engineers” have created a magical device that facilitates the
                             absorption of Dust and can thus amplify a Dust Weaver’s powers. This magical device is planned to be given to the 
                             next generation of Dust Weavers, who will need to collect as much Dust as they can, to test the boundaries of the 
                             device’s strengths and weaknesses.If this experiment proves to be successful, humanity will have a tool to train 
                             everyone as a Dust Weaver, bringing the collective consciousness of Hu together to beat Eon back once and for all!
                             <br/>
                          </div>
                  </div>


</template>


<script>
export default {  
  name: 'story',
  data() {
    return {
      
    }
  }
}
</script>


<style>

#story{
      position: absolute;
      background: silver;
      box-shadow: -8px 7px 25px silver;
      border-radius: 15px;
      height: 2400px;
      width: 80%;
      top: 10%;
      left: 10%;
    }
    .story-title{
      position: relative;
      padding-top: 5%;
      padding-left: 40%;
      font-size: 30px;
      color: red;
    }

    .story-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 17px;
    }

    .tool-title{
      position: relative;
      padding-top: 5%;
      padding-left: 28%;
      font-size: 28px;
      color: green;
    }
    .tool-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 17px;      
    }

    .grow-title{
      position: relative;
      padding-top: 5%;
      padding-left: 33%;
      font-size: 28px;
      color: #00eaff;     
    }
    .grow-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 17px;      
    }

    .dustWeaver-title{
      position: relative;
      padding-top: 5%;
      padding-left: 30%;
      font-size: 28px;
      color: #8b0a90;     
    }
    .dust-Weaver-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 17px;      
    }

    .cluster-title{
      position: relative;
      padding-top: 5%;
      padding-left: 45%;
      font-size: 28px;
      color: #9e0202;     
    }
    .cluster-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 17px;      
    }

    #why-title{
      position: relative;
      padding-top: 5%;
      padding-left: 45%;
      font-size: 28px;
      color: #ffd200;     
    }
    .why-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 17px;      
    }

    .what-title{
      position: relative;
      padding-top: 5%;
      padding-left: 45%;
      font-size: 28px;
      color: #ffd200;     
    }
    .what-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 17px;      
    }
    .how-title{
      position: relative;
      padding-top: 5%;
      padding-left: 45%;
      font-size: 28px;
      color: #ffd200;     
    }
    .how-desc{
      position: relative;
      padding-top: 5%;
      padding-left: 5%;
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
      background: transparent;
    }



</style>