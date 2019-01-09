import Vue from 'vue'
import App from './App.vue'
import router from './router'


import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */


import VueResource from 'vue-resource'


import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';
/* 使用px：import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.px/list'; */

Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);
// 注意：按需引入单个组件，另需导入重置基础样式；即在 main.js 或根组件执行 import 'vue-ydui/dist/ydui.base.css';




Vue.use(YDUI);
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
