<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Nasos qo'shish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="technician.id"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Ism va familiya</label>
          <select class="form-select" v-model="technician.employeeId">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(w,index) in employee" v-bind:key="index" :value="index">{{ w }}</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Texnika turi</label>
          <select class="form-select" v-model="technician.techniqueTypeId">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(techniqueType,index) in techniqueTypes" v-bind:key="index" :value="index">{{
                techniqueType
              }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label>Avto raqami</label>
          <input
              class="form-control"
              type="text"
              v-model="technician.autoNumber"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="row mb-3">
          <div class="col-md-4 mb-3">
            <label>Gaz narxi</label>
            <input
                class="form-control"
                type="number"
                v-model="technician.gasPrice"
                placeholder="Kiriting"
                @input="gasCalc()"
                required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label>1 km ga gaz xarajati </label>
            <input
                class="form-control"
                type="number"
                v-model="technician.perKmGasCost"
                readonly
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-4 mb-3">
            <label>Ballon donasi</label>
            <input
                class="form-control"
                type="number"
                v-model="technician.ballon"
                placeholder="Kiriting"
                @input="ballonCalc"
                required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label>Ballon qiymati </label>
            <input
                class="form-control"
                type="number"
                v-model="technician.ballonAmount"
                placeholder="Kiriting"
                @input="ballonCalc"
                required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label>1 km ga ballon xarajati </label>
            <input
                class="form-control"
                type="number"
                v-model="technician.perKmBallonCost"
                readonly
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-4 mb-3">
            <label>Moy narxi</label>
            <input
                class="form-control"
                type="number"
                v-model="technician.oilPrice"
                placeholder="Kiriting"
                @input="oilCalc"
                required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label>1 km ga moy xarajati </label>
            <input
                class="form-control"
                type="number"
                v-model="technician.perKmOilCost"
                readonly
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-4 mb-3">
            <label>Amortizatsiya</label>
            <input
                class="form-control"
                type="number"
                v-model="technician.amortization"
                placeholder="Kiriting"
                @input="amortizationCalc()"
                required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label>1 km ga amortizatsiya</label>
            <input
                class="form-control"
                type="number"
                v-model="technician.perKmAmortization"
                readonly
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-4 mb-3">
            <label>Umumiy 1 km ga xarajat</label>
            <input
                class="form-control"
                type="number"
                v-model="technician.perKmCostAmount"
                placeholder="Kiriting"
                required
            />
          </div>
          <div class="col-md-4">
            <label class="mb-2">Yo'nalish</label>
            <select class="form-select" v-model="technician.directionId">
              <option selected disabled value="0">Tanlang...</option>
              <option v-for="(direction,index) in directions" v-bind:key="index" :value="index">{{ direction }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="mb-2">Holati</label>
            <select class="form-select" v-model="technician.status">
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
  </div>
</template>

<script>
import SoftButton from "@/components/SoftButton.vue";
import {notification} from "ant-design-vue";
import router from "../../../router";

export default {
  name: "AddNasos",
  components: {
    SoftButton,
  },
  data() {
    return {
      technician: {
        id: 0,
        employeeId: 0,
        techniqueTypeId: 0,
        gasPrice: 0,
        perKmGasCost: 0,
        ballon: 0,
        ballonAmount: 0,
        perKmBallonCost: 0,
        oilPrice: 0,
        perKmOilCost: 0,
        amortization: 0,
        perKmAmortization: 0,
        autoNumber: '',
        perKmCostAmount: 0,
        directionId: 0,
        status: 'ACTIVE'
      },
      positions: [],
      directions: [],
      employee: [],
      techniqueTypes: []
    }
  },
  methods: {
    gasCalc(){
      this.technician.perKmGasCost = this.technician.gasPrice * 0.753;
      this.allPerKmAmountCalc();
    },
    ballonCalc(){
      this.technician.perKmBallonCost = Math.round(this.technician.ballon * this.technician.ballonAmount / 70000 * 100)/100;
      this.allPerKmAmountCalc();
    },
    oilCalc(){
      this.technician.perKmOilCost = Math.round(this.technician.oilPrice * 40 / 15000 * 100)/100;
      this.allPerKmAmountCalc();
    },
    amortizationCalc(){
      this.technician.perKmAmortization = Math.round(this.technician.amortization / 330 * 100)/100;
      this.allPerKmAmountCalc();
    },
    allPerKmAmountCalc(){
      this.technician.perKmCostAmount = Math.round((this.technician.perKmGasCost + this.technician.perKmBallonCost + this.technician.perKmOilCost + this.technician.perKmAmortization)*100)/100;
    },
    save() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))) {
        this.technician.id = parseInt(num);
      }
      this.$http.post("technician/save" + localStorage.getItem("lang"), this.technician).then(res => {
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
    getTechniqueTypes() {
      this.$http.get("references/def/technique_type" + localStorage.getItem('lang')).then(res => {
        this.techniqueTypes = res.data
      })
    },
    getDirections() {
      this.$http.get("references/def/direction" + localStorage.getItem('lang')).then(res => {
        this.directions = res.data
      })
    },
    getEmployee() {
      this.$http.get("worker/select" + localStorage.getItem('lang')).then(res => {
        this.employee = res.data
      })
    },
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))) {
        this.$http.get("technician/" + parseInt(num)).then(res => {
          this.technician = res.data
          this.technician.directionId = this.technician.direction.id
          this.technician.employeeId = this.technician.employee.id
          this.technician.techniqueTypeId = this.technician.techniqueType.id

        })
      }
    },
    cancel() {
      router.go(-1);
    }
  },
  created() {
    this.getEmployee()
    this.getDirections()
    this.getTechniqueTypes()
    this.getById()
  }
}
</script>

<style scoped>

</style>