<template>
  <nav
    class=" shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :textWhite="textWhite" />
      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center m-4">
            <a
              href="#"
              @click="toggleSidebar"
              class="p-0 nav-link text-body"
              id="iconNavbarSidenav"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li class="nav-item dropdown d-flex align-items-center">
            <a
              href="#"
              class="p-0 nav-link"
              :class="[
                textWhite ? textWhite : 'text-body',
                showMenu ? 'show' : '',
              ]"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <img :src="this.lang !== '?lang=ru' ? uzb : rus" width="30" height="30" class="cursor-pointer fixed-plugin-button-nav" alt="Lang">
            </a>
            <ul
              class="px-2 dropdown-menu dropdown-menu-end me-sm-n2"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
              <li @click="changeLogo(1)">
                <a class="dropdown-item border-radius-md">
                  <div class="d-flex">
                      <img
                           src="../../assets/img/uzb.png"
                           class="avatar avatar-sm me-3"
                           alt="user image"
                      >
                    <div class="d-flex flex-column justify-content-center">
                      <p class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">UZB</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="changeLogo(2)">
                <a class="dropdown-item border-radius-md">
                  <div class="d-flex">
                    <div class="my-auto">
                      <img
                          src="../../assets/img/uzb.png"
                          class="avatar avatar-sm me-3"
                          alt="user image"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <p class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">УЗБ</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="changeLogo(3)">
                <a class="dropdown-item border-radius-md">
                  <div class="d-flex">
                    <div class="my-auto">
                      <img
                          src="../../assets/img/rus.png"
                          class="avatar avatar-sm me-3 w-auto"
                          alt="user image"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <p class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">RUS</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown m-2 d-flex align-items-center">
            <a
                id="dropdownMenuButtonBell"
                href="#"
                class="p-0 nav-link"
                :class="[
                textWhite ? textWhite : 'text-body',
                showMenuBell ? 'show' : '',
              ]"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="showMenuBell = !showMenuBell"
            >
              <img class="cursor-pointer position-relative" src="@/assets/img/icons/bell.png" width="25" height="25"  alt="Image"/>
<!--              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">5+</span>-->
            </a>
            <ul
                class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4"
                :class="showMenuBell ? 'show' : ''"
                aria-labelledby="dropdownMenuButtonBell"

            >
              <li v-for="(d,index) in debts" :id="index" v-bind:key="index">
                <span class="d-none">{{d.id}}</span>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto avatar avatar-sm bg-gradient-secondary me-3">
                      <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 43 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>credit-card</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(453.000000, 454.000000)">
                                <path
                                    class="color-background"
                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                    opacity="0.593633743"
                                />
                                <path
                                    class="color-background"
                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">{{d.client}}</h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        {{d.days}}  kun
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown d-flex align-items-center mx-2 cursor-pointer" data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Logout"
              aria-label="Logout" @click="logout" >
            <a href="/">
              <img src="@/assets/img/logout.png" alt="Logout" width="35" height="35">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapActions } from "vuex";
import uzb from "@/assets/img/uzb.png";
import rus from "@/assets/img/rus.png";

// const store = require("../../store");
// import router from "../../router";

export default {
  name: "navbar",
  data() {
    return {
      debts:[],
      showMenu: false,
      showMenuBell: false,
      uzb,
      rus,
      lang: "?lang=uz_lat"
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
    this.getDebtList();
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),
    getDebtList() {
      if (localStorage.getItem("lang") !== null) {
        this.$http.get("purchase/debt").then(res => {
          this.debts = res.data
        })
      }
    },
    logout(){
      localStorage.clear();
      sessionStorage.clear();
      // router.push("/");
    },
    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },

    changeLogo(id){
        this.lang = localStorage.getItem("lang");
        if (id === 1){
          localStorage.setItem("lang","?lang=uz_lat")
        }else if (id === 2){
          localStorage.setItem("lang","?lang=uz_kir")
        } else {
          localStorage.setItem("lang","?lang=ru")
        }
      location.reload();
        console.log(this.$store.state.lang)
    }
  },
  components: {
    Breadcrumbs,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  updated() {
    const navbar = document.getElementById("navbarBlur");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10 && this.$store.state.isNavFixed) {
        navbar.classList.add("blur");
        navbar.classList.add("position-sticky");
        navbar.classList.add("shadow-blur");
      } else {
        navbar.classList.remove("blur");
        navbar.classList.remove("position-sticky");
        navbar.classList.remove("shadow-blur");
      }
    });
  },
};
</script>
