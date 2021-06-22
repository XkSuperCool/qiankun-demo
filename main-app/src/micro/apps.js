// import Vue from 'vue';
import store from '../store';

const activeRule = (path) => (location) => location.hash.startsWith(path);

export const MODULE_NAME = 'micro';
const isProduction = process.env.NODE_ENV === 'production';

export const menus = [
  {
    path: '/micro/childApp',
    name: '子应用首页',
    children: [
      {
        path: 'home',
        name: 'Home'
      },
      {
        path: 'about',
        name: 'About'
      },
    ],
  },
];

function getRoute(name) {
  const routerList = menus; // vuex 中存储的 menu
  const childPath = `/${MODULE_NAME}/${name}`;
  const match = routerList.find((e) => e.path === childPath);
  if (!match) return [];
  return Array.isArray(match.children) ? match.children : [];
}

const apps = [
  {
    name: 'childApp',
    entry: '//localhost:8081',
    container: '#frame',
    // 路由的匹配规则，当返回 true 时，匹配上该子应用
    activeRule: activeRule(`#/${MODULE_NAME}`),
  },
];

export default function() {
  return apps.map((item) => ({
    ...item,
    entry: `${isProduction ? '/' : item.entry}/#/${MODULE_NAME}/${item.name}`,
    activeRule: activeRule(`#/${MODULE_NAME}/${item.name}`),
    props: {
      mainStore: store,
      routerBase: `${MODULE_NAME}/${item.name}`,
      routerList: getRoute(item.name),
    },
  }));
}
