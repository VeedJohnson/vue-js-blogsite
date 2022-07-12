// import * as Vue from 'vue';
import  { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  }, 
  {
    path: "/posts/:id",
    name: "Blog",
    component: Blog,
    props: (route) => ({ id: route.params.id })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | DasDas`;
  next();
});
export default router;
