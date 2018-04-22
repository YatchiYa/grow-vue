<template>

	<div>
		<Home v-if="!isLogged"> </Home>
		<Main v-if="isLogged"></Main>

	</div>
</template>

<script>
import Home from './Home.vue'
import Main from './Main.vue'

export default {  
  name:'landing_page',
  components: { Home, Main },
  data() {
  	return {
  		isLogged : false
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

</style>