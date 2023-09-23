<template>
  <div
      class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
      id="sidenav-collapse-main"
      style="overflow: hidden;"
  >
    <ul class="navbar-nav">
<!--      <li class="nav-item">-->
<!--        <sidenav-collapse nav-text="Dashboard" :to="{ name: 'Dashboard' }">-->
<!--          <template #icon>-->
<!--            <office/>-->
<!--          </template>-->
<!--        </sidenav-collapse>-->
<!--      </li>-->
      <li class="nav-item" v-if="purchases.length > 0">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true"
                          aria-controls="collapseExample" nav-text="Sotish" :to="{ name: 'Billing' }">
          <template #icon>
            <shop/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample" @mouseleave="mouseLeaveArea('collapseExample')">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(purchase,index) in purchases" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="purchase.hrefAddress">{{index+1}}.{{ purchase.name.activeLanguage }}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item" v-if="logistics.length > 0">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="true"
                          aria-controls="collapseExample2"  navText="Logistika" :to="{ name: 'Tables' }">
          <template #icon>
            <switches />
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample2" @mouseleave="mouseLeaveArea('collapseExample2')">
          <div  style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(logistic,index) in logistics" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="logistic.hrefAddress">{{index+1}}.{{ logistic.name.activeLanguage }}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item" v-if="producusers.length > 0">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="true"
                          aria-controls="collapseExample3"  navText="Ishlab chiqarish" :to="{ name: 'Tables' }">
          <template #icon>
            <basket/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample3" @mouseleave="mouseLeaveArea('collapseExample3')">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(producuser,index) in producusers" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="producuser.hrefAddress">{{index+1}}.{{ producuser.name.activeLanguage}}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item" v-if="leaderBetons.length > 0">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="true"
                          aria-controls="collapseExample4"  navText="Leader Beton" :to="{ name: 'Tables' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample4" @mouseleave="mouseLeaveArea('collapseExample4')">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(leaderBeton,index) in leaderBetons" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="leaderBeton.hrefAddress">{{index+1}}.{{ leaderBeton.name.activeLanguage}}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item" v-if="nasos.length > 0">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="true"
                          aria-controls="collapseExample5"  navText="Nasos" :to="{ name: 'Tables' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample5" @mouseleave="mouseLeaveArea('collapseExample5')">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(n,index) in nasos" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="n.hrefAddress">{{index+1}}.{{ n.name.activeLanguage}}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item" v-if="wages.length > 0">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="true"
                          aria-controls="collapseExample6"  navText="Ish haqi" :to="{ name: 'Tables' }">
          <template #icon>
            <document/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample6" @mouseleave="mouseLeaveArea('collapseExample6')">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(wage,index) in wages" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="wage.hrefAddress">{{index + 1}}.{{ wage.name.activeLanguage}}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item" v-if="allInformations.length > 0">
        <sidenav-collapse data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="true"
                          aria-controls="collapseExample7"  navText="Umumiy ma'lumot" :to="{ name: 'Tables' }">
          <template #icon>
            <document/>
          </template>
        </sidenav-collapse>
        <div class="collapse mt-1 mx-4" id="collapseExample7" @mouseleave="mouseLeaveArea('collapseExample7')">
          <div style="background-color:#FFFFFF; border-radius: 10px;">
            <div v-for="(all,index) in allInformations" v-bind:key="index" class="m-1">
              <router-link class="p-2" :to="all.hrefAddress">{{index + 1}}.{{ all.name.activeLanguage}}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item" v-if="allForms.length > 7">
        <sidenav-collapse navText="Admin Panel" :to="{ name: adminPanel == null ? '' : 'Profile' }">
          <template #icon>
            <setting-outlined/>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import Shop from "../../components/Icon/Shop.vue";
import Office from "../../components/Icon/Office.vue";
// import CreditCard from "../../components/Icon/CreditCard.vue";
// import CustomerSupport from "../../components/Icon/CustomerSupport.vue";
import Document from "../../components/Icon/Document.vue";
import SettingOutlined from "../../components/Icon/Settings.vue";
// import Lights from "../../components/Icon/Lights";
import Switches from "../../components/Icon/Switches";
import Basket from "../../components/Icon/Basket";
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
      allInformations: [],
      purchases: [],
      logistics: [],
      leaderBetons: [],
      nasos: [],
      wages: [],
      producusers: [],
      adminPanel:{}
    };
  },
  components: {
    Switches,
    // Lights,
    // MailOutlined,
    // AppstoreOutlined,
    SettingOutlined,
    SidenavCollapse,
    Shop,
    Office,
    Basket,
    // CustomerSupport,
    Document,
    // Spaceship,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },

    mouseLeaveArea(id){
        const test = document.getElementById(id);
        test.className = test.className.substring(1,19);
    },
    getFormList() {
      if (localStorage.getItem("lang") !== null){
        this.$http.get("menu-system" + localStorage.getItem("lang")).then(res => {
          console.log(res.data)
          if (res.status === 200) {
            this.allForms = res.data
            console.log(res.data)
            this.purchases = res.data[0].childForms;
            this.logistics = res.data[1].childForms;
            this.producusers = res.data[2].childForms;
            this.leaderBetons = res.data[3].childForms;
            this.nasos = res.data[4].childForms;
            this.wages = res.data[5].childForms;
            this.allInformations = res.data[6].childForms;
            this.adminPanel = res.data[7];
            // location.reload()
          }
        })
      }
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
</style>
