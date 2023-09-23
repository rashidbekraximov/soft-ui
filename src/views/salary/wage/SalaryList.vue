<template>
  <div class="card m-4">
    <div class="card-header pb-0">
<!--      <h6>Ish haqi</h6>-->
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Id
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              SANA
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              YO'NALISH
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
              SONI
            </th>
            <th class="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7 ps-2">
              <router-link to="/forms/salary/add"><img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add"></router-link>
            </th >
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(d,index) in documents" :id="index" v-bind:key="index">
            <td>
              <div class="d-flex px-2">
                <div class="my-auto">
                  <h6 class="mb-0 text-sm">{{index + 1}}</h6>
                </div>
              </div>
            </td>
            <td>
              <soft-badge color="success" variant="gradient" size="sm"> {{d.date}}</soft-badge>
            </td>
            <td>
              <span class="text-xs font-weight-bold">{{d.direction.name.activeLanguage}}</span>
            </td>
            <td class="align-middle text-center">
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-2 text-xs font-weight-bold">{{d.numbers}}</span>
              </div>
            </td>
            <td class="text-center">
              <img
                  src="@/assets/img/icons/pen.png"
                  class="avatar avatar-sm rounded-circle me-2"
                  alt="spotify"
              />
            </td>
            <td class="text-center">
              <img src="@/assets/img/delete1.png" style="width: 40px; height: 40px" alt="Add">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SoftBadge from "@/components/SoftBadge.vue";

export default {
  name: "SalaryList",
  components: {
    SoftBadge
  },
  data(){
    return {
      documents:[]
    }
  },
  methods: {
    getSalaryList() {
      this.$http.get("salary/list" + localStorage.getItem("lang")).then(res => {
        this.documents = res.data
      })
    },
  },
  created() {
    this.getSalaryList();
  }
};
</script>
