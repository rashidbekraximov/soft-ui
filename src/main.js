import {createApp} from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axiosHttp from "./axios"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SmartTable from 'vuejs-smart-table'

const appInstance = createApp(App);
appInstance.config.globalProperties.$http = axiosHttp;
appInstance.use(store);
appInstance.use(SmartTable)
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.use(VueSweetalert2);
appInstance.use(Antd);
appInstance.mount("#app");

