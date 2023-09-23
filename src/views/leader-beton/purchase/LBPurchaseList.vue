<template>
  <div class="card-body mx-4">
    <div class="row my-4">
      <div class="card mb-md-0 mb-4">
        <div class="card-header pb-0">
          <div class="row">
            <div class="col-lg-6 col-7">
              <h6>Sotuvlar ro'yxati</h6>
              <p class="text-sm mb-0">
                <i class="fa fa-check text-info" aria-hidden="true"></i>
                <span class="font-weight-bold ms-1">30 done</span> this month
              </p>
            </div>
            <div class="col-lg-6 col-5 my-auto text-end">
              <div class="dropdown w-100 float-lg-end pe-4">
                <a
                    class="cursor-pointer"
                    id="dropdownTable"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    :class="[showMenuBell ? 'show' : '',]"
                    @click="showMenuBell = !showMenuBell"
                >
                  <img src="@/assets/img/icons/filter.png" width="30" height="30">
                </a>
                <div
                    class="dropdown-menu px-2 py-3 m-3"
                    aria-labelledby="dropdownTable"
                    :class="showMenuBell ? 'show' : ''">
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label>Mijoz</label>
                      <input
                          class="form-control"
                          type="text"
                          placeholder="Kiriting"
                          v-model="filter.client"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label>Marka</label>
                      <select class="form-select" v-model="filter.technicianId">
                        <option selected disabled value="0">Tanlang...</option>
                        <option v-for="(t,index) in marks" v-bind:key="index" :value="t">{{ t }}</option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label>Miqdor</label>
                      <select class="form-select">
                        <option selected disabled value="0">Tanlang...</option>
                        <option v-for="(t,index) in amounts" v-bind:key="index" :value="t">{{ t }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label>Auto</label>
                      <select class="form-select" v-model="filter.paymentTypeId">
                        <option selected disabled value="0">Tanlang...</option>
                        <option v-for="(p,index) in auto" v-bind:key="index" :value="index">{{p}}
                        </option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-3 d-flex mt-4">
                      <label>Qarz</label>
                      <div class="form-check form-switch mx-4">
                        <input class="form-check-input" type="checkbox" v-model="filter.isDebt">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label>Boshlanish sana</label>
                      <input
                          class="form-control"
                          type="date"
                          placeholder="Kiriting"
                          v-model="filter.beginDate"
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label>Tugash sana</label>
                      <input
                          class="form-control"
                          type="date"
                          placeholder="Kiriting"
                          v-model="filter.endDate"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <soft-button
                          class="my-4 mb-2"
                          variant="gradient"
                          color="success"
                          full-width
                          @click="getList()"
                      >Saqlash
                      </soft-button>
                    </div>
                    <div class="col-md-6">
                      <soft-button
                          class="my-4 mb-2"
                          variant="gradient"
                          color="danger"
                          full-width
                          @click="clear"
                      >Bekor qilish
                      </soft-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body px-0 pb-2 overflow-auto h-100">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
              <tr>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  ID
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  SANA
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  BUYURTMACHI
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  HUDUD
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  MARKA
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  MIQDOR
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  AUTO
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                  QIYMATI
                </th>
                <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(t,index) in allTableData" :id="index" v-bind:key="index">
                <td>
                  <div class="text-center">
                    {{ t.id }}
                  </div>
                </td>
                <td class="text-center">
                <soft-badge color="success" variant="gradient" size="sm">{{t.date}}</soft-badge>
                </td>
                <td class="text-center">
                  {{ t.customer }}
                </td>
                <td class="text-center">
                  {{ t.location }}
                </td>
                <td class="text-center">
                  {{ t.mark }}
                </td>
                <td class="text-center">
                  {{ t.amount }}
                </td>
                <td class="text-center">
                  <soft-badge color="success" variant="gradient" size="sm">{{t.mixer.auto}}</soft-badge>
                </td>
                <td class="text-center">
                  <soft-badge color="info" variant="gradient" size="sm"> {{ t.value }}</soft-badge>
                </td>
                <td class="text-center">
                  <img
                      src="@/assets/img/icons/pen.png"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                  />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row m-3">
          <div class="col-md-6"></div>
          <div class="col-md-2">
            <soft-button
                class="my-4 mb-2"
                variant="gradient"
                color="info"
                full-width
                @click="downloadKassa"
            >Sotish
            </soft-button>
          </div>
          <div class="col-md-2">
            <soft-button
                class="my-4 mb-2"
                variant="gradient"
                color="success"
                full-width
                @click="download"
            >Ishlab chiqarish
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
import SoftBadge from "@/components/SoftBadge.vue";
import router from "../../../router";
import Swal from "sweetalert2";
import {notification} from "ant-design-vue";

export default {
  name: "LBPurchaseList",
  components: {
    SoftButton,
    SoftBadge,
  },
  data() {
    return {
      filter:{
        client: '',
        mark:0,
        amount:0,
        auto:0,
        beginDate:null,
        endDate:null,
        isDebt: false,
      },
      allTableData: [],
      marks: [],
      amounts: [],
      auto: [],
      showMenuBell: false,
    }
  },
  methods: {
    getList() {
      this.$http.post("lb-purchase/filter" + localStorage.getItem("lang"),this.filter).then(res => {
        this.allTableData = res.data
        console.log(res.data)
      })
    },
    deleteRow(id) {
      Swal.fire({
        title: 'Ishonchingiz komilmi?',
        text: "Siz qarzdorlikni qayta tiklay olmaysiz!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Qarzdorlikni so\'ndirish'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.get("purchase/delete-debt/" + id).then(res => {
            console.log(res.data.status)
            if (res.status === 200){
              notification.success({
                message: `Muvaffaqiyatli o'chirildi !`,
                duration: 2
              });
              setTimeout(() => {
                router.go(0)
              }, "1300");
            }else{
              notification.error({
                message: `Xatolik yuzaga keldi !`,
                duration: 2
              });
              setTimeout(() => {
                router.go(0)
              }, "1300");
            }
          })
        }
      })
    },
    download() {
      this.$http.post('/report/lb-produce' + localStorage.getItem("lang"),this.filter, {
        'Content-Type': 'blob',
        responseType: "arraybuffer",
      }).then((response) => {
        const url = URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute(
            'download',
            `Ishlab chiqarish LB.xlsx`
        )
        document.body.appendChild(link)
        link.click()
      })
    },
    downloadKassa() {
      this.$http.post('/report/lb-purchase' + localStorage.getItem("lang"),this.filter, {
        'Content-Type': 'blob',
        responseType: "arraybuffer",
      }).then((response) => {
        const url = URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute(
            'download',
            `Sotish LB.xlsx`
        )
        document.body.appendChild(link)
        link.click()
      })
    },
    getMarks() {
      this.$http.get("ingredient/marks" + localStorage.getItem('lang')).then(res => {
        this.marks = res.data
      })
    },
    getAmount() {
      this.$http.get("ingredient/amounts" + localStorage.getItem('lang')).then(res => {
        this.amounts = res.data
      })
    },
    getAutoList() {
      this.$http.get("mixer/select" + localStorage.getItem('lang')).then(res => {
        this.auto = res.data
      })
    },
    cancel(){
      router.go(-1)
    },
    clear(){
      this.allTableData.id = 0;
      this.allTableData.checkNumber = '';
      this.allTableData.technicianId = 0;
      this.allTableData.paymentTypeId = 0;
      this.allTableData.isDebt = false;
      this.allTableData.beginDate = null;
      this.allTableData.endDate = null;
      this.getList();
    }
  },
  created() {
    this.getList();
    this.getMarks();
    this.getAmount();
    this.getAutoList();
  }
}
</script>

<style scoped>

</style>