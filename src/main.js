// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config = {
    apiKey: "AIzaSyCLrXG8r0a57L5qVfHu3Iv-Q40PDfMn82I",
    authDomain: "grow-auth.firebaseapp.com",
    databaseURL: "https://grow-auth.firebaseio.com",
    projectId: "grow-auth",
    storageBucket: "grow-auth.appspot.com",
    messagingSenderId: "634426483814"
  };

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
	    app = new Vue({
		  el: '#app',
		  router,
		  store,
		  components: { App },
		  template: '<App/>'
		})
	}
});
