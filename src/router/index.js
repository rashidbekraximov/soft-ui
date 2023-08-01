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
import Form7 from "@/views/forms/Form7";
import Form9 from "@/views/forms/Form9";
import Form11 from "@/views/forms/Form11";
import Form13 from "@/views/forms/Form13";
import Form15 from "@/views/forms/Form15";
import Form8 from "@/views/forms/Form8";
import Form10 from "@/views/forms/Form10";
import Form12 from "@/views/forms/Form12";
import Form14 from "@/views/forms/Form14";
import Form16 from "@/views/forms/Form16";
import Documents from "@/views/Documents";
import Taxes from "../views/reference/taxes/Taxes";
import SimilarInformations from "../views/reference/SimilarInformations";
import AddTaxes from "../views/reference/taxes/AddTaxes";
import store from "../store";

const routes = [
  {
    path: "/home",
    name: "/home",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: {
      requiresAuth: true,
    },
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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/",
    name: "Login",
    component: SignIn,
  },
  {
    path: "/documents",
    name: "Documents",
    component: Documents,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/forms/1",
    name: "Extiyot-qism",
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
  {
    path: "/forms/7",
    name: "Extiyot qism xarajatlar",
    component: Form7,
  },
  {
    path: "/forms/8",
    name: "Yoqilg'i xarajati",
    component: Form8,
  },
  {
    path: "/forms/9",
    name: "Kredit foizlari",
    component: Form9,
  },
  {
    path: "/forms/10",
    name: "Yem-xashak xarajatlari",
    component: Form10,
  },
  {
    path: "/forms/11",
    name: "Sotish xarajati",
    component: Form11,
  },
  {
    path: "/forms/12",
    name: "Boshqa xarajatlar",
    component: Form12,
  },
  {
    path: "/forms/13",
    name: "Amortizatsiya",
    component: Form13,
  },
  {
    path: "/forms/14",
    name: "Bank xizmatlari",
    component: Form14,
  },
  {
    path: "/forms/15",
    name: "So'yish xarajati",
    component: Form15,
  },
  {
    path: "/forms/16",
    name: "So'yilgan mollardan olingan daromad",
    component: Form16,
  },
  //References
  {
    path: "/references/taxes",
    name: "Soliqlar",
    component: Taxes,
  },
  {
    path: "/references/taxes/add",
    name: "Soliq qoshish",
    component: AddTaxes,
  },
  {
    path: "/references/taxes/:id",
    name: "Soliq qoshish",
    component: AddTaxes,
  },
  {
    path: "/references/def_references",
    name: "O'xshash malumotlar",
    component: SimilarInformations,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to) => {
  if (to.name !== 'Login' && localStorage.getItem("token") === null) {
    return '/'
  }

  if (to.name === 'Profile'){
    store.state.isAbsolute = true;
  }else{
    store.state.isAbsolute = false;
  }

})
export default router;
