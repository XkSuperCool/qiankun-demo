/* eslint-disable */
import App from '../App.vue';

const isNotQiankun = !window.__POWERED_BY_QIANKUN__;

export const generatorRoutes = (base, list) => {
  return [
    // 因为使用的 hash 模式, hash 不支持设置 base, 所以使用一个父级路由来代替 base
    {
      path: `/${base}`,
      component: App,
      children: list.map((item) => ({
        path: item.path,
        name: item.name,
        component: (resolve) => require([`@/views/${item.name}.vue`], resolve),
      })),
    },
  ]
}

export const beforeEach = (to, from, next) => {
  // 主应用在运行时, 让主应用去进行路由控制
  if (!isNotQiankun) {
    next();
  }

  // 独立运行时, 自己进行路由控制, 这里没写对应的控制代码
  next();
};
