/* eslint-disable */
import Vue from 'vue';
import ElementUI from 'common/node_modules/element-ui';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import { beforeEach, generatorRoutes } from './router';

import './public-path';
import 'common/node_modules/element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false;

/**
 * router mode 设置为 hash 时，vue 不支持其设置 base，base 只有在 history 模式下才会起作用，
 * 这时需要创建一个单独的路由页面，然后所有路由作为其子路由。
 */

let router = null;
let instance = null;
// eslint-disable-next-line no-underscore-dangle
const isNotQiankun = !window.__POWERED_BY_QIANKUN__;
function render(props = {}) {
  store.commit('SET_MAIN_STORE', props.mainStore || {});
  const { container, routerList, routerBase } = props;

  // 根据 routerList 动态生成 routes, 在父子应用一起运行的状态下它是有父应用来控制的，添加上用户拥有权限的页面
  // 在子应用单独运行的状态下，它是一个基本的路由列表如（登录、404、401等）.
  // 父子应用一起运行时,子应用是没有这些基础路由的,这些基础路由由父应用来控制.
  router = new VueRouter({
    // eslint-disable-next-line no-underscore-dangle
    mode: 'hash',
    routes: generatorRoutes(routerBase, routerList),
  });
  router.beforeEach = beforeEach;

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');

  // devtools 处理 (不处理时 devtools 中无法显示子应用的 components)
  if (!isNotQiankun && process.env.NODE_ENV === 'development') {
    const instanceDiv = document.createElement('div');
    // eslint-disable-next-line no-underscore-dangle
    instanceDiv.__vue__ = instance;
    document.body.appendChild(instanceDiv);
  }
}

// 判断是不是处于微前端架构中, true 则说明存在与微前端架构中，此时主应用是启动状态，子应用是运行在主应用中的
// false 则说明，该子应用是独立运行的
// 独立运行的子应用会进入这个判断，然后走 render 方法, 运行在主应用中的子应用则会走 mount 回调，然后调用 render
if (isNotQiankun) {
  /**
   * 当子应用单独运行时，需要在这里传递默认 routerList 配置，
   * 比如: 登录页、404、401 等。
   * 之后在登录后，跳转页面时，在 router.forEach 中去添加其他 router
   */
  const props = {};
  render(props);
}

export async function bootstrap() {
  //
}
export async function mount(props) {
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
