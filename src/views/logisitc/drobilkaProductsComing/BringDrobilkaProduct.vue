<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-4">
      <h6>Olib kelingan mahsulotlar</h6>
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
              TEXNIKA TURI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              O'LCHOV BIRLIKI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              MIQDORI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              KORXONA
            </th>
            <th class="text-center">
              <router-link to="/logistic/bringingProduct/add"><img src="@/assets/img/add.png"
                                                                   style="width: 30px; height: 30px" alt="Add">
              </router-link>
            </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in bringDrobilkaProduct" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm mx-3 font-weight-bold mb-0">{{ index + 1 }}</p>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img :src="sand" class="avatar avatar-sm rounded-circle me-2" alt="spotify" width="15" height="15"/>
                </div>
                <div class="my-auto">
                  <p class="text-sm font-weight-bold mb-0">{{ t.productType.name.activeLanguage }}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img :src="truck" class="avatar avatar-sm rounded-circle me-2" alt="spotify" width="15" height="15"/>
                </div>
                <div class="my-auto">
                  <p class="text-sm font-weight-bold mb-0">{{ t.technician.techniqueType.name.activeLanguage }}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                <div class="my-auto">
                  <soft-badge color="info" variant="gradient" size="sm"> {{ t.unit.name.activeLanguage }}</soft-badge>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{ t.amount }}</p>
            </td>
            <td>
              <div class="d-flex">
                <div class="my-auto">
                  <soft-badge color="info" variant="gradient" size="sm"> {{ t.mchj}}</soft-badge>
                </div>
              </div>
            </td>
            <td class="text-center">
              <img
                  src="@/assets/img/icons/pen.png"
                  class="avatar avatar-sm rounded-circle me-2"
                  alt="spotify"
                  @click="edit(t.id)"
              />
            </td>
            <td class="text-center" @click="deleteRow(t.id)">
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

import router from "../../../router";
import Swal from "sweetalert2";
import {notification} from "ant-design-vue";
import sand from "@/assets/img/icons/sand.png";
import truck from "@/assets/img/icons/truck.png";
import SoftBadge from "@/components/SoftBadge.vue";


export default {
  name: "BringDrobilkaProduct",
  components: {
    SoftBadge
  },
  data() {
    return {
      sand,
      truck,
      bringDrobilkaProduct: [],
    }
  },
  methods: {
    getRemainders() {
      this.$http.get("bring-drobilka-products" + localStorage.getItem("lang")).then(res => {
        this.bringDrobilkaProduct = res.data
      })
    },
    edit(id) {
      router.push({path: '/logistic/bringingProduct/' + id});
    },
    deleteRow(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.get("bring-drobilka-product/delete/" + id).then(res => {
            if (res.status === 200){
              notification.success({
                message: `Muvaffaqiyatli o'chirildi !`,
                duration: 2
              });
              setTimeout(() => {
                router.go(0)
              }, "1300");
            }else {
              notification.error({
                message: `Muvaffaqiyatli o'chirildi !`,
                duration: 2
              });
              setTimeout(() => {
                router.go(0)
              }, "1300");
            }
          })
        }
      })
    }
  },
  created() {
    this.getRemainders()
  }
};
</script>
