<template>
  <div>


  </div>
</template>

<script>

export default {  
  name:'header_switch',
  components: { },
  data() {
  	return {

  	}
  },
  methods: {
    
  },
  created: {

  },
  computed: {
  	
  }
}
</script>

<style>

#ShowRoom{
  position: absolute;
  height: 183px;
  width: 180px;
  text-align: center;
  left: 7%;
  color: white;
  background: rgba(0,0,0,0.5);
  border-radius: 90px;
  cursor: pointer;
}

#ShowRoom:hover{
  background: rgba(0,0,0,0.8);
}
#ShowRoom img{
  max-width: 65%;
}

/* --------------------  skills  -------------------------  */
#Skills{
  position: absolute;
  height: 183px;
  width: 180px;
  text-align: center;
  left: 40%;
  color: white;
  background: rgba(0,0,0,0.5);
  border-radius: 90px;
  cursor: pointer;
}

#Skills:hover{
  background: rgba(0,0,0,0.8);
}
#Skills img{
  max-width: 65%;
  margin-top: 8px;
}


/* -------------------- setting  ------------------------ */

#Setting{
  position: absolute;
  height: 183px;
  width: 180px;
  text-align: center;
  left: 75%;
  color: white;
  background: rgba(0,0,0,0.5);
  border-radius: 90px;
  cursor: pointer;
}

#Setting:hover{
  background: rgba(0,0,0,0.8);
}
#Setting img{
  max-width: 81%;
}



</style>