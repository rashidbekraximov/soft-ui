<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6></h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="cost.id"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Sana</label>
          <input
              class="form-control"
              type="date"
              v-model="cost.date"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Xarajat turi</label>
          <select class="form-select" v-model="cost.costTypeId">
            <option selected>Tanlang...</option>
            <option v-for="(u,index) in costTypes" v-bind:key="index" :value="index">{{ u }}</option>
          </select>
        </div>
        <div class="col-md-4">
          <label>Qiymati</label>
          <input
              class="form-control"
              type="number"
              v-model="cost.amount"
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
import {notification} from "ant-design-vue";
import router from "../../../router";

export default {
  name: "AddCost",
  components: {
    SoftButton,
  },
  data() {
    return {
      cost: {
        id:0,
        date:'',
        costTypeId: 0,
        amount: 0
      },
      costTypes: []
    }
  },
  methods: {
    save() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))) {
        this.cost.id = parseInt(num);
      }
      this.$http.post("cost/save" + localStorage.getItem("lang"), this.cost).then(res => {
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
    getCostTypes() {
      this.$http.get("references/def/cost_type" + localStorage.getItem('lang')).then(res => {
        this.costTypes = res.data
      })
    },
    getById() {
      let num = router.currentRoute._rawValue.params.id;
      if (!isNaN(parseInt(num))) {
        this.$http.get("cost/" + parseInt(num)).then(res => {
          this.cost = res.data
          this.cost.costTypeId = this.cost.costType.id;
        })
      }
    },
    cancel() {
      router.go(-1);
    }
  },
  created() {
    this.getCostTypes()
    this.getById()
  }
}
</script>

<style scoped>

</style>