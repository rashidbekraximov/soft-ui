<template>
  <div class="container-fluid">
    <div
        class="mt-4 page-header min-height-300 border-radius-xl"
        :style="{
        backgroundImage:
          'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
                src="@/assets/img/pro.png"
                alt="profile_image"
                class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ user.firstName }} {{ user.lastName }}</h5>
            <p class="mb-0 text-sm font-weight-bold"> {{ role }}</p>
          </div>
        </div>
        <div
            class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <ul
                class="p-1 bg-transparent nav nav-pills nav-fill"
                role="tablist"
            >
              <li class="nav-item">
                <a
                    class="px-0 py-1 mb-0 nav-link active"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="true"
                >
                  <svg
                      class="text-dark"
                      width="16px"
                      height="16px"
                      viewBox="0 0 42 42"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                      <g
                          transform="translate(-2319.000000, -291.000000)"
                          fill="#FFFFFF"
                          fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(603.000000, 0.000000)">
                            <path
                                class="color-background"
                                d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                            ></path>
                            <path
                                class="color-background"
                                d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                opacity="0.7"
                            ></path>
                            <path
                                class="color-background"
                                d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                opacity="0.7"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">App</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="px-0 py-1 mb-0 nav-link"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                >
                  <svg
                      class="text-dark"
                      width="16px"
                      height="16px"
                      viewBox="0 0 40 44"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>document</title>
                    <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                      <g
                          transform="translate(-1870.000000, -591.000000)"
                          fill="#FFFFFF"
                          fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(154.000000, 300.000000)">
                            <path
                                class="color-background"
                                d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                opacity="0.603585379"
                            ></path>
                            <path
                                class="color-background"
                                d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">Messages</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="px-0 py-1 mb-0 nav-link"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                >
                  <svg
                      class="text-dark"
                      width="16px"
                      height="16px"
                      viewBox="0 0 40 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>settings</title>
                    <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                      <g
                          transform="translate(-2020.000000, -442.000000)"
                          fill="#FFFFFF"
                          fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(304.000000, 151.000000)">
                            <polygon
                                class="color-background"
                                opacity="0.596981957"
                                points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                            ></polygon>
                            <path
                                class="color-background"
                                d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                opacity="0.596981957"
                            ></path>
                            <path
                                class="color-background"
                                d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="col-12 col-md-8">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Foydalanuvchi qo'shish</h6>
          </div>
          <div class="p-3 card-body">
            <div class="row mb-3">
              <div class="col-md-4 d-none">
                <label>Ism</label>
                <input
                    class="form-control"
                    type="number"
                    placeholder="Kiriting"
                    name="password"
                    v-model="activeUser.id"
                    required
                />
              </div>
              <div class="col-md-4">
                <label>Ism</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Kiriting"
                    name="password"
                    v-model="activeUser.firstName"
                    required
                />
              </div>
              <div class="col-md-4">
                <label>Familiya</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Kiriting"
                    name="password"
                    v-model="activeUser.lastName"
                    required
                />
              </div>
              <div class="col-md-4">
                <label>Sharifi</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Kiriting"
                    name="password"
                    required
                    v-model="activeUser.middleName"
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4">
                <label class="mb-2">Tug'ulgan sana</label>
                <input
                    class="form-control"
                    type="date"
                    placeholder="Kiriting"
                    name="password"
                    v-model="activeUser.birthday"
                    required
                />
              </div>
              <div class="col-md-4">
                <label>Email</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Kiriting"
                    name="email"
                    v-model="activeUser.email"
                    required
                />
              </div>
              <div class="col-md-4">
                <label>Telefon raqami</label>
                <input
                    class="form-control"
                    type="text"
                    autocomplete="off"
                    v-model="activeUser.login"
                    placeholder="Kiriting"
                    name="password"
                    required
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4">
                <label class="mb-2">Parol</label>
                <input
                    class="form-control"
                    type="password"
                    placeholder="Kiriting"
                    name="password"
                    autocomplete="off"
                    v-model="activeUser.password"
                    required
                />
              </div>
              <div class="col-md-4">
                <label>Hujjat seriya raqami</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Kiriting"
                    name="password"
                    v-model="activeUser.documentSerialNumber"
                    required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label class="mb-2">Jinsi</label>
                <select class="form-select" v-model="activeUser.gender">
                  <option selected>Tanlang...</option>
                  <option value="MALE">Erkak</option>
                  <option value="FEMALE">Ayol</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4 mb-3">
                <label class="mb-2">Tizimdagi lavozimi</label>
                <select class="form-select" v-model="activeUser.systemRoleName">
                  <option selected>Tanlang...</option>
                  <option value="SYSTEM_ROLE_SUPER_ADMIN">Super Admin</option>
                  <option value="ADMIN">Admin</option>
                  <option value="MEMBER">Member</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label class="mb-2">MTP</label>
                <select class="form-select" v-model="activeUser.clusterId">
                  <option selected>Tanlang...</option>
                  <option value="1">BAGAT MTP MCHJ</option>
                  <option value="2">KHANQA MTP MCHJ</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label class="mb-2">Holati</label>
                <select class="form-select" v-model="activeUser.enabled">
                  <option selected>Tanlang...</option>
                  <option value="true">Faol</option>
                  <option value="false">Passiv</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8"></div>
              <div class="col-md-2">
                <soft-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    @click="save"
                    full-width="true"
                >Saqlash
                </soft-button>
              </div>
              <div class="col-md-2">
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
        </div>
      </div>
      <div class="mt-4  col-md-4 mt-xl-0">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Foydalanuvchilar</h6>
          </div>
          <div class="p-3 card-body">
            <ul class="list-group">
              <li
                  class="px-0 border-0 list-group-item d-flex align-items-center"
                  v-for="(userOne,index) in users" v-bind:key="index"
              >
                <soft-avatar
                    class="me-3"
                    :img="index % 2 === 1 ? nick : peterson"
                    alt="kal"
                    border-radius="lg"
                    shadow="regular"
                />
                <div
                    class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">{{userOne.firstName}}  {{userOne.lastName}}</h6>
                  <p class="mb-0 text-xs">Hi! I need more information..</p>
                </div>
                <a
                    class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                     @click="getUserById(userOne.id)"
                >Reply</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SoftSwitch from "@/components/SoftSwitch.vue";
