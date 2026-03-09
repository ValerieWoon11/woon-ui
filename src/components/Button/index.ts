import type { App } from 'vue';
import BasicButton from './src/BasicButton.vue';

BasicButton.install = (app: App) => {
  app.component('BasicButton', BasicButton);
};

export default BasicButton;
export { BasicButton };
