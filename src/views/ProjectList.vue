<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-4 mb-2" v-for="(project,index) in projects" v-bind:key="index" @click="selectProject(project)">
        <div class="card h-100 p-3">
          <div
              class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
              style="
              background-image: url('https://demos.creative-tim.com/soft-ui-dashboard/assets/img/ivancik.jpg');
            "
          >
            <span class="mask bg-gradient-dark"></span>
            <div class="card-body position-relative z-index-1 p-3 h-100">
              <div class="d-flex flex-column h-100">
                <h5 class="text-white font-weight-bolder mb-4 pt-2">
                  Work with the rockets {{project}}
                </h5>
                <p class="text-white mb-5">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
                <a
                    class="text-white font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
                    href="javascript:;"
                >
                  Read more
                  <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import {mapMutations} from "vuex";
import store from "../store";
import router from "../router";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "Projects",
  components: {
  },
  data() {
    return {
      projects:[1,2,3,4,5,6],
      loginVM : {
        login: '',
        password: ''
      },
      rememberMe: true
    }
  },
  created() {
    store.state.showNavbar = false;
    store.state.showSidenav = false;
    store.state.showFooter = false;
    store.state.hideConfigButton = true;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    selectProject(name){
      localStorage.setItem("project",name)
      router.push("/dashboard")
    }
  }
};
</script>
