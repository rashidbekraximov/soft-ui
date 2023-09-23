<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-4">
      <h6>Buyurtmalar ro'yxati</h6>
    </div>

    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-center text-xxs font-weight-bold opacity-7">
              ID
            </th>
            <th class="text-uppercase text-secondary text-center text-xxs font-weight-bold opacity-7 ps-2">
              F.I.SH
            </th>
            <th class="text-uppercase text-secondary text-center text-xxs font-weight-bold opacity-7 ps-2">
              TELEFON RAQAMI
            </th>
            <th class="text-uppercase text-secondary text-center text-xxs font-weight-bold opacity-7 ps-2">
              SANA
            </th>
            <th class="text-uppercase text-secondary text-center  text-xxs font-weight-bold opacity-7 ps-2">
              MAHSULOT NOMI
            </th>
            <th class="text-uppercase text-secondary text-center text-xxs font-weight-bold opacity-7 ps-2">
              QIYMATI
            </th>
            <th class="text-uppercase text-secondary text-center  text-xxs font-weight-bold opacity-7 ps-2">
              MANZIL
            </th>
            <th class="text-uppercase text-secondary text-center  text-xxs font-weight-bold text-center opacity-7 ps-2">
              STATUS
            </th>
            <th class="text-center">
              <router-link to="/purchase/order/add"><img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add"></router-link>
            </th>
            <th class="text-center"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in orders" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm text-center font-weight-bold mb-0">{{index+1}}</p>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img :src="user" class="avatar avatar-sm rounded-circle me-2" alt="spotify" width="15" height="15"/>
                </div>
                <div class="my-auto">
                  <p class="text-sm text-center  font-weight-bold mb-0">{{t.client}}</p>
                </div>
              </div>
            </td>
            <td>
                  <h6 class="mb-0 font-weight-bold text-center   text-sm">{{t.phoneNumber}}</h6>
            </td>
            <td>
              <soft-badge color="info" variant="gradient" size="md">{{t.date}}</soft-badge>
            </td>
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{t.productType.name.activeLanguage}}  </p>
            </td>
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{t.value}}</p>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img :src="location" class="avatar avatar-sm rounded-circle me-2" alt="spotify" width="15" height="15"/>
                </div>
                <div class="my-auto">
                  <p class="text-sm text-center  font-weight-bold mb-0">{{t.location}}</p>
                </div>
              </div>
            </td>
            <td class="align-middle text-center text-sm">
              <soft-badge v-if="t.status === 'ACTIVE'" color="success" variant="gradient" size="sm">ACTIVE</soft-badge>
              <soft-badge v-else-if="t.status === 'PASSIVE'" color="warning" variant="gradient" size="sm">PASSIV</soft-badge>
              <soft-badge v-else color="danger" variant="gradient" size="sm">RAD ETILDI</soft-badge>
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
              <img v-if="t.status === 'ACTIVE'"
                  src="@/assets/img/delete1.png"
                  class="avatar avatar-sm rounded-circle me-2"
                  alt="spotify"
                  @click="deleteRow(t.id)"
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
import location from "@/assets/img/icons/map.png";
import user from "@/assets/img/icons/customer.png";

import router from "../../../router";
import Swal from "sweetalert2";
import {notification} from "ant-design-vue";

export default {
  name: "Order",
  components: {
    SoftBadge,
  },
  data() {
    return {
      location,
      user,
      orders:[],
    }
  },
  methods :{
    getList() {
      this.$http.get("orders" + localStorage.getItem("lang")).then(res => {
        this.orders = res.data
      })
    },
    edit(id){
      router.push({path: `/purchase/order/${id}`});
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
          this.$http.get("order/delete/" + id).then(res => {
            console.log(res.data.status)
            if (res.status === 200){
              notification.success({
                message: `Muvaffaqiyatli o'chirildi !`,
                duration: 2
              });
              setTimeout(() => {
                router.go(0)
              }, "1300");
            }else{
              notification.error({
                message: `Xatolik yuzaga keldi !`,
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
    this.getList()
  }
};
</script>
