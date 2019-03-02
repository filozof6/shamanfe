import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Dream from '@/components/Dream/Dream'
import DreamList from '@/components/Dream/DreamList'
import DreamEdit from '@/components/Dream/Edit'
import DreamCreate from '@/components/Dream/Create'

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
    },
    {
      path: '/dream/:id/edit',
      name: 'dream-edit',
      component: DreamEdit,
      props: true
    },
    {
      path: '/dream/create',
      name: 'dream-create',
      component: DreamCreate,
    },
  ]
