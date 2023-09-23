<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Ishchi qo'shish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="worker.id"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Ism va familiya</label>
          <input
              class="form-control"
              type="text"
              v-model="worker.name"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Lavozim nomi</label>
          <select class="form-select" v-model="worker.positionId">
            <option selected disabled>Tanlang...</option>
            <option v-for="(position,index) in positions" v-bind:key="index" :value="index">{{position}}</option>
          </select>
        </div>
        <div class="col-md-4">
          <label>1 soatlik ish haqi qiymati</label>
          <input
              class="form-control"
              type="number"
              v-model="worker.perHourWageAmount"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="table-responsive col-md-6 mb-3">
          <table class="table align-items-center justify-content-center mb-0">
            <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2">
                Yo'nalish
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2">
                Foiz %
              </th>
              <th class="text-center">
                <img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add" @click="addRow">
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(percentage,index) in worker.percentages" :id="index" v-bind:key="index">
              <td class="text-center">
                <select class="form-select" v-model="percentage.directionId">
                  <option selected disabled value="0">Tanlang...</option>
                  <option v-for="(direction,index) in directions" v-bind:key="index" :value="index">{{direction}}</option>
                </select>
              </td>
              <td class="text-center">
                <input
                    class="form-control"
                    type="number"
                    placeholder="Kiriting"
                    v-model="percentage.percentage"
                    required
                />
              </td>
              <td class="text-center">
                <img src="@/assets/img/delete1.png" style="width: 40px; height: 40px" alt="Add" @click="removeRow(index)">
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-2">

        </div>
        <div class="col-md-4">
          <label class="mb-2">Holati</label>
          <select class="form-select" v-model="worker.status">
            <option selected disabled>Tanlang...</option>
            <option value="ACTIVE">Faol</option>
            <option value="PASSIVE">Passiv</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-2">
          <soft-button
              class="my-4 mb-2"
              variant="gradient"
              color="success"
              full-width
              @click="save"
          >Saqlash
          </soft-button>
        </div>
        <div class="col-md-2">
          <soft-button
              class="my-4 mb-2"
              variant="gradient"
              color="danger"
              full-width
              @click="cancel"
          >Bekor qilish
          </soft-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoftButton from "@/components/SoftButton.vue";
// import {notification} from "ant-design-vue";
import router from "../../../router";
import {notification} from "ant-design-vue";

export default {
  name: "AddWorker",
  components: {
    SoftButton,
  },
  data() {
    return {
      worker:{
        id: 0,
        name: '',
        positionId: 0,
        perHourWageAmount:0,
        status: 'ACTIVE',
        percentages:[]
      },
      positions:[],
      directions:[]
    }
  },
  methods: {
    addRow() {
      this.worker.percentages.push({name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: ''})
      notification.success({
        message: `Yangi qator qo'shildi !`,
        duration: 1
      });
    },
    removeRow(index) {
      this.worker.percentages.splice(index, 1);
      notification.warn({
        message: index + 1 + `-qator o'chirildi !`,
        duration: 1
      });
    },
    save(){
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.worker.id = parseInt(num);
      }
      this.$http.post("worker/save" + localStorage.getItem("lang"),this.worker).then(res => {
        if (res.status === 201) {
          notification.success({
            message: res.data.message,
            duration: 2
          });
          router.go(-1);
        } else {
          notification.error({
            message: `Xato yuzaga keldi !`,
            duration: 1
          });
        }
      }).catch((reason) => {
        notification.error({
          message: reason.response.data.message,
          duration: 2
        });
      })
    },
    getPositions() {
      this.$http.get("references/def/position" + localStorage.getItem('lang')).then(res => {
        this.positions = res.data
      })
    },
    getDirections() {
      this.$http.get("references/def/direction" + localStorage.getItem('lang')).then(res => {
        this.directions = res.data
      })
    },
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.$http.get("worker/" + parseInt(num)).then(res => {
          this.worker = res.data
          this.worker.positionId = this.worker.position.id
        })
      }
    },
    cancel(){
      router.go(-1);
    }
  },
  created() {
    this.getPositions()
    this.getDirections()
    this.getById()
  }
}
</script>

<style scoped>

</style>