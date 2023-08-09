<template>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    MTP MCHJ
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start" @submit.prevent="authentication">
                      <label>Login</label>
                      <soft-input
                          id="login"
                          type="text"
                          placeholder="Login"
                          name="login"
                          @input="event => loginVM.login = event.target.value"
                      />
                      <label>Password</label>
                      <soft-input
                          id="password"
                          type="password"
                          placeholder="Password"
                          name="password"
                          @input="event => loginVM.password = event.target.value"
                          required
                      />
                    <soft-switch id="rememberMe" v-model="rememberMe" name="rememberMe" checked>
                      Remember me
                    </soft-switch>
                    <div class="text-center">
                      <soft-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="success"
                        full-width
                        >Sign in
                      </soft-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none">
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/curved-images/tractor-field.jpg') +
                      ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SoftInput from "@/components/SoftInput.vue";
import SoftSwitch from "@/components/SoftSwitch.vue";
import SoftButton from "@/components/SoftButton.vue";
import axios from "axios";
import {mapMutations} from "vuex";
import router from "@/router";
import {notification} from 'ant-design-vue';
import store from "../store";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "SignIn",
  components: {
    SoftInput,
    SoftSwitch,
    SoftButton,
  },
  data() {
      return {
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
    authentication() {
      if (this.loginVM.username !== "" && this.loginVM.password !== "") {
        console.log(this.loginVM.login);
        axios.post('http://localhost:3030/api/auth/login', this.loginVM, {
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            accept: "*/*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": true,
            expires: "0",
            "cache-control": "no-cache,no-store,max-age=0,must-revalidate",
            pragma: "no-cache",
          }
        }).then((res) => {
          console.log(res)
          if (res.data.success) {
            store.commit("authenticated", res.data.data.user);
            localStorage.setItem("lang","?lang=uz_lat")
            notification.success({
              message: 'Siz tizimga muvaffaqiyatli kirdingiz !',
              duration: 2
            });
            const token = res.data.data.accessToken;
            console.log(token)
            router.push("/dashboard");

            if (this.rememberMe) {
              console.log(this.rememberMe);
              localStorage.setItem("token", token);
            } else {
              sessionStorage.setItem("token", token);
            }
            store.state.hideConfigButton = true;
            // this.toggleEveryDisplay();
            // this.toggleHideConfig();
          } else {
            this.addClassForInput();
            notification.error({
              message: 'Login yoki parol xato !',
              duration: 1
            });
          }
        });
      }
    },

    addClassForInput() {
      let element = document.getElementsByClassName("form-control");
      element[0].className += " is-invalid";
      element[1].className += " is-invalid";
    }
  }
};
</script>
