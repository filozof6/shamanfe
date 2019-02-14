import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
// import Dream from '@/components/Dream/Dream'
import DreamList from '@/components/Dream/DreamList'

Vue.use(Router)



export default [
    // {
    //   path: '/dream/:id',
    //   name: 'dream',
    //   component: Dream
    // },
    {
      path: '/dreams',
      name: 'dreams',
      component: DreamList
    }
  ]