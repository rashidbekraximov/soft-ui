<template>
  <div class="card m-4">
    <div class="card-header pb-0 col-md-2">
      <h6></h6>
    </div>

    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
              ID
            </th>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">
              SANA
            </th>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">
              XARAJAT TURI
            </th>
            <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">
              QIYMATI
            </th>
            <th class="text-center">
              <router-link to="/produce/cost/add"><img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add"></router-link>
            </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in costs" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm mx-3 font-weight-bold mb-0">{{index+1}}</p>
            </td>
            <td>
              <soft-badge color="success" variant="gradient">{{t.date}}</soft-badge>
            </td>
            <td>
              <div class="d-flex">
                <div class="my-auto">
                  <h6 class="mb-0 font-weight-bold  text-sm">{{t.costType.name.activeLanguage}}</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">{{t.amount}} so'm</p>
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

import router from "../../../router";
import SoftBadge from "@/components/SoftBadge.vue";
import Swal from "sweetalert2";
import {notification} from "ant-design-vue";

export default {
  name: "Cost",
  components: {
    SoftBadge
  },
  data() {
    return {
      costs:[],
    }
  },
  methods :{
    getCosts() {
      this.$http.get("costs" + localStorage.getItem("lang")).then(res => {
        this.costs = res.data
      })
    },
    edit(id){
      router.push({path: '/produce/cost/' + id });
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
          this.$http.get("cost/delete/" + id).then(res => {
            console.log(res.status)
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
    this.getCosts()
  }
};
</script>
