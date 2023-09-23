<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-2">
      <h6>Mahsulot narxlari</h6>
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
              QIYMATI
            </th>
            <th class="text-center">
              <router-link to="/references/product-price/add"><img src="@/assets/img/add.png"
                                                                   style="width: 30px; height: 30px" alt="Add">
              </router-link>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in prices" :id="index" v-bind:key="index">
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
              <div class="my-auto">
                <soft-badge color="info" variant="gradient" size="sm">{{ t.unit.name.activeLanguage }}</soft-badge>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{ t.price }} so'm</p>
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

import tax from "@/assets/img/icons/sand.png";
import router from "../../../router";
import SoftBadge from "@/components/SoftBadge.vue";

export default {
  name: "Price",
  components: {
    SoftBadge,
  },
  data() {
    return {
      prices: [],
      tax,
    }
  },
  methods: {
    getPrices() {
      this.$http.get("prices" + localStorage.getItem("lang")).then(res => {
        this.prices = res.data
      })
    },
    edit(id) {
      router.push({path: '/references/product-price/' + id});
    }
  },
  created() {
    this.getPrices()
  }
};
</script>
