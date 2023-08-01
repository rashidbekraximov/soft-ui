<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>O'xshash malumotlar</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <select class="form-select" v-model="reference.referenceId" @change="getSimilarTableById(reference.referenceId)">
            <option selected>Tanlang...</option>
            <option v-for="(similar,index) in similarData" v-bind:key="index" :value="index">{{similar}}</option>
          </select>
        </div>
      </div>
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder  opacity-20"
            >
              Ruscha
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-20 ps-2"
            >
              Latincha
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder  opacity-20 ps-2"
            >
              Krillcha
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-20 ps-2">
              Status
            </th>
            <th class="text-center">
              <img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add" @click="addRow">
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(tableData,index) in reference.items" :id="index" v-bind:key="index">
            <td>
              <input
                  class="form-control"
                  type="text"
                  placeholder="Kiriting"
                  name="password"
                  v-model="tableData.ru"
                  required
              />
            </td>
            <td>
              <input
                  class="form-control"
                  type="text"
                  placeholder="Kiriting"
                  name="password"
                  required
                  v-model="tableData.uzLat"
              />
            </td>
            <td>
              <input
                  class="form-control"
                  type="text"
                  placeholder="Kiriting"
                  name="password"
                  required
                  v-model="tableData.uzCl"
              />
            </td>
            <td>
              <select class="form-select" v-model="tableData.status">
                <option selected>Tanlang...</option>
                <option value="ACTIVE">Faol</option>
                <option value="PASSIVE">Passiv</option>
              </select>
            </td>
            <td class="text-center">
              <img src="@/assets/img/delete1.png" style="width: 40px; height: 40px" alt="Add" @click="removeRow(index)">
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
import {notification} from "ant-design-vue";
import router from "../../router";

export default {
  name: "O'xshash malumotlar",
  components: {
    SoftButton,
  },
  data() {
    return {
      similarData: [],
      reference: {
        referenceId: 0,
        items:[{ru: '', uzLat: '', uzCl: '', status: ''}]
      },

    }
  },
  methods: {
    getSimilarList() {
          // ?lang=uz_lat
      console.log(this.$store.state.lang)
      this.$http.get("references/def/reference_list" + localStorage.getItem("lang")).then(res => {
        this.similarData = res.data
        console.log(this.similarData)
      })
    },
    save(){
      console.log(this.reference)
      this.$http.post("references/def_references",this.reference).then(res => {
        if (res.status === 201){
          notification.success({
            message: `Muvaffaqiyatli saqlandi !`,
            duration: 1
          });
        }else{
          notification.error({
            message: `Xato yuzaga keldi !`,
            duration: 1
          });
        }
      })
    },
    cancel(){
      router.go(-1);
    },
    getSimilarTableById(id) {
      this.$http.get("references/def_references/" + id).then(res => {
        this.reference.items = res.data
        console.log("table ucun",this.reference.items)
      })
    },
    addRow() {
      this.reference.items.push({ru: '', uzlat: '', uzCl: '', status: ''})
      notification.success({
        message: `Yangi qator qo'shildi !`,
        duration: 1
      });
    },
    removeRow(index) {
      this.reference.items.splice(index, 1);
      notification.warn({
        message: index + 1 + `-qator o'chirildi !`,
        duration: 1
      });
    }
  },
  created() {
    this.getSimilarList();
  }
}
</script>

<style scoped>

</style>