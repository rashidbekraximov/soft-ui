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
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <div class="input-group">
            <span class="input-group-text text-body"
              ><i class="fas fa-search" aria-hidden="true"></i
            ></span>
            <input
              type="text"
              class="form-control"
              :placeholder="
                this.$store.state.isRTL ? 'أكتب هنا...' : 'Type here...'
              "
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

          <li
            class="nav-item dropdown d-flex align-items-center"
            :class="this.$store.state.isRTL ? 'ps-2' : 'pe-2'"
          >
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
              <img :src="this.lang !== '?lang=ru' ? uzb : rus" width="30" height="30" class="cursor-pointer fixed-plugin-button-nav">
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
          <li class="nav-item dropdown d-flex align-items-center mx-2 cursor-pointer" data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Logout"
              aria-label="Logout" @click="logout" >
            <img src="@/assets/img/logout.png" alt="Logout" width="35" height="35">
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
import router from "../../router";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
      uzb,
      rus,
      lang: "?lang=uz_lat"
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    logout(){
      localStorage.clear();
      sessionStorage.clear();
      router.push("/");
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
