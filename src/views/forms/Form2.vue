<template>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row my-4">
        <div class="card col-lg-8 col-md-6 mb-md-0 mb-4">
          <div class="row mb-3 mt-3">
            <div class="col-md-6">
              <label>Mavsum</label>
              <select class="form-select">
                <option selected>Tanlang...</option>
                <option value="FEMALE">2023</option>
              </select>
            </div>
            <div class="col-md-6">
              <label>Yuk xati raqami</label>
              <input
                  id="password"
                  class="form-control"
                  type="text"
                  placeholder="Kiriting"
                  v-model="product"
                  required
              />
            </div>
          </div>
          <div class="row">
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
              <h1 class="logo">CVS/pharm</h1>
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
                  <div>.{{product}}</div>
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
import {notification} from "ant-design-vue";
// import printJS from 'print-js'
import qz from 'qz-tray'

export default {
  name: "Form2",
  components: {
    SoftButton,
  },
  data() {
    return {
      product: '',
      tableRows: [{name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: ''}]
    }
  },
  methods: {
    addRow() {
      this.tableRows.push({name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: ''})
      notification.success({
        message: `Yangi qator qo'shildi !`,
        duration: 1
      });
    },
    removeRow(index) {
      this.tableRows.splice(index, 1);
      notification.warn({
        message: index + 1 + `-qator o'chirildi !`,
        duration: 1
      });
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