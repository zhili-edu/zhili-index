import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index';
import Course from "@/views/course";
import PjCourse from "../views/pjCourse";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/course',
    name: 'Course',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Course,
    children :[
      {
        path: '/pj',
        name: 'pj-course',
        component : PjCourse
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
