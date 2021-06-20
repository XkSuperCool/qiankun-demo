import { registerMicroApps, start, initGlobalState } from 'qiankun';
import apps from './apps';
import store from '../store';

registerMicroApps(apps);
export const MicroAppStateActions = initGlobalState({});
MicroAppStateActions.setGlobalState(store.state);

export default start;
