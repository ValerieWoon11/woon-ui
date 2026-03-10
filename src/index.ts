import type { App } from 'vue';
import * as components from './components';

const install = (app: App) => {
  Object.values(components).forEach(component => {
    if (component.install) {
      app.use(component as any);
    }
  });
};

export default { install };
export * from './components';
export * as hooks from './hooks';
