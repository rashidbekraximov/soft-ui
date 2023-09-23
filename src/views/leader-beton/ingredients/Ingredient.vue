<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-2">
      <h6>Tarkiblar</h6>
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
              Marka
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Miqdor
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Sement (kg)
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Klines (kg)
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Sheben (kg)
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Pesok (kg)
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Dobavka
            </th>
            <th class="text-center">
              <router-link to="/leader-beton/ingredient/add"><img src="@/assets/img/add.png"
                                                                  style="width: 30px; height: 30px" alt="Add">
              </router-link>
            </th>
            <th class="text-center"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in ingredients" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm mx-3 font-weight-bold">{{ index + 1 }}</p>
            </td>
            <td>
              <div class="my-auto">
                <p class="text-sm font-weight-bold">{{ t.mark }}</p>
              </div>
            </td>
            <td>
              <div class="my-auto mb-2">
                <p class="font-weight-bold  text-sm">{{ t.amount }}</p>
              </div>
            </td>
            <td>
              <div class="my-auto">
                <p class="text-sm font-weight-bold">{{ t.sement }}</p>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold">{{ t.klines }}</p>
            </td>
            <td>
              <p class="font-weight-bold text-sm">{{ t.sheben }}</p>
            </td>
            <td>
              <p class="font-weight-bold text-sm">{{ t.pesok }}</p>
            </td>
            <td>
              <p class="font-weight-bold text-sm">{{ t.dobavka }}</p>
            </td>
            <td class="text-center">
              <img
                  src="@/assets/img/icons/pen.png"
                  class="avatar avatar-sm rounded-circle me-2"
                  alt="spotify"
                  @click="edit(t.id)"
              />
            </td>
            <td class="text-center">
              <img
                  src="@/assets/img/delete1.png"
                  class="avatar avatar-sm rounded-circle me-2"
                  alt="spotify"
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

// import SoftBadge from "@/components/SoftBadge.vue";
import router from "../../../router";

export default {
  name: "Ingredient",
  components: {},
  data() {
    return {
      ingredients: [],
    }
  },
  methods: {
    getTechnicians() {
      this.$http.get("ingredients" + localStorage.getItem("lang")).then(res => {
        this.ingredients = res.data
      })
    },
    edit(id) {
      router.push({path: '/leader-beton/ingredient/' + id});
    }
  },
  created() {
    this.getTechnicians()
  }
};
</script>
