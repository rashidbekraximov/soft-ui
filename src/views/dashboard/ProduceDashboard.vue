<template>
  <div class="py-4 container-fluid overflow-hidden position-relative border-radius-lg bg-cover h-100"
  style="background-image: url('../../assets/img/curved-images/curved0.jpg');" :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/background/bg-2.png') +
                      ')',
                  }">
    <div class="row">
      <div class="col-md-3 mb-4" v-for="(a,index) in allData" :id="index" v-bind:key="index">
        <mini-statistics-card
            :title="a.costName"
            :id="a.costId"
            :value="a.amount"
            :percentage="{
            value: '+505%',
            color: 'text-success',
          }"
            :icon="{
            component: 'ni ni-money-coins',
            background: iconBackground,
          }"
            direction-reverse
        />
      </div>
      <!--      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">-->
      <!--        <mini-statistics-card-->
      <!--            title="Today's Users"-->
      <!--            value="2,300"-->
      <!--            :percentage="{-->
      <!--            value: '+3%',-->
      <!--            color: 'text-success',-->
      <!--          }"-->
      <!--            :icon="{-->
      <!--            component: ' ni ni-world',-->
      <!--            background: iconBackground,-->
      <!--          }"-->
      <!--            direction-reverse-->
      <!--        />-->
      <!--      </div>-->
      <!--      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">-->
      <!--        <mini-statistics-card-->
      <!--            title="New Clients"-->
      <!--            value="+3,462"-->
      <!--            :percentage="{-->
      <!--            value: '-2%',-->
      <!--            color: 'text-danger',-->
      <!--          }"-->
      <!--            :icon="{-->
      <!--            component: 'ni ni-paper-diploma',-->
      <!--            background: iconBackground,-->
      <!--          }"-->
      <!--            direction-reverse-->
      <!--        />-->
      <!--      </div>-->
      <!--      <div class="col-xl-3 col-sm-6 mb-xl-0">-->
      <!--        <mini-statistics-card-->
      <!--            title="Sales"-->
      <!--            value="$103,430"-->
      <!--            :percentage="{-->
      <!--            value: '+5%',-->
      <!--            color: 'text-success',-->
      <!--          }"-->
      <!--            :icon="{-->
      <!--            component: 'ni ni-cart',-->
      <!--            background: iconBackground,-->
      <!--          }"-->
      <!--            direction-reverse-->
      <!--        />-->
      <!--      </div>-->
    </div>
<!--    <div class="row my-4">-->
<!--      <div class="col-md-12 mb-md-0 mb-4">-->
<!--        <div class="card">-->
<!--          <div class="card-header pb-0">-->
<!--            <div class="row">-->
<!--              <div class="col-lg-6 col-7">-->
<!--                <h6>Projects</h6>-->
<!--                <p class="text-sm mb-0">-->
<!--                  <i class="fa fa-check text-info" aria-hidden="true"></i>-->
<!--                  <span class="font-weight-bold ms-1">30 done</span> this month-->
<!--                </p>-->
<!--              </div>-->
<!--              <div class="col-lg-6 col-5 my-auto text-end">-->
<!--                <div class="dropdown float-lg-end pe-4">-->
<!--                  <a-->
<!--                      class="cursor-pointer"-->
<!--                      id="dropdownTable"-->
<!--                      data-bs-toggle="dropdown"-->
<!--                      aria-expanded="false"-->
<!--                  >-->
<!--                    <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i>-->
<!--                  </a>-->
<!--                  <ul-->
<!--                      class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"-->
<!--                      aria-labelledby="dropdownTable"-->
<!--                  >-->
<!--                    <li>-->
<!--                      <a class="dropdown-item border-radius-md" href="javascript:;"-->
<!--                      >Action</a-->
<!--                      >-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <a class="dropdown-item border-radius-md" href="javascript:;"-->
<!--                      >Another action</a-->
<!--                      >-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <a class="dropdown-item border-radius-md" href="javascript:;"-->
<!--                      >Something else here</a-->
<!--                      >-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card-body px-0 pb-2">-->
<!--            <div class="table-responsive">-->
<!--              <table class="table align-items-center mb-0">-->
<!--                <thead>-->
<!--                <tr>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    ID-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">-->
<!--                    ISM va Familya-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    Texnika turi-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    Gas-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    Ballon-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    Moy-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    Amortizatsiya-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    Ish haqi-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    UMUMIY XARAJAT-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    DAROMAD-->
<!--                  </th>-->
<!--                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">-->
<!--                    FOYDA-->
<!--                  </th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr v-for="(t,index) in allTableData" :id="index" v-bind:key="index">-->
<!--                  <td>-->
<!--                    <div class="text-center">-->
<!--                      {{index+1}}-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>-->
<!--                    <div class="text-center">-->
<!--                      {{t.name}}-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>-->
<!--                    <div class="text-center">-->
<!--                      {{t.technique}}-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="text-center" v-for="(d,index) in t.dashboardLogistics" :id="index" v-bind:key="index">-->
<!--                    {{d.amount}}-->
<!--                  </td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    </div>
</template>
<script>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";

import {
  faHandPointer,
  faUsers,
  faCreditCard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "ProduceDashboard",
  data() {
    return {
      allData: [],
      allTableData: [],
      iconBackground: "bg-gradient-success",
      faCreditCard,
      faScrewdriverWrench,
      faUsers,
      faHandPointer,
    };
  },
  components: {
    MiniStatisticsCard,
  },
  methods: {
    getLogisticDashboard() {
      this.$http.get("cost/dashboard").then(res => {
        this.allData = res.data
        console.log(this.allData)
      })
    },
    // getLogisticTableDashboard() {
    //   this.$http.get("logistic/table").then(res => {
    //     this.allTableData = res.data
    //     console.log(this.allTableData)
    //   })
    // },
    // getName(id) {
    //   if (id === 8) {
    //     return 'Sof foyda';
    //   } else if (id === 7) {
    //     return 'Daromad';
    //   } else if (id === 6) {
    //     return 'Umumiy xarajat';
    //   } else if (id === 5) {
    //     return 'Oylik';
    //   } else if (id === 4) {
    //     return 'Amortizatsiya';
    //   } else if (id === 3) {
    //     return 'Moy';
    //   } else if (id === 2) {
    //     return 'Ballon';
    //   } else if (id === 1) {
    //     return 'Gas';
    //   } else {
    //     return 'Nomsiz'
    //   }
    // }
  },
  created() {
    this.getLogisticDashboard();
    // this.getLogisticTableDashboard();
  }
};
</script>
