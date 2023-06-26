import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Form1 from "@/views/forms/Form1";
import Form2 from "@/views/forms/Form2";
import Form3 from "@/views/forms/Form3";
import Form4 from "@/views/forms/Form4";
import Form5 from "@/views/forms/Form5";
import Form6 from "@/views/forms/Form6";

const routes = [
  {
    path: "/home",
    name: "/home",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/forms/1",
    name: "Yem-xashak",
    component: Form1,
  },
  {
    path: "/forms/2",
    name: "Ish xaqi",
    component: Form2,
  },
  {
    path: "/forms/3",
    name: "Oziq-ovqat xarajatlar",
    component: Form3,
  },
  {
    path: "/forms/4",
    name: "Dori-darmon xarajatlar",
    component: Form4,
  },
  {
    path: "/forms/5",
    name: "Kammunal xarajatlar",
    component: Form5,
  },
  {
    path: "/forms/6",
    name: "Transport xarajatlar",
    component: Form6,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
