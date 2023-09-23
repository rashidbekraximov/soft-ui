<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Tabel</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="row m-3">
        <div class="col-md-4">
          <label class="mb-2">Boshlanish sana</label>
          <input
              class="form-control"
              type="date"
              v-model="tabel.beginDate"
              @input="getHeaderList(tabel.beginDate,tabel.endDate,tabel.directionId)"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label class="mb-2">Tugash sana</label>
          <input
              class="form-control"
              type="date"
              placeholder="Kiriting"
              v-model="tabel.endDate"
              @input="getHeaderList(tabel.beginDate,tabel.endDate,tabel.directionId)"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Mavsum</label>
          <select class="form-select" v-model="tabel.directionId" @change="getHeaderList(tabel.beginDate,tabel.endDate,tabel.directionId)">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(d,index) in directions" v-bind:key="index" :value="index">{{d}}</option>
          </select>
        </div>
      </div>
      <div class="table-responsive p-0 m-3">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Id
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              ISM VA FAMILIYA
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              LAVOZIMI
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2" v-for="(h,index) in headers" :id="index" v-bind:key="index">
             {{h}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(f,index) in employee" :id="index" v-bind:key="index">
            <td>
              <div class="d-flex px-2">
                <div class="my-auto">
                  <h6 class="mb-0 text-sm">{{index + 1}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                <div>
                  <img
                      src="@/assets/img/icons/customer.png"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                  />
                </div>
                <div class="my-auto">
                  <p class="text-sm font-weight-bold mb-0">{{ f.name }}</p>
                </div>
              </div>
            </td>
            <td>
              <span class="text-xs font-weight-bold">{{f.position.name.activeLanguage}}</span>
            </td>
            <td class="align-middle text-center" v-for="(hour,index) in f.hourDays" :id="index" v-bind:key="index">
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-2 text-xs font-weight-bold">{{hour}}</span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="row m-3">
        <div class="col-md-8"></div>
        <div class="col-md-2">
          <soft-button
              class="my-4 mb-2"
              variant="gradient"
              color="success"
              @click="download"
              full-width
          >Yuklab olish
          </soft-button>
        </div>
        <div class="col-md-2">
          <soft-button
              class="my-4 mb-2"
              variant="gradient"
              color="danger"
              @click="cancel"
              full-width
          >Bekor qilish
          </soft-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SoftButton from "../../components/SoftButton";
import router from "../../router";

export default {
  name: "Tabel",
  components: {
    SoftButton,
  },
  data(){
    return {
      loading: false,
      tabel:{
        beginDate: '',
        endDate: '',
        directionId: 0
      },
      employee:[],
      dayHours:[],
      headers:[],
      directions:[],
    }
  },
  methods: {
    getSalary(beginDate,endDate,id) {
      this.$http.get("salary/tabel/"+ beginDate + "/" + endDate + "/"+ id + localStorage.getItem("lang")).then(res => {
        this.employee = res.data
      })
    },

    getHeaderList(beginDate,endDate,id) {
      if (beginDate !== '' && endDate !== '' && id !== 0){
        this.getSalary(beginDate,endDate,id);
        this.$http.get("salary/header/" + beginDate + "/" + endDate + "/"+ id + localStorage.getItem("lang")).then(res => {
          this.headers = res.data
        })
      }
    },
    getDirections() {
      this.$http.get("references/def/direction" + localStorage.getItem('lang')).then(res => {
        this.directions = res.data
      })
    },
    download() {
      this.loading = true;
      this.$http.get('/report/tabel/' + this.tabel.beginDate + "/" + this.tabel.endDate + "/" + this.tabel.directionId +  localStorage.getItem("lang"), {
        'Content-Type': 'blob',
        responseType: "arraybuffer",
      }).then((response) => {
        const url = URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute(
            'download',
            `tabel.xlsx`
        )
        document.body.appendChild(link)
        link.click()
        this.loading = false;
      })
    },
    cancel(){
      router.go(-1);
    }
  },
  created() {
    this.getDirections();
  }
};
</script>
