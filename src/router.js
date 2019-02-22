import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import City from './views/City.vue';
Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {
      path: '/films',
      component: Film
     },
     {
      path: '/',
      component: Film
     },
     {
      path: '/cinemas',
      component: Cinema
     },
     {
     path: '/city',
     component: City
    },
    {
      path: '/center',
     component: Center
    }
  ]
});
export default router;
