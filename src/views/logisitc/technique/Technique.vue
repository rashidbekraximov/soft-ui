<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-2">
      <h6>Texnikalar ro'yxati</h6>
    </div>

    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              ID
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              F.I.SH
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              TEXNIKA TURI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Auto raqami
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              1 KM XARAJATI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              YO'NALISH
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
              STATUS
            </th>
            <th class="text-center">
              <router-link to="/references/technique/add"><img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add"></router-link>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in techniques" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm mx-3 font-weight-bold mb-0">{{index+1}}</p>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img
                      src="@/assets/img/icons/customer.png"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                  />
                </div>
                <div class="my-auto">
                  <p class="text-sm font-weight-bold mb-0">{{t.employee.name}}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img
                      src="@/assets/img/icons/truck.png"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                  />
                </div>
                <div class="my-auto">
                  <h6 class="mb-0 font-weight-bold  text-sm">{{t.techniqueType.name.activeLanguage}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="my-auto">
                <p class="text-sm font-weight-bold mb-0">{{t.autoNumber}}</p>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{t.perKmCostAmount}} so'm</p>
            </td>
            <td>
              <p class="mb-0 font-weight-bold  text-sm">{{t.direction.name.activeLanguage}}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <soft-badge v-if="t.status === 'ACTIVE'" color="success" variant="gradient" size="sm">ACTIVE</soft-badge>
              <soft-badge v-else color="danger" variant="gradient" size="sm">PASSIV</soft-badge>
            </td>
            <td class="text-center">
              <img
                  src="@/assets/img/icons/pen.png"
                  class="avatar avatar-sm rounded-circle me-2"
                  alt="spotify"
                  @click="edit(t.id)"
              />
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
import router from "../../../router";

export default {
  name: "Technique",
  components: {
    SoftBadge,
  },
  data() {
    return {
      techniques:[],
    }
  },
  methods :{
    getTechnicians() {
      this.$http.get("technicians" + localStorage.getItem("lang")).then(res => {
        this.techniques = res.data
      })
    },
    edit(id){
      router.push({path: '/references/technique/' + id });
    }
  },
  created() {
    this.getTechnicians()
  }
};
</script>
