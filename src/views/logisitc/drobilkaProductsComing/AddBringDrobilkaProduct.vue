<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Olib kelingan mahsulotni qo'shish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="bringDrobilkaProduct.id"
          />
        </div>
        <div class="col-md-4">
          <label>Sana</label>
          <input
              class="form-control"
              type="date"
              v-model="bringDrobilkaProduct.date"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Mahsulot nomi</label>
          <select class="form-select" v-model="bringDrobilkaProduct.productTypeId">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(productType,index) in productTypes" v-bind:key="index" :value="index">{{productType}}</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">O'lchov birliki</label>
          <select class="form-select" v-model="bringDrobilkaProduct.unitId">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(unit,index) in units" v-bind:key="index" :value="index">{{unit}}</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label class="mb-2">Texnika turi</label>
          <select class="form-select" v-model="bringDrobilkaProduct.technicianId">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(technician,index) in technicians" v-bind:key="index" :value="index">{{technician}}</option>
          </select>
        </div>
        <div class="col-md-4">
          <label>Km</label>
          <input
              class="form-control"
              type="number"
              v-model="bringDrobilkaProduct.km"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label>Miqdori</label>
          <input
              class="form-control"
              type="number"
              v-model="bringDrobilkaProduct.amount"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <label>Daromad</label>
          <input
              class="form-control"
              type="number"
              v-model="bringDrobilkaProduct.income"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Korxona</label>
          <select class="form-select" v-model="bringDrobilkaProduct.mchj">
            <option value="CHSM">CHSM</option>
            <option value="LB">Leader Beton</option>
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
import router from "../../../router";
import {notification} from "ant-design-vue";

export default {
  name: "AddBringDrobilkaProduct",
  components: {
    SoftButton,
  },
  data() {
    return {
      bringDrobilkaProduct:{},
      units:[],
      productTypes:[],
      technicians:[],
    }
  },
  methods: {
    save(){
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.bringDrobilkaProduct.id = parseInt(num);
      }
      this.$http.post("bring-drobilka-product/save",this.bringDrobilkaProduct).then(res => {
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
    getUnits() {
      this.$http.get("references/def/unit" + localStorage.getItem('lang')).then(res => {
        this.units = res.data
      })
    },
    getTechnicians() {
      this.$http.get("technician/select" + localStorage.getItem('lang')).then(res => {
        this.technicians = res.data
      })
    },
    getProductTypes() {
      this.$http.get("references/def/product_type" + localStorage.getItem('lang')).then(res => {
        this.productTypes = res.data
      })
    },
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.$http.get("bring-drobilka-product/" + parseInt(num)).then(res => {
          this.bringDrobilkaProduct = res.data
          this.bringDrobilkaProduct.productTypeId = this.bringDrobilkaProduct.productType.id;
          this.bringDrobilkaProduct.unitId = this.bringDrobilkaProduct.unit.id;
          this.bringDrobilkaProduct.technicianId = this.bringDrobilkaProduct.technician.id;
        })
      }
    },
    cancel(){
      router.go(-1);
    }
  },
  created() {
    this.getUnits()
    this.getProductTypes()
    this.getTechnicians()
    this.getById()
  }
}
</script>

<style scoped>

</style>
