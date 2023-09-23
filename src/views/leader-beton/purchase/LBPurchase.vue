<template>
  <div class="card m-4">
    <div class="card-header pb-0">
      <h6>Sotish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-4 d-none">
          <input
              type="number"
              v-model="purchase.id"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Buyurtmachi</label>
          <input
              class="form-control"
              type="text"
              v-model="purchase.customer"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Hudud</label>
          <input
              class="form-control"
              type="text"
              v-model="purchase.location"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Sana</label>
          <input
              class="form-control"
              type="date"
              v-model="purchase.date"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label class="mb-2">Marka</label>
          <select class="form-select" v-model="purchase.mark" @change="getSelect">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(m,index) in marks" v-bind:key="index" :value="m">{{ m }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Miqdor</label>
          <select class="form-select" v-model="purchase.amount" @change="getSelect">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(a,index) in amounts" v-bind:key="index" :value="a">{{ a }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label>Sement (kub)</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.sement"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label>Klines (kub)</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.klines"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Sheben (kub)</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.sheben"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Pesok (kub)</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.pesok"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label>Dobavka</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.dobavka"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Antimaroz</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.antimaroz"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Nasos</label>
          <input
              class="form-control"
              type="number"
              @input="calcTotalValue"
              v-model="purchase.nasos"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label>Beton Narxi</label>
          <input
              class="form-control"
              type="number"
              @input="calcTotalValue"
              v-model="purchase.value"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Umumiy summa</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.totalValue"
              readonly
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Bergan summa</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.givenValue"
              @input="calcDebt"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Qarzdorlik</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.debtTotalValue"
              readonly
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Avto</label>
          <select class="form-select" v-model="purchase.mixerId">
            <option selected disabled value="0">Tanlang...</option>
            <option v-for="(a,index) in auto" v-bind:key="index" :value="index">{{a}}</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label>Xodka</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.xodka"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Km</label>
          <input
              class="form-control"
              type="number"
              v-model="purchase.km"
              placeholder="Kiriting"
              required
          />
        </div>
        <div class="col-md-4">
          <label class="mb-2">Holati</label>
          <select class="form-select" v-model="purchase.status">
            <option selected disabled>Tanlang...</option>
            <option value="ACTIVE" selected>Faol</option>
            <option value="PASSIVE">Passiv</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">

      </div>
      <div class="row mb-3 mt-3">
        <div class="col-md-12">
          <label>Izoh</label>
          <textarea class="form-control" placeholder="Izoh" rows="5" v-model="purchase.description"></textarea>
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
  name: "LBPurchase",
  components: {
    SoftButton
  },
  data() {
    return {
      marks: [],
      amounts: [],
      auto: [],
      ingredient: {},
      purchase: {
        id: 0,
        date: '',
        customer: '',
        location: '',
        mark: 0,
        amount: 0,
        sement: 0,
        sheben: 0,
        klines: 0,
        pesok: 0,
        dobavka: 0,
        antimaroz: 0,
        mixerId: 0,
        nasos: 0,
        xodka: 0,
        value: 0,
        totalValue: 0,
        givenValue: 0,
        debtTotalValue: 0,
        km: 0,
        description: ''
      }
    }
  },
  methods: {
    calcTotalValue() {
      this.purchase.totalValue = this.purchase.nasos + this.purchase.value;
      this.calcDebt();
    },
    calcDebt(){
      this.purchase.debtTotalValue = this.purchase.totalValue - this.purchase.givenValue;
    },
    currentDate() {
      const current = new Date();
      if ((current.getMonth() + 1).toString().length === 1) {
        this.purchase.date = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
      } else {
        this.purchase.date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
      }
    },
    save(){
      // let num = router.currentRoute._rawValue.params.id;
      // if (!isNaN(parseInt(num))){
      //   this.purchase.id = parseInt(num);
      // }
      this.$http.post("lb-purchase/save" + localStorage.getItem("lang"),this.purchase).then(res => {
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
    getMarks() {
      this.$http.get("ingredient/marks" + localStorage.getItem('lang')).then(res => {
        this.marks = res.data
      })
      this.calcTotalValue();
    },
    getAmount() {
      this.$http.get("ingredient/amounts" + localStorage.getItem('lang')).then(res => {
        this.amounts = res.data
      })
      this.calcTotalValue();
    },
    getAutoList() {
      this.$http.get("mixer/select" + localStorage.getItem('lang')).then(res => {
        this.auto = res.data
      })
    },
    getSelect() {
      if (this.purchase.mark !== 0 && this.purchase.amount !== 0) {
        this.testRemainder()
        this.$http.get("ingredient/select/" + this.purchase.mark + "/" + this.purchase.amount).then(res => {
          this.ingredient = res.data
          this.purchase.sement = this.ingredient.sement
          this.purchase.sheben = this.ingredient.sheben
          this.purchase.klines = this.ingredient.klines
          this.purchase.pesok = this.ingredient.pesok
          this.purchase.dobavka = this.ingredient.dobavka
          this.purchase.value = this.ingredient.value
        })
      }
    },
    testRemainder() {
      if (this.purchase.mark !== 0 && this.purchase.amount !== 0) {
        this.$http.get("lb-purchase/test/" + this.purchase.mark + "/" + this.purchase.amount + localStorage.getItem('lang')).then(res => {
          console.log(res.data)
          if(res.data.success){
            notification.success({
              message: res.data.message,
              duration: 3
            });
          }else{
            notification.error({
              message: res.data.message,
              duration: 3
            });
          }
        })
      }
    },
    cancel() {
      router.go(-1);
    }
  },
  created() {
    this.getMarks()
    this.getAmount()
    this.getAutoList()
    this.currentDate()
  }
}
</script>

<style scoped>

</style>