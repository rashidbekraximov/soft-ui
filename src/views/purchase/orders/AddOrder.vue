<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Buyurtma qo'shish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="order.id"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Ism va familiya</label>
          <input
              class="form-control"
              type="text"
              v-model="order.client"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Telefon raqami</label>
          <input
              class="form-control"
              type="text"
              v-model="order.phoneNumber"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Sana</label>
          <input
              class="form-control"
              type="date"
              v-model="order.date"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label>Manzil</label>
          <input
              class="form-control"
              type="text"
              v-model="order.location"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label class="mb-2">Mahsulot nomi</label>
          <select class="form-select" v-model="order.productTypeId" @change="getProductPrice(order.productTypeId)">
            <option selected disabled>Tanlang...</option>
            <option v-for="(productType,index) in productTypes" v-bind:key="index" :value="index">{{
                productType
              }}
            </option>
          </select>
        </div>
        <div class="col-md-4">
          <label>Hajmi</label>
          <input
              class="form-control"
              type="number"
              v-model="order.weight"
              placeholder="Kiriting"
              @input="addValue"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <label>Narxi</label>
          <input
              class="form-control"
              type="number"
              v-model="order.price"
              @input="addValue"
              readonly
          />
        </div>
        <div class="col-md-4">
          <label>Qiymati</label>
          <input
              class="form-control"
              type="number"
              v-model="order.value"
              readonly
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
// import {notification} from "ant-design-vue";
import router from "../../../router";
import {notification} from "ant-design-vue";

export default {
  name: "AddOrder",
  components: {
    SoftButton,
  },
  data() {
    return {
      order: {},
      productTypes: [],
      directions: []
    }
  },
  methods: {
    addValue() {
      this.order.value = this.order.price * this.order.weight;
    },
    save() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))) {
        this.order.id = parseInt(num);
      }
      this.$http.post("order/save" + localStorage.getItem("lang"), this.order).then(res => {
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
    getProductTypes() {
      this.$http.get("references/def/product_type" + localStorage.getItem('lang')).then(res => {
        this.productTypes = res.data
      })
    },
    getProductPrice(id) {
      this.$http.get("price-input/" + id + localStorage.getItem('lang')).then(res => {
        this.order.price = res.data
      })
      this.addValue();
    },
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))) {
        this.$http.get("order/" + parseInt(num)).then(res => {
          this.order = res.data
        })
      }
    },
    cancel() {
      router.go(-1);
    }
  },
  created() {
    this.getProductTypes()
    this.getById()
  }
}
</script>

<style scoped>

</style>