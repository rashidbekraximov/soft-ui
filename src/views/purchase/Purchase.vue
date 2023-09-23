<template>
  <div class="card-body mx-4  overflow-hidden position-relative border-radius-lg bg-cover h-100"
       :style="{backgroundImage:'url(' + require('@/assets/img/background/bg-2.png') + ')', }">
    <div class="row my-4">
      <div class="card col-lg-8 col-md-8 mb-md-0 mb-4">
        <div class="row mb-3 mt-3">
          <div class="col-md-6 d-none">
            <input
                type="number"
                v-model="purchase.id"
            />
          </div>
          <div class="col-md-6">
            <label>Tallon raqami</label>
            <input
                class="form-control"
                type="text"
                placeholder="Kiriting"
                v-model="purchase.checkNumber"
                required
            />
          </div>
          <div class="col-md-6">
            <label>Sana</label>
            <input
                id="date"
                class="form-control"
                type="date"
                v-model="purchase.date"
                @input="parseDate"
                required
            />
          </div>

        </div>
        <div class="row mb-3 mt-3">
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
          <div class="col-md-6">
            <label>Telefon raqami</label>
            <input
                class="form-control"
                type="text"
                placeholder="Kiriting"
                v-model="purchase.phoneNumber"
                required
            />
          </div>
        </div>
        <div class="table-responsive p-0">
          <table class="table align-items-center justify-content-center mb-0">
            <thead>
            <tr>
              <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder  text-center opacity-20"
              >
                Mahsulot nomi
              </th>
              <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
              >
                Mahsulot hajmi
              </th>
              <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
              >
                Mahsulot narxi
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2">
                QIYMATI
              </th>
              <th class="text-center">
                <img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add" @click="addRow">
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tableData,index) in purchase.purchasedProductList" :id="index" v-bind:key="index">
              <td class="text-center">
                <select class="form-select" style="width: 150px" v-model="tableData.productTypeId"
                        @change="getProductPrice(index,tableData.productTypeId)">
                  <option selected disabled value="0">Tanlang...</option>
                  <option v-for="(product,index) in productType" v-bind:key="index" :value="index">{{
                      product
                    }}
                  </option>
                </select>
              </td>
              <td class="text-center">
                <input
                    class="form-control"
                    type="number"
                    style="width: 150px"
                    v-model="tableData.weight"
                    @input="addValue(index,tableData.price,tableData.weight)"
                    placeholder="Kiriting"
                    required
                />
              </td>
              <td class="text-center">
                <input
                    class="form-control"
                    style="width: 150px"
                    type="number"
                    v-model="tableData.price"
                    @input="addValue(index,tableData.price,tableData.weight)"
                    readonly
                />
              </td>
              <td class="text-center">
                <input
                    class="form-control"
                    style="width: 150px"
                    type="number"
                    v-model="tableData.value"
                    readonly
                />
              </td>
              <td class="text-center">
                <img src="@/assets/img/delete1.png" style="width: 40px; height: 40px" alt="Add"
                     @click="removeRow(index)">
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="row mb-3 mt-3">
          <div class="col-md-6">
            <label>Texnika turi</label>
            <select class="form-select" v-model="purchase.technicianId">
              <option selected disabled value="0">Tanlang...</option>
              <option v-for="(s,index) in technicians" v-bind:key="index" :value="index">{{ s }}</option>
            </select>
          </div>
          <div class="col-md-6">
            <label>Yo'l haqi</label>
            <input
                class="form-control"
                type="number"
                v-model="purchase.fare"
                @input="calcTotalValue"
                placeholder="Kiriting"
                required
            />
          </div>
        </div>
        <div class="row mb-3 mt-3">
          <div class="col-md-6">
            <label>Umumiy qiymati</label>
            <input
                class="form-control"
                type="number"
                v-model="purchase.totalValue"
                readonly
            />
          </div>
          <div class="col-md-6">
            <label>Buyurtmalar</label>
            <select class="form-select" v-model="purchase.orderId" @change="getOrder(purchase.orderId)">
              <option selected disabled value="0">Tanlang...</option>
              <option v-for="(s,index) in orders" v-bind:key="index" :value="index">{{ s }}</option>
            </select>
          </div>
        </div>
        <div class="row mb-3 mt-3">
          <div class="col-md-6">
            <label>Bergan summa</label>
            <input
                class="form-control"
                type="number"
                v-model="purchase.paidTotalValue"
                placeholder="Kiriting"
                @input="calcRemainder"
                required
            />
          </div>
          <div class="col-md-6">
            <label>Qoldig' qarz summa</label>
            <input
                class="form-control"
                type="number"
                v-model="purchase.debtTotalValue"
                readonly
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
            <label>Manzil</label>
            <input
                class="form-control"
                type="text"
                v-model="purchase.location"
                placeholder="Kiriting"
                required
            />
          </div>
        </div>
        <div class="row mb-3 mt-3">
          <div class="col-md-6">
            <label>Km</label>
            <input
                class="form-control"
                type="number"
                v-model="purchase.km"
                placeholder="Kiriting"
                required
            />
          </div>
          <div class="col-md-6">
            <label>To'lov turi</label>
            <select class="form-select" v-model="purchase.paymentTypeId">
              <option selected>Tanlang...</option>
              <option v-for="(s,index) in paymentTypes" v-bind:key="index" :value="index">{{ s }}</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label>Holati</label>
            <select class="form-select" v-model="purchase.status">
              <option selected>Tanlang...</option>
              <option v-for="(s,index) in status" v-bind:key="index" :value="index">{{ s }}</option>
            </select>
          </div>
        </div>

        <div class="row mb-3 mt-3">
          <div class="col-md-12">
            <label>Izoh</label>
            <textarea class="form-control" placeholder="Izoh" rows="5" v-model="purchase.description"></textarea>
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
                @click="print('receipt')"
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
      <div id="showScroll" class="col-md-4 h-100">
        <div id="receipt">
          <h2 class="logo">CHSM MCHJ</h2>
          <div class="tripSummary bold mb-1">
            Tallon raqami: <span class="mx-5">{{ purchase.checkNumber }}</span>
          </div>
          <div class="tripSummary bold mb-1">
            Sana: <span class="mx-4">{{ dateFormatter }}<i class="fa fa-clock-o mx-2"></i>{{ time }}</span>
          </div>
          <div class="tripSummary bold mb-1">
            To'lov turi: <span class="mx-4" id="payment">{{
              getActiveText('r_payment_type', purchase.paymentTypeId)
            }}</span>
          </div>
          <div class="tripSummary mb-2">
            <div class="bold">Mahsulotlar:</div>
            <div class="item" v-for="(product,index) in purchase.purchasedProductList" v-bind:key="index">
              <div :id="'product' + product.productTypeId">{{
                  getActiveText('r_product_type', product.productTypeId)
                }}:
              </div>
              <div>{{ product.weight }}</div>
            </div>
          </div>
          <div class="tripSummary mb-2">
            <div class="bold">
              Yo'lkira: <span class="mx-6">{{ purchase.fare }}</span>
            </div>
          </div>
          <div class="tripSummary mb-2">
            <div class="bold">Mijoz:</div>
            <div class="item">
              <div>Ismi:</div>
              <div>{{ purchase.client }}</div>
            </div>
            <div class="item">
              <div>Tel:</div>
              <div>{{ purchase.phoneNumber }}</div>
            </div>
            <div class="item">
              <div>Manzil:</div>
              <div>{{ purchase.location }}</div>
            </div>
            <div class="item">
              <div>Km:</div>
              <div>{{ purchase.km }}</div>
            </div>
          </div>
          <div class="tripSummary mb-2">
            <div class="bold">Avto:<span class="mx-5"
                                         id="technician">{{ getActiveText('technician', purchase.technicianId) }}</span>
            </div>
          </div>
          <div class="mt-3"></div>
          <div class="tripSummary">
            <div class="bold">Imzo:<span class="mx-7">___________</span></div>
          </div>
          <div class="feedback">
            <div class="break mt-2">
              **************************
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
// import qz from 'qz-tray'
import {notification} from "ant-design-vue";
import {getText} from "../../locales";
import router from "../../router";

