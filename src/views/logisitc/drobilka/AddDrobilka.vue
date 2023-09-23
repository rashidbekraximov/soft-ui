<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Mahsulotni qo'shish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="drobilka.id"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Mahsulot nomi</label>
          <select class="form-select" v-model="drobilka.productTypeId">
            <option selected>Tanlang...</option>
            <option v-for="(productType,index) in productTypes" v-bind:key="index" :value="index">{{productType}}</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">O'lchov birliki</label>
          <select class="form-select" v-model="drobilka.unitId">
            <option selected>Tanlang...</option>
            <option v-for="(unit,index) in units" v-bind:key="index" :value="index">{{unit}}</option>
          </select>
        </div>
        <div class="col-md-4">
          <label>Miqdori</label>
          <input
              class="form-control"
              type="number"
              v-model="drobilka.amount"
              placeholder="Kiriting"
              required
          />
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
  name: "AddDrobilka",
  components: {
    SoftButton,
  },
  data() {
    return {
      drobilka:{},
      units:[],
      productTypes:[]
    }
  },
  methods: {
    save(){
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.drobilka.id = parseInt(num);
      }
      this.$http.post("drobilka/save" + localStorage.getItem("lang"),this.drobilka).then(res => {
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
    getProductTypes() {
      this.$http.get("references/def/product_type" + localStorage.getItem('lang')).then(res => {
        this.productTypes = res.data
      })
    },
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.$http.get("drobilka/" + parseInt(num)).then(res => {
          this.drobilka = res.data
          this.drobilka.productTypeId = this.drobilka.productType.id;
          this.drobilka.unitId = this.drobilka.unit.id;
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
    this.getById()
  }
}
</script>

<style scoped>

</style>