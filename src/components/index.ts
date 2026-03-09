import type { App } from 'vue';
import { BasicButton } from './Button';

const components = [ BasicButton ];

const install = (app: App) => {
  components.forEach(component  => {
    app.use(component as any);
  });
};

export default { install };
export { BasicButton };