// import ProfileInfoCard from "./components/ProfileInfoCard.vue";
import SoftAvatar from "@/components/SoftAvatar.vue";
import nick from "@/assets/img/team-3.jpg";
import peterson from "@/assets/img/team-4.jpg";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import SoftButton from "@/components/SoftButton.vue";
import {notification} from "ant-design-vue";

export default {
  name: "ProfileOverview",
  components: {
    SoftButton,
    SoftAvatar,
  },
  data() {
    return {
      user: {},
      activeUser:{},
      users: [],
      role: '',
      showMenu: false,
      nick,
      peterson,
      faFacebook,
      faTwitter,
      faInstagram,
    };
  },
  methods: {
    getUserList() {
      this.$http.get("users").then(res => {
        this.users = res.data
      })
    },
     getUserById(id) {
      this.$http.get("user/" + id).then(res => {
        this.activeUser = res.data
      })
    },
    save() {
      console.log(this.activeUser)
      this.$http.post("user/save",this.activeUser).then(res => {
        console.log(res.data)
        if (res.status === 201){
          notification.success({
            message: 'Muvaffaqiyatli saqlandi !',
            duration: 2
          });
          this.activeUser = res.data
          this.getUserList();
        }else{
          notification.error({
            message: 'Saqlashda xatolik yuzaga keldi !',
            duration: 1
          });
        }

      })
    },
    getProfileData() {
      this.user = this.$store.getters.account
      console.log(this.user)
      this.activeUser = this.user
      if (this.user.systemRoleName === 'SYSTEM_ROLE_SUPER_ADMIN') {
        this.role = 'Super Admin';
      }
    }
  },
  created() {
    this.getProfileData();
    this.getUserList();
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>
