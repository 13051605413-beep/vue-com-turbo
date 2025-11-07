import { setup } from '@storybook/vue3';
import * as ElementPlus from '@yza-fe/element-plus'
import '@yza-fe/element-plus/dist/index.css'
setup((app) => {
  app.use(ElementPlus)
  // app.use(MyPlugin);
  // app.component('my-component', MyComponent);
  // app.mixin({
  //   // My mixin
  // });
});