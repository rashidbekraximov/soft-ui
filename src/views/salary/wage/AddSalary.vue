<template>
  <div class="card mb-4 overflow-hidden position-relative border-radius-lg bg-cover h-100"
       :style="{backgroundImage:'url(' + require('@/assets/img/background/bg-2.png') + ')', }">
    <div class="card-header pb-0">
      <h6>Ish haqi</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="d-none">
          <input
              type="number"
              v-model="salaryDao.documentId"
          />
        </div>
        <div class="col-md-3">
          <label>Sana</label>
          <input
              class="form-control"
              type="date"
              placeholder="Kiriting"
              v-model="salaryDao.date"
              required
          />
        </div>
        <div class="col-md-3 mb-3">
          <label class="mb-2">Yo'nalish</label>
          <select class="form-select" @change="selectDirection(salaryDao.directionId)" v-model="salaryDao.directionId">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(direction,index) in directions" v-bind:key="index" :value="index">{{ direction }}</option>
          </select>
        </div>
      </div>
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder  text-center opacity-20"
            >
              Ishchi ismi
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Lavozimi
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              1 soatlik ish haqi
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Ishlagan soati
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              1 kunlik ish haqi qiymati
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(tableData,index) in salaryDao.forms" :id="index" v-bind:key="index">
            <td>
              <select class="form-select" v-model="tableData.employeeId">
                <option v-for="(e,index) in employee" v-bind:key="index" :value="index" disabled>{{ e }}</option>
              </select>
            </td>
            <td>
              <select class="form-select" v-model="tableData.positionId">
                <option v-for="(p,index) in positions" v-bind:key="index" :value="index" disabled>{{ p }}</option>
              </select>
            </td>
            <td>
              <input
                  class="form-control"
                  style="width: 200px"
                  type="number"
                  v-model="tableData.perHourWageAmount"
                  readonly
              />
            </td>
            <td>
              <input
                  class="form-control"
                  style="width: 200px"
                  type="number"
                  placeholder="Kiriting"
                  v-model="tableData.allHour"
                  @input="multiply(index,tableData.perHourWageAmount,tableData.allHour)"
                  required
              />
            </td>
            <td>
              <input
                  class="form-control"
                  type="number"
                  style="width: 200px"
                  placeholder="Kiriting"
                  v-model="tableData.allAmount"
                  readonly
              />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-2">
          <soft-button
              class="my-4 mb-2"
              variant="gradient"
              color="success"
              @click="save"
              full-width
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
import router from "../../../router";
import {notification} from "ant-design-vue";
// import {notification} from "ant-design-vue";

export default {
  name: "AddSalary",
  components: {
    SoftButton,
  },
  data() {
    return {
      salaryDao:{
        documentId: 0,
        date: '',
        directionId: 0,
        forms:[{employeeId: 0,positionId: 0 , perHourWageAmount: 0,allHour:0,allAmount:0}]
      },
      positions:[],
      directions:[],
      employee:[]
    }
  },
  methods: {
    multiply(index,perHourWageAmount,allHour){
      this.salaryDao.forms[index].allAmount = perHourWageAmount * allHour;
    },
    save(){
      this.$http.post("salary/add" + localStorage.getItem("lang"),this.salaryDao).then(res => {
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
    getEmployee() {
      this.$http.get("worker/select" + localStorage.getItem('lang')).then(res => {
        this.employee = res.data
      })
    },
    getDirections() {
      this.$http.get("references/def/direction" + localStorage.getItem('lang')).then(res => {
        this.directions = res.data
      })
    },
    getPositions() {
      this.$http.get("references/def/position" + localStorage.getItem('lang')).then(res => {
        this.positions = res.data
      })
    },
    selectDirection(id){
      this.$http.get("salary/table/" + id + localStorage.getItem('lang')).then(res => {
        this.salaryDao.forms = res.data
      })
    },
    cancel(){
      router.go(-1);
    }
  },
  created() {
    this.getDirections();
    this.getPositions();
    this.getEmployee();
  }
}
</script>

<style scoped>

</style>