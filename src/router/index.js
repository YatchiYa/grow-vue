import Vue from 'vue'  
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'  

import about from '@/components/about'
import Home from '@/components/Home'
import story from '@/components/story'
import Main from '@/components/Main'
import landing_page from '@/components/landing_page'
import firebase from 'firebase'



Vue.use(Router);
Vue.use(BootstrapVue);


let router = new Router({  
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/story',
      name: 'story',
      component: story
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: 'Home'
    }
  ]
})


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('Home')
  else if (!requiresAuth && currentUser) next('Main')
  else next()
})


export default router