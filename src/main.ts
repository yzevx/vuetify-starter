import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900-italic.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App';

import router from '@/plugins/router';
import vuetify from '@/plugins/vuetify';

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app');