export default {
  name: "Purchase",
  components: {
    SoftButton,
  },
  data() {
    return {
      dateFormatter: '',
      time: '',
      status: [],
      technicians: [],
      orders: [],
      productType: [],
      paymentTypes: [],
      purchasedProduct: {
        productTypeId: 0,
        weight: 0,
        price: 0,
        value: 0
      },
      purchase: {
        id: 0,
        checkNumber: '',
        date: '',
        client: '',
        phoneNumber: '',
        purchasedProductList: [{
          productTypeId: 0,
          weight: 0,
          price: 0,
          value: 0
        }],
        fare: 0,
        technicianId: 0,
        paymentTypeId: 0,
        orderId: 0,
        expiryDate: '',
        totalValue: 0,
        paidTotalValue: 0,
        debtTotalValue: 0,
        status: 'ACTIVE',
        location: '',
        km: 0,
        description: ''
      }
    }
  },
  methods: {
    currentDate() {
      const current = new Date();
      if ((current.getMonth() + 1).toString().length === 1) {
        this.purchase.date = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
        this.dateFormatter = `${current.getFullYear()}/0${current.getMonth() + 1}/${current.getDate()}`;
      } else {
        this.purchase.date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
        this.dateFormatter = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
      }
      this.time = current.getHours() + ':' + current.getMinutes();
    },
    parseDate() {
      const year = this.purchase.date.substring(0, 4);
      const month = this.purchase.date.substring(5, 7);
      const day = this.purchase.date.substring(8, 10);
      const now = new Date();
      this.time = now.getHours() + ':' + now.getMinutes();
      this.dateFormatter = `${year}/${month}/${day}`;
    },
    calcRemainder() {
      this.purchase.debtTotalValue = this.purchase.totalValue - this.purchase.paidTotalValue;
    },
    calcTotalValue() {
      let tableValue = 0;
      for (let i = 0; i < this.purchase.purchasedProductList.length; i++) {
        tableValue = tableValue + this.purchase.purchasedProductList[i].value;
      }
      this.purchase.totalValue = tableValue + this.purchase.fare;
      this.calcRemainder()
    },
    addValue(index, price, weight) {
      this.purchase.purchasedProductList[index].value = price * weight;
      this.calcTotalValue()
    },
    getProductPrice(index, id) {
      this.$http.get("price-input/" + id + localStorage.getItem('lang')).then(res => {
        this.purchase.purchasedProductList[index].price = res.data
      })
      this.addValue(index, this.purchase.purchasedProductList[index].price, 0)
    },
    save() {
      // let num = router.currentRoute._rawValue.params.id;
      // if (!isNaN(parseInt(num))){
      //   this.remainder.id = parseInt(num);
      // }
      this.$http.post("purchase/add" + localStorage.getItem("lang"), this.purchase).then(res => {
        if (res.status === 201) {
          this.print('receipt')
          notification.success({
            message: `Muvaffaqiyatli saqlandi !`,
            duration: 2
          });
          router.go(-1);
        } else {
          notification.error({
            message: `Xato yuzaga keldi !`,
            duration: 1
          });
        }
      })
    },
    addRow() {
      this.purchase.purchasedProductList.push({productTypeId: 0, weight: 0, price: 0, value: 0})
      notification.success({
        message: `Yangi qator qo'shildi !`,
        duration: 1
      });
    },
    lang(title) {
      return getText(title);
    },
    removeRow(index) {
      this.purchase.purchasedProductList.splice(index, 1);
      notification.warn({
        message: index + 1 + `-qator o'chirildi !`,
        duration: 1
      });
    },
    getTechnicians() {
      this.$http.get("technician/select" + localStorage.getItem('lang')).then(res => {
        this.technicians = res.data
      })
    },
    getOrder(id) {
      this.$http.get("order/" + id + localStorage.getItem('lang')).then(res => {
        this.purchase = res.data
        this.purchase.orderId = id;
        this.purchase.id = 0;
      })
    },
    getOrders() {
      this.$http.get("order/select" + localStorage.getItem('lang')).then(res => {
        this.orders = res.data
      })
    },
    getSelect(name) {
      this.$http.get("references/def/" + name + localStorage.getItem("lang")).then(res => {
        if (name === 'payment_type') {
          this.paymentTypes = res.data;
        } else {
          this.productType = res.data;
        }
      })
    },
    getActiveText(name, id) {
      this.$http.get("references/def-name/" + name + "/" + id + localStorage.getItem("lang")).then(res => {
        if (name === 'r_product_type') {
          const name = document.getElementById('product' + id);
          name.innerText = res.data;
        } else if (name === 'r_payment_type') {
          const name = document.getElementById('payment');
          name.innerText = res.data;
        } else {
          const name = document.getElementById('technician');
          name.innerText = res.data;
        }
      })
    },
    print(divName) {
      let printContents = document.getElementById(divName).innerHTML;
      let originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
      // printJS({
      //   printable: 'receipt',
      //   type: 'html',
      //   modalMessage: "Retrieving Document...",
      //   style: '.print-area { color: red; width: 10px; } .modal-body { width:100% }'
      // });
      // XP-80
      //   qz.websocket.connect().then(() => {
      //     return qz.printers.find("Microsoft Print to PDF");
      //   }).then((found) => {
      //     alert(found);
      //     let config = qz.configs.create(found);
      //     let data = [{
      //       type: 'pixel',
      //       format: 'html',
      //       flavor: 'plain',
      //       data: 'Shonazar jallimisan',
      //       options: {pageWidth: 2.5}
      //     }];
      //     return qz.print(config, data).catch(function (e) {
      //       console.error(e);
      //     });
      //   })
    }
  },
  created() {
    this.getSelect('product_type');
    this.getSelect('payment_type');
    this.getTechnicians();
    this.currentDate();
    this.getOrders();
  }
}
</script>

<style scoped>

#receipt {
  /*font-family: "VT323", monospace;*/
  font-family: cursive;
  color: #1f1f1f;
}

.bold {
  font-weight: bold;
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

.feedback .break {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

/*@media print {*/
#host {
  display: none;
}

/*}*/
</style>
