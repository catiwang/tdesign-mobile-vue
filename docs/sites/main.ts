import { createApp } from 'vue';
import app from './app.vue';
import router from './router';
import TDesign from '@/index';

// import tdesign style
import '@common/style/mobile/_reset.less';
import '@common/style/mobile/index.less';

// import site webcomponents
import 'tdesign-site-components';
import 'tdesign-site-components/lib/styles/style.css';
import 'tdesign-site-components/lib/styles/prism-theme.less';
import 'tdesign-site-components/lib/styles/prism-theme-dark.less';

createApp(app)
  .use(TDesign)
  .use(router)
  .mount('#app');
