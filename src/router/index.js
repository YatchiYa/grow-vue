import Vue from 'vue'  
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'  
import about from '@/components/about'
import Home from '@/components/Home'
import story from '@/components/story'
import Main from '@/components/Main'
import landing_page from '@/components/landing_page'


Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({  
  routes: [
    {
      path: '/',
      name: 'landing_page',
      component: landing_page
    },
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
      component: Main
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
