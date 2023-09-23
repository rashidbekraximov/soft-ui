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
              MIQDORI
            </th>
            <th class="text-center">
              <router-link to="/produce/ready-product/add"><img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add"></router-link>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in remainders" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm mx-3 font-weight-bold mb-0">{{index+1}}</p>
            </td>
            <td class="text-center">
              <div class="d-flex">
                <div>
                  <img
                      src="@/assets/img/icons/sand.png"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                  />
                </div>
                <div class="my-auto">
                  <p class="text-sm font-weight-bold mb-0">{{t.productType.name.activeLanguage}}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{t.amount}}</p>
            </td>
            <td>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "ReadyProducts",
  components: {
  },
  data() {
    return {
      remainders:[],
    }
  },
  methods :{
    getRemainders() {
      this.$http.get("ready-products" + localStorage.getItem("lang")).then(res => {
        this.remainders = res.data
      })
    }
  },
  created() {
    this.getRemainders()
  }
};
</script>
