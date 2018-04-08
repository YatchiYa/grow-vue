<template>  
<div>  
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title">Check out recent surveys</h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="card" v-for="survey in surveys" v-bind:key="survey.id">
        <div class="card-content">
          <p class="title">{{ survey.name}}</p>
          <p class='subtitle'>{{ survey.created_at.toDateString() }}</p>
        </div>
      </div>
    </div>
  </section>

  <footer>
  <h3>Cartoon characters</h3>
    <div v-for="(character, i) in characters" v-bind:key="i">
      <h4>{{ character.name }}</h4>
      <p><img v-bind:src="character.imgSrc" v-bind:alt="character.name"/></p>
    </div>
  </footer>
</div>  
</template>  


<!-- add vue packages ! -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>  
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>  
import { mapState } from 'vuex'  
export default {  
  computed: mapState({
    surveys: state => state.surveys,
    characters : state => state.characters
  }),
  beforeMount() {
    this.$store.dispatch('loadSurveys'),
    this.$store.dispatch('loadCharacters')
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100px;
  height: 120px;
}

</style>
