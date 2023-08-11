<template>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row my-4">
        <div class="card col-lg-8 col-md-6 mb-md-0 mb-4">
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Sana</label>
              <input
                  id="date"
                  class="form-control"
                  type="date"
                  v-model="purchase.date"
                  required
              />
            </div>
            <div class="col-md-6">
              <label>Mijoz</label>
              <input
                  class="form-control"
                  type="text"
                  placeholder="Kiriting"
                  v-model="purchase.client"
                  required
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Mahsulot nomi</label>
              <select class="form-select" v-model="purchase.productId">
                <option selected>Tanlang...</option>
                <option v-for="(product,index) in productType" v-bind:key="index" :value="index">{{product}}</option>
              </select>
            </div>
            <div class="col-md-6">
              <label>Mahsulot hajmi</label>
              <input
                  class="form-control"
                  type="number"
                  v-model="purchase.weight"
                  @input="addValue"
                  placeholder="Kiriting"
                  required
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Mahsulot narxi</label>
              <input
                  class="form-control"
                  type="number"
                  @input="addValue"
                  placeholder="Kiriting"
                  v-model="purchase.price"
                  required
              />
            </div>
            <div class="col-md-6">
              <label>Mahsulot summasi</label>
              <input
                  class="form-control"
                  type="number"
                  placeholder="Kiriting"
                  v-model="purchase.value"
                  required
                  readonly
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Yo'lkira</label>
              <input
                  class="form-control"
                  type="number"
                  v-model="purchase.fare"
                  @input="addAdditionValue"
                  placeholder="Kiriting"
                  required
              />
            </div>
            <div class="col-md-6">
              <label>Nasos</label>
              <input
                  class="form-control"
                  type="number"
                  @input="addAdditionValue"
                  v-model="purchase.nasos"
                  placeholder="Kiriting"
                  required
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Prostoy</label>
              <input
                  class="form-control"
                  type="number"
                  @input="addAdditionValue"
                  placeholder="Kiriting"
                  required
                  v-model="purchase.prostoy"
              />
            </div>
            <div class="col-md-6">
              <label>Umumiy summas</label>
              <input
                  class="form-control"
                  type="number"
                  placeholder="Kiriting"
                  v-model="purchase.totalValue"
                  required
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Avto raqam</label>
              <input
                  class="form-control"
                  type="text"
                  placeholder="Kiriting"
                  v-model="purchase.avtoNumber"
                  required
              />
            </div>
            <div class="col-md-6">
              <label>Raschyot sana</label>
              <input
                  class="form-control"
                  type="date"
                  v-model="purchase.raschotDate"
                  required
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Muddati</label>
              <input
                  class="form-control"
                  type="date"
                  v-model="purchase.expiryDate"
                  placeholder="Kiriting"
                  required
              />
            </div>
            <div class="col-md-6">
              <label>Pul bergan sana</label>
              <input
                  class="form-control"
                  type="date"
                  v-model="purchase.givenMoneyDate"
                  placeholder="Kiriting"
                  required
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Bergan summa</label>
              <input
                  class="form-control"
                  type="number"
                  v-model="purchase.givenSumm"
                  placeholder="Kiriting"
                  required
              />
            </div>
            <div class="col-md-6">
              <label>Holati</label>
              <select class="form-select" v-model="purchase.status">
                <option selected>Tanlang...</option>
                <option v-for="(s,index) in status" v-bind:key="index" :value="index">{{s}}</option>
              </select>
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-md-12">
              <label>Izoh</label>
              <textarea class="form-control" placeholder="Izoh"  rows="5" v-model="purchase.description"></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6"></div>
            <div class="col-md-3">
              <soft-button
                  class="my-4 mb-2"
                  variant="gradient"
                  color="success"
                  full-width
                  @click="print"
              >Chop etish
              </soft-button>
            </div>
            <div class="col-md-3">
              <soft-button
                  class="my-4 mb-2"
                  variant="gradient"
                  color="danger"
                  full-width
              >Bekor qilish
              </soft-button>
              </div>
          </div>
        </div>
          <div id="showScroll" class="container card col-lg-4 col-md-6">
            <div id="receipt">
              <h1 class="logo">CHSM</h1>
              <div class="address">
                666 Lincoln St. Santa Monica, CA
              </div>
              <div class="returnPolicy bold">
                Returns with receipt, subject to CVS Return Policy, thru 12/04/2018
              </div>
              <div class="returnPolicy">
                <div class="detail">October 5, 2018</div>
                <div class="detail">10:16 AM</div>
              </div>
              <div class="tripSummary">
                <div class="bold">Trip Summary:</div>
                <div class="item">
                  <div>Today You Saved:</div>
                  <div>343000</div>
                </div>
                <div class="item">
                  <div>Savings Value</div>
                  <div>0%</div>
                </div>
              </div>
              <div class="feedback">
                <h4 class="web">www.CVSHealthSurvey.com</h4>
                <p class="center">
                  Hablamos español
                </p>
                <div class="break m-2">
                  *************************************
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>

