<template>
  <div class="card m-4">
    <div class="card-header">
      <h6>Qarzdorlikni so'ndirish</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <soft-button class="my-4 mb-2"
                       variant="gradient"
                       color="info"
                       full-width
                       @click="showModal">Qarzdorliklarni ko'rish <i class="fas fa-eye text-sm ms-1"
                                                                     aria-hidden="true"></i></soft-button>
          <a-modal v-model:visible="visible" wrap-class-name="full-modal-to-xxl" width="800px" @ok="getSelectedRows">
            <div>
              <h4>Qarzdorliklar ro'yxati</h4>
              <div class="input-group">
                <span class="input-group-text text-body" @click="searchList(search)"><i class="fas fa-search"
                                                                                        aria-hidden="true"></i></span>
                <input
                    type="text"
                    v-model="search"
                    class="form-control"
                    @keyup.enter="searchList(search)"
                />
              </div>
            </div>
            <div class="mt-4">
              <a-table :row-selection="row" :columns="columns" :data-source="data">
                <template #bodyCell="{ column, text }">
                  <template v-if="column.dataIndex === 'name'">
                    <a>{{ text }}</a>
                  </template>
                </template>
              </a-table>
            </div>
          </a-modal>
        </div>
        <div class="col-md-2">
        </div>
      </div>
      <div class="table-responsive p-0 mb-3">
        <table class="table align-items-center justify-content-center mb-3">
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder  text-center opacity-20"
            >
              ID
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              SANA
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              MIJOZ
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              UMUMIY QIYMATI
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              QARZ QIYMATI
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              KORXONA
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(t,index) in rows" :id="index" v-bind:key="index">
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{ t.id }} </p>
            </td>
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{ t.date }} </p>
            </td>
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{ t.client }} </p>
            </td>
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{ t.totalValue }} </p>
            </td>
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{ t.debtTotalValue }} </p>
            </td>
            <td>
              <p class="text-sm text-center  font-weight-bold mb-0">{{ t.mchj }} </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label>Sana</label>
          <input
              id="date"
              class="form-control"
              type="date"
              v-model="estinguish.date"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Umumiy qarz qiymati</label>
          <input
              class="form-control"
              type="number"
              placeholder="Kiriting"
              v-model="estinguish.debtTotalValue"
              readonly
          />
        </div>
        <div class="col-md-4 mb-3">
          <label>Bermoqchi summa</label>
          <input
              class="form-control"
              type="number"
              @input="calcDebtValue"
              v-model="estinguish.paidValue"
              placeholder="Kiriting"
              required
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label>Qoldiq qarz qiymati</label>
          <input
              class="form-control"
              type="number"
              placeholder="Kiriting"
              v-model="estinguish.remainderDebtValue"
              readonly
          />
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
              @click="save"
          >Saqlash
          </soft-button>
        </div>
        <div class="col-md-3">
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

import {ref, defineComponent} from 'vue';
import SoftButton from "@/components/SoftButton.vue";

const {notification} = require("ant-design-vue");
import router from "../../router";

const selects = [];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    selects.push(selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

export default defineComponent({
  components: {
    SoftButton,
  },
  data() {
    return {
      search: '',
      estinguish: {
        debtTotalValue: 0,
        date: '',
        allDebts: [],
        paidValue: 0,
        remainderDebtValue: 0
      },
      products: [],
      rows: selects,
      rowObject: {},
      productType: [],
      status: [],
      data: [],
      columns: [
        {
          title: 'Id',
          dataIndex: 'id',
        },
        {
          title: 'Sana',
          dataIndex: 'date',
        },
        {
          title: 'Mijoz',
          dataIndex: 'client',
        },
        {
          title: 'Umumiy qiymati',
          dataIndex: 'totalValue',
        },
        {
          title: 'Qarz qiymati',
          dataIndex: 'debtTotalValue',
        },
        {
          title: 'Korxona',
          dataIndex: 'mchj',
        },
      ],
      row: rowSelection
    };
  },
  methods: {
    cancel() {
      router.go(-1);
    },
    save() {
      this.estinguish.allDebts = this.rows;
      this.$http.post("estinguish/save" + localStorage.getItem("lang"), this.estinguish).then(res => {
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
    getList() {
      this.rows = [];
      this.$http.get("purchase/debts" + localStorage.getItem("lang")).then(res => {
        this.data = res.data
      })
    },
    searchList(client) {
      this.$http.get("purchase/debts/searched?client=" + client).then(res => {
        this.data = res.data
        console.log(res.data)
      })
    },
    calcDebtValue() {
      this.estinguish.remainderDebtValue = this.estinguish.debtTotalValue - this.estinguish.paidValue;
    },
    getSelectedRows() {
      let value = 0;
      for (let i = 0; i < selects[selects.length - 1].length; i++) {
        this.rows[i] = selects[selects.length - 1][i];
        value += this.rows[i].debtTotalValue
      }
      this.estinguish.debtTotalValue = value;
      this.visible = false;
      this.calcDebtValue();
    }
  },
  created() {
    this.getList();
  },
  setup() {
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };
    return {visible, showModal};

  }
});

</script>

<style scoped>

</style>
