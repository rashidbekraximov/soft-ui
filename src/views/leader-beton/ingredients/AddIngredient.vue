<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Tarkib qo'shish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="ingredient.id"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Marka</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.mark"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Miqdori</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.amount"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label>Sement (kg)</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.sement"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <label>Klines (kg)</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.klines"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label>Sheben (kg)</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.sheben"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label>Pesok (kg)</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.pesok"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label>Dobavka</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.dobavka"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label>Narxi</label>
          <input
              class="form-control"
              type="number"
              v-model="ingredient.value"
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
  name: "AddIngredient",
  components: {
    SoftButton,
  },
  data() {
    return {
      ingredient:{},
    }
  },
  methods: {
    save(){
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.ingredient.id = parseInt(num);
      }
      this.$http.post("ingredient/save" + localStorage.getItem("lang"),this.ingredient).then(res => {
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
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))){
        this.$http.get("ingredient/" + parseInt(num)).then(res => {
          this.ingredient = res.data
        })
      }
    },
    cancel(){
      router.go(-1);
    }
  },
  created() {
    this.getById()
  }
}
</script>

<style scoped>

</style>