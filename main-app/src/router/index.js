import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // /**
  //  * 在登录成功获取 menu 后, 把子应用的路由添加到主应用 (添加时不需要执行 component, 只需要指定 path 和 meta 即可),
  //  * 然后可以在路由拦截中, 判断是否可以访问, 比如说登录过期, 拦截到登录页
  //  */
  // {
  //   path: '/micro/childApp/about',
  //   meta: {},
  // },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

export default router;
