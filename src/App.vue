<template>
	<div id="app">

	   <router-view/>

    </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    setUser: function() {
      this.$store.dispatch('setUser');
    }
  },
  created() {
    // when the app is created run the set user method
    // this uses Vuex to check if a user is signed in
    // check out mutations in the store.js file
    this.setUser();
  }
}
</script>

<style lang="scss">  
@import '~bulma/bulma'
</style>  