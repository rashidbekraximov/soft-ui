<template>
  <div v-if="id === 1 ">

    <sidenav
        class=""
        :custom_class="this.$store.state.mcolor"
        :class="[
      this.$store.state.isTransparent,
      this.$store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
        v-if="this.$store.state.showSidenav"
    />
    <main
        class=" main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    >
      <navbar
          :class="[navClasses, this.$store.state.navColor]"
          :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : ''"
          :minNav="navbarMinimize"
          v-if="this.$store.state.showNavbar"
      />
      <router-view/>
      <app-footer v-show="this.$store.state.showFooter" />
      <configurator
          :toggle="toggleConfigurator"
          :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : '',
      ]"
      />
    </main>

  </div>
  <div v-else>
    <sign-in></sign-in>
  </div>
<!--  <router-link to="/login"></router-link>-->
</template>
<script>
import Sidenav from "./examples/Sidenav";
import SignIn from "@/views/SignIn.vue";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    Sidenav,
    SignIn,
    Configurator,
    Navbar,
    AppFooter,
  },
  data(){
    return{
      id: 0,
    }
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": this
          .$store.state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
  created() {
    if (localStorage.getItem("lang") !== null){
      this.id = 1;
    }else {
      this.id = 0;
    }
  }
};
</script>
<style>
body {
  overflow-x: hidden;
}
</style>