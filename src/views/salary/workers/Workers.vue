<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-2">
      <h6>Ishchilar ro'yxati</h6>
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
              LAVOZIM
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              1 SOATLIK ISH HAQI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              YO'NALISH
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
              STATUS
            </th>
            <th class="text-center">
              <router-link to="/references/worker/add"><img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add"></router-link>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in workers" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm mx-3 font-weight-bold mb-0">{{ index + 1 }}</p>
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
                  <p class="text-sm font-weight-bold mb-0">{{ t.name }}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                <div class="my-auto">
                  <h6 class="mb-0 font-weight-bold  text-sm">{{ t.position.name.activeLanguage }}</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{ t.perHourWageAmount }} so'm</p>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{ t.direction.name.activeLanguage }}</p>
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
  name: "WorkerPositions",
  components: {
    SoftBadge,
  },
  data() {
    return {
      workers: [],
    }
  },
  methods: {
    getWorkers() {
      this.$http.get("/workers" + localStorage.getItem("lang")).then(res => {
        this.workers = res.data
      })
    },
    edit(id) {
      router.push({path: 'worker/' + id });
    }
  },
  created() {
    this.getWorkers();
  }
};
</script>
