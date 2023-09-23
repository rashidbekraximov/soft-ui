<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-2">
      <h6>Mahsulot qoldig'i</h6>
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
              MAHSULOT NOMI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              O'LCHOV BIRLIKI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              MIQDORI
            </th>
            <th class="text-center">
              <router-link to="/purchase/product-remainder/add"><img src="@/assets/img/add.png"
                                                                       style="width: 30px; height: 30px" alt="Add">
              </router-link>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in remainders" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm mx-3 font-weight-bold mb-0">{{ index + 1 }}</p>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img
                      :src="tax"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                  />
                </div>
                <div class="my-auto">
                  <h6 class="mb-0 font-weight-bold  text-sm">{{ t.productType.name.activeLanguage }}</h6>
                </div>
              </div>
            </td>
            <td>
              <soft-badge color="info" variant="gradient" size="sm">{{ t.unit.name.activeLanguage }}</soft-badge>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{ t.amount }}</p>
            </td>
            <td class="text-center">
<!--              <img-->
<!--                  src="@/assets/img/icons/pen.png"-->
<!--                  class="avatar avatar-sm rounded-circle me-2"-->
<!--                  alt="spotify"-->
<!--                  @click="edit(t.id)"-->
<!--              />-->
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import tax from "@/assets/img/icons/sand.png";
import SoftBadge from "@/components/SoftBadge.vue";
import router from "../../../router";

export default {
  name: "ProductsRemainder",
  components: {
    SoftBadge,
  },
  data() {
    return {
      remainders: [],
      tax,
    }
  },
  methods: {
    getRemainders() {
      this.$http.get("remainders/CHSM" + localStorage.getItem("lang")).then(res => {
        this.remainders = res.data
        console.log(this.remainders)
      })
    },
    edit(id) {
      router.push({path: '/references/product-remainder/' + id});
    }
  },
  created() {
    this.getRemainders()
  }
};
</script>
