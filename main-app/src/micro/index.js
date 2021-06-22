import { registerMicroApps, start } from 'qiankun';
import NProgress from 'nprogress';
import getApps  from './apps';

registerMicroApps(getApps(), {
  beforeLoad() {
    NProgress.start();
  },
  afterMount() {
    NProgress.done();
  },
});

export default start;
