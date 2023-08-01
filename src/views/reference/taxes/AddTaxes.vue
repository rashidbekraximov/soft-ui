<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Soliq qo'shish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              class="form-control"
              type="text"
              v-model="tax.id"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
        <div class="col-md-4 mb-3" v-if="isEdit">
          <label class="mb-2">Soliq nomi</label>
          <select class="form-select" v-model="tax.taxType.id">
            <option selected>Tanlang...</option>
            <option v-for="(taxType,index) in taxTypes" v-bind:key="index" :value="index">{{taxType}}</option>
          </select>
        </div>
        <div class="col-md-4 mb-3" v-else>
          <label class="mb-2">Soliq nomi</label>
          <select class="form-select" v-model="tax.taxTypeId">
            <option selected>Tanlang...</option>
            <option v-for="(taxType,index) in taxTypes" v-bind:key="index" :value="index">{{taxType}}</option>
          </select>
        </div>
        <div class="col-md-4">
          <label>Qiymati</label>
          <input
              id="password"
              class="form-control"
              type="text"
              v-model="tax.taxAmount"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Holati</label>
          <select class="form-select" v-model="tax.status">
            <option selected>Tanlang...</option>
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
import {notification} from "ant-design-vue";
import router from "../../../router";

export default {
  name: "Form1",
  components: {
    SoftButton,
  },
  data() {
    return {
      tax:{},
      isEdit: false,
      taxTypes:[]
    }
  },
  methods: {
    save(){
      console.log(this.tax)
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
         this.tax.id = parseInt(num);
      }
      this.$http.post("references/tax/save",this.tax).then(res => {
        console.log(res.data)
        if (res.status === 201){
          notification.success({
            message: `Muvaffaqiyatli saqlandi !`,
            duration: 2
          });
          router.go(-1);
        }else{
          notification.error({
            message: `Xato yuzaga keldi !`,
            duration: 1
          });
        }
      })
    },
    getTaxType() {
      this.$http.get("references/def/tax_type").then(res => {
        this.taxTypes = res.data
      })
      if (isNaN(parseInt(router.currentRoute._rawValue.params.id))){
        this.isEdit = false;
      }else{
        this.isEdit = true;
      }
    },
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.$http.get("references/tax/" + parseInt(num)).then(res => {
          this.tax = res.data
        })
      }
    },
    cancel(){
      router.go(-1);
    }
  },
  created() {
    this.getTaxType()
    this.getById()
  }
}
</script>

<style scoped>

</style>