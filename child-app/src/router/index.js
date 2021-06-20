import Home from '../views/Home.vue';
import App from '../App.vue';

const routes = [
  {
    path: '/micro',
    name: 'micro',
    redirect: '/micro/home',
    component: App,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/',
    redirect: '/micro/home',
  },
];

export default routes;
