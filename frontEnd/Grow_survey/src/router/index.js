import Vue from 'vue'  
import Router from 'vue-router'  
import about from '@/components/about'
import Home from '@/components/Home'
import story from '@/components/story'
import Main from '@/components/Main'


Vue.use(Router)

export default new Router({  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
