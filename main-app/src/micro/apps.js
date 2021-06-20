import store from '../store';

const activeRule = (path) => (location) => location.hash.startsWith(path);

const apps = [
  {
    name: 'childApp',
    entry: '//localhost:8081',
    container: '#frame',
    // 路由的匹配规则，当返回 true 时，匹配上该子应用
    activeRule: activeRule('#/micro'),
    props: {
      mainState: store,
    },
  },
];

export default apps;
