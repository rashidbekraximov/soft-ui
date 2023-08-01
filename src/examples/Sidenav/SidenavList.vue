<template>
  <div
      class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
      id="sidenav-collapse-main"
  >

    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse nav-text="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true"
                          aria-controls="collapseExample" nav-text="Forma" :to="{ name: 'Billing' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(form2,index) in forms" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="form2.hrefAddress">{{ form2.orderNumber}}.{{ form2.name.activeLanguage }}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="true"
                          aria-controls="collapseExample2"  navText="Hisobot" :to="{ name: 'Tables' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
        <div class="collapse  mt-1 mx-4" id="collapseExample2">
          <div  style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(report,index) in reports" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="report.hrefAddress">{{ report.orderNumber}}.{{ report.name.activeLanguage }}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="true"
                          aria-controls="collapseExample3"  navText="Malumotlar" :to="{ name: 'Tables' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample3">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(information,index) in informations" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="information.hrefAddress">{{ information.orderNumber}}.{{ information.name.activeLanguage}}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Admin Panel" :to="{ name: 'Profile' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
// import Shop from "../../components/Icon/Shop.vue";
import Office from "../../components/Icon/Office.vue";
// import CreditCard from "../../components/Icon/CreditCard.vue";
// import CustomerSupport from "../../components/Icon/CustomerSupport.vue";
// import Document from "../../components/Icon/Document.vue";
// import Spaceship from "../../components/Icon/Spaceship.vue";
// import { MailOutlined} from '@ant-design/icons-vue';

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
      allForms: [],
      forms: [],
      reports: [],
      informations: [],
      adminPanel:{}
    };
  },
  components: {
    // MailOutlined,
    // AppstoreOutlined,
    // SettingOutlined,
    SidenavCollapse,
    // Shop,
    Office,
    // CreditCard,
    // CustomerSupport,
    // Document,
    // Spaceship,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },

    getFormList() {
      this.$http.get("menu-system" + localStorage.getItem("lang")).then(res => {
        console.log(res.data)
        this.allForms = res.data
        this.forms = res.data[0].childForms;
        this.reports = res.data[1].childForms;
        this.informations = res.data[2].childForms;
        this.adminPanel = res.data[3];
      })
    },
  },


  created() {
    this.getFormList();
  }
};
</script>

<style>

.m-1 {
  list-style: none;
  font-size: 13px;
  width: 100%;
  padding: 10px 2px 8px 2px;
}
.m-1 .p-2 {
  letter-spacing: 0.1px;
  color: #6F7496;
  font-weight: 700;
  margin-top: 10px;
}
/*.m-1 .p-2:hover {*/
/*  background-color: #F8F9FA;*/
/*}*/


router-link {

}
</style>
