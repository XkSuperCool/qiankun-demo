import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import routes from './router';

import './public-path';

Vue.use(VueRouter);

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
  store.commit('SET_MAIN_STATE', props.mainState || {});
  const { container } = props;
  router = new VueRouter({
    // eslint-disable-next-line no-underscore-dangle
    mode: 'hash',
    routes,
  });
  router.addRoute('micro', {
    path: 'about',
    name: 'About',
    component: () => import('./views/About.vue'),
  });
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
  render();
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
