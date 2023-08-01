<template>
  <aside
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="isRTL ? 'me-3 rotate-caret' : 'ms-3'"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="m-0 navbar-brand" href="/documents">
        <img :src="logo" class="navbar-brand-img h-100 mx-2" width="70" height="90" alt="main_logo" />
        <span class="ms-1 font-weight-bold mx-4">{{this.lang("mtp")}}</span>
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :cardBg="customClass" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-ct.png";
import { mapState } from "vuex";
import {getText} from "../../locales";

export default {
  name: "index",
  components: {
    SidenavList,
  },
  data() {
    return {
      logo,
    };
  },
  methods: {
    lang(title){
      return getText(title);
    },
  },
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState(["isRTL"]),
  },
};
</script>
