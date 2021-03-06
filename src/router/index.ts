import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import NewSeason from '../views/NewSeasons.vue';
import Genre from '../views/Genre.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/new-seasons',
    name: 'NewSeason',
    component: NewSeasons,
  }, {
    path: '/genre',
    component: Genre,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