import SoftButton from "@/components/SoftButton.vue";
// import {notification} from "ant-design-vue";
// import printJS from 'print-js'
import qz from 'qz-tray'

export default {
  name: "Form2",
  components: {
    SoftButton,
  },
  data() {
    return {
      status:[],
      productType:[],
      purchase:{
        date: '2023-10-04',
        client: '',
        productId: 0,
        weight: 0,
        price: 0,
        value:0,
        fare: 0,
        nasos: 0,
        prostoy: 0,
        totalValue: 0,
        avtoNumber: '',
        raschotDate:'2023-10-04',
        expiryDate: '2023-10-04',
        givenMoneyDate: '2023-10-04',
        givenSumm: 0,
        status: 0,
        description: ''
      }
    }
  },
  methods: {

    addValue(){
        this.purchase.value = this.purchase.price * this.purchase.weight;
        this.addAdditionValue();
    },
    addAdditionValue(){
        this.purchase.totalValue = this.purchase.fare  + this.purchase.nasos + this.purchase.prostoy + this.purchase.value;
    },

    getSelect(name){
      this.$http.get("references/def/" + name + localStorage.getItem("lang")).then(res => {
        console.log(res.data)

        if (name === 'status'){
          this.status = res.data;
        }else{
          this.productType = res.data;
        }
      })
    },

    print(){
      // printJS({
      //   printable: 'receipt',
      //   type: 'html',
      //   modalMessage: "Retrieving Document...",
      //   style: '.print-area { color: red; width: 10px; } .modal-body { width:100% }'
      // });
      qz.websocket.connect().then(() => {
        console.log("shuuu",qz)
        console.log("shuuu",qz.printers)
        return qz.printers.find("Microsoft Print to PDF");
      }).then((found) => {
        console.log(found)
        alert(found);
        var config = qz.configs.create(found);
        var data =  [{
          type: 'pixel',
          format: 'html',
          flavor: 'plain',
          data: '<h1>Hello Qz from JavaScript</h1>',
          options: { pageWidth: 2.5 /* pageHeight: 11 */ }
        }]
        return qz.print(config,data).catch(function(e) { console.error(e); });
      })
    }
  },
  created() {
    this.getSelect('status');
    this.getSelect('product_type');
  }
}
</script>

<style scoped>

#receipt{
  font-family: "VT323", monospace;
  color: #1f1f1f;
}

.container {
  background: #f1f1f1;
  padding: 10px 10px;
}

.bold {
  font-weight: bold;
}

.center {
  text-align: center;
}

#receipt {
  width: 300px;
  min-height: 100vh;
  height: 100%;
  background: #fff;
  margin: 0 auto;
  box-shadow: 5px 5px 19px #ccc;
}

.logo {
  text-align: center;
  padding: 20px;
}


.address {
  text-align: center;
  margin-bottom: 10px;
}

.returnPolicy {
  margin: 10px 20px;
  width: 220px;
  display: flex;
  justify-content: space-between;
}


.tripSummary {
  margin: auto;
  width: 255px;
}
.tripSummary .item {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 220px;
}

.feedback {
  margin: 10px auto;
}
.feedback h4.web {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
}
.feedback .break {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

</style>
