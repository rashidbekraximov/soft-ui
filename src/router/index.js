import {createRouter, createWebHistory} from "vue-router";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Form4 from "@/views/forms/Form4";
import Form5 from "@/views/forms/Form5";
import Form6 from "@/views/forms/Form6";
import Form7 from "@/views/forms/Form7";
import Form9 from "@/views/forms/Form9";
import Form11 from "@/views/forms/Form11";
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
import AddWorker from "../views/salary/workers/AddWorker";
import Workers from "../views/salary/workers/Workers";
import Technique from "../views/logisitc/technique/Technique";
import Nasos from "../views/nasos/technique/Nasos";
import AddNasos from "../views/nasos/technique/AddNasos";
import AddTechnique from "../views/logisitc/technique/AddTechnique";
import Mixers from "../views/leader-beton/mixer/Mixers";
import AddMixer from "../views/leader-beton/mixer/AddMixer";
import Ingredient from "../views/leader-beton/ingredients/Ingredient";
import AddIngredient from "../views/leader-beton/ingredients/AddIngredient";
// import Mixers from "../views/leader-beton/mixer/Mixers";
import LBPurchase from "../views/leader-beton/purchase/LBPurchase";
import IngredientRemainder from "../views/leader-beton/remainder/IngredientRemainder";
import LBPurchaseList from "../views/leader-beton/purchase/LBPurchaseList";
import Order from "../views/purchase/orders/Order";
import Estinguish from "../views/purchase/Estinguish";
import AddOrder from "../views/purchase/orders/AddOrder";
import Price from "../views/purchase/product-price/Price";
import AddPrice from "../views/purchase/product-price/AddPrice";
import ProductsRemainder from "../views/purchase/products-remainder/ProductsRemainder";
import AddProductRemainder from "../views/purchase/products-remainder/AddProductRemainder";
import SalaryList from "../views/salary/wage/SalaryList";
import AddSalary from "../views/salary/wage/AddSalary";
import Tabel from "../views/salary/Tabel";
import Drobilka from "../views/logisitc/drobilka/Drobilka";
import AddDrobilka from "../views/logisitc/drobilka/AddDrobilka";
import BringDrobilkaProduct from "../views/logisitc/drobilkaProductsComing/BringDrobilkaProduct";
import AddBringDrobilkaProduct from "../views/logisitc/drobilkaProductsComing/AddBringDrobilkaProduct";
import DashboardList from "../views/DashboardList";
import LogisticDashboard from "../views/dashboard/LogisticDashboard";
import Purchase from "../views/purchase/Purchase";
import PurchaseList from "../views/purchase/PurchaseList";
import ReadyProducts from "../views/produce/ready-product/ReadyProducts";
import AddReadyProduct from "../views/produce/ready-product/AddReadyProduct";
import PurchaseDashboard from "../views/dashboard/PurchaseDashboard";
import ProduceDashboard from "../views/dashboard/ProduceDashboard";
import Cost from "../views/produce/cost/Cost";
import AddCost from "../views/produce/cost/AddCost";
import NasosDashboard from "../views/dashboard/NasosDashboard";


const routes = [
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
    //Dashboard
    {
        path: "/dashboard-list",
        name: "Ko'rsatkichlar ro'yxati",
        component: DashboardList,
    },
    {
        path: "/dashboard-logistic",
        name: "Logistika",
        component: LogisticDashboard,
    },
    {
        path: "/dashboard-produce",
        name: "Ishlab chiqarish",
        component: ProduceDashboard,
    },
    {
        path: "/dashboard-purchase",
        name: "Sotuvlar",
        component: PurchaseDashboard,
    },
    {
        path: "/dashboard-nasos",
        name: "Nasos",
        component: NasosDashboard,
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
        path: "/purchase/add",
        name: "Sotish",
        component: Purchase,
    },
    {
        path: "/purchase/list",
        name: "Sotuvlar ro'yxati",
        component: PurchaseList,
    },
    {
        path: "/forms/2",
        name: "Qarzdorlikni so'ndirish",
        component:Estinguish,
    },
    {
        path: "/forms/salary/add",
        name: "Ish haqi qo'shish",
        component: AddSalary,
    },
    {
        path: "/forms/3",
        name: "Ish haqi",
        component: SalaryList,
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
    // {
    //   path: "/forms/13",
    //   name: "Amortizatsiya",
    //   component: Form13,
    // },
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
        path: "/tabel",
        name: "Tabel",
        component: Tabel,
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
    {
        path: "/references/workers",
        name: "Ishchilar ro'yxati",
        component: Workers,
    },
    {
        path: "/references/worker/add",
        name: "Ishchi qo'shish",
        component: AddWorker,
    },
    {
        path: "/references/worker/:id",
        name: "Ishchi qo'shish",
        component: AddWorker,
    },
    //Logistic
    {
        path: "/references/techniques",
        name: "Texnikalar ro'yxati",
        component: Technique,
    },
    {
        path: "/references/technique/add",
        name: "Texnika qo'shish",
        component: AddTechnique,
    },
    {
        path: "/references/technique/:id",
        name: "Texnika qo'shish",
        component: AddTechnique,
    },
    {
        path: "/logistic/products",
        name: "Drobilka va Zavod",
        component: Drobilka,
    },
    {
        path: "/logistic/product/add",
        name: "Mahsulot qo'shish",
        component: AddDrobilka,
    },
    {
        path: "/logistic/product/:id",
        name: "Mahsulotni tahrirlash",
        component: AddDrobilka,
    },
    {
        path: "/logistic/bringingProducts",
        name: "Olib kelingan mahsulotlar",
        component: BringDrobilkaProduct,
    },
    {
        path: "/logistic/bringingProduct/add",
        name: "Olib kelingan mahsulotlarni qo'shish",
        component: AddBringDrobilkaProduct,
    },
    {
        path: "/logistic/bringingProduct/:id",
        name: "Olib kelingan mahsulotlarni tahrirlash",
        component: AddBringDrobilkaProduct,
    },
    {
        path: "/purchase/orders",
        name: "Buyurtmalar ro'yxati",
        component: Order,
    },
    {
        path: "/purchase/order/add",
        name: "Buyurtma qo'shish",
        component: AddOrder,
    },
    {
        path: "/purchase/order/:id",
        name: "Buyurtma tahrirlash",
        component: AddOrder,
    },
    {
        path: "/references/products-price",
        name: "Mahsulot narxlari",
        component: Price,
    },
    {
        path: "/references/product-price/add",
        name: "Narx qo'shish",
        component: AddPrice,
    },
    {
        path: "/references/product-price/:id",
        name: "Narx qo'shish",
        component: AddPrice,
    },
    {
        path: "/references/products-remainder",
        name: "Mahsulotlar qoldig'i",
        component: ProductsRemainder,
    },
    {
        path: "/purchase/product-remainder/add",
        name: "Mahsulot kirimi",
        component: AddProductRemainder,
    },
    // {
    //   path: "/purchase/product-remainder/:id",
    //   name: "Mahsulot qo'shish",
    //   component: AddProductRemainder,
    // },
    //Produce
    {
        path: "/produce/ready-products",
        name: "Tayyor mahsulotlar",
        component: ReadyProducts,
    },
    {
        path: "/produce/ready-product/add",
        name: "Mahsulot qo'shish",
        component: AddReadyProduct,
    },
    {
        path: "/produce/ready-product/:id",
        name: "Mahsulot qo'shish",
        component: AddReadyProduct,
    },
    {
        path: "/produce/costs",
        name: "Ishlab chiqarish xarajatlari",
        component: Cost,
    },
    {
        path: "/produce/cost/add",
        name: "Xarajat qo'shish",
        component: AddCost,
    },
    {
        path: "/produce/cost/:id",
        name: "Xarajat tahrirlash",
        component: AddCost,
    },
    //Nasos
    {
        path: "/nasos/list",
        name: "Nasos ro'yxati",
        component: Nasos,
    },
    {
        path: "/nasos/add",
        name: "Nasos qo'shish",
        component: AddNasos,
    },
    {
        path: "/nasos/add/:id",
        name: "Nasos tahrirlash",
        component: AddNasos,
    },
    //Leader Beton
    {
        path: "/leader-beton/mixers",
        name: "Mikserlar ro'yxati",
        component: Mixers,
    },
    {
        path: "/leader-beton/mixer/add",
        name: "Mikser qo'shish",
        component: AddMixer,
    },
    {
        path: "/leader-beton/mixer/:id",
        name: "Mikser tahrirlash",
        component: AddMixer,
    },
    {
        path: "/leader-beton/purchase",
        name: "Sotuv",
        component: LBPurchase,
    },
    {
        path: "/leader-beton/purchase-list",
        name: "Sotuvlar ro'yhati",
        component: LBPurchaseList,
    },
    {
        path: "/leader-beton/purchase/:id",
        name: "Sotuvni tahrirlash",
        component: LBPurchase,
    },
    {
        path: "/leader-beton/ingredients",
        name: "Beton tarkibi",
        component: Ingredient,
    },
    {
        path: "/leader-beton/ingredient/add",
        name: "Tarkib qo'shish",
        component: AddIngredient,
    },
    {
        path: "/leader-beton/ingredient/:id",
        name: "Tarkibni tahrirlash",
        component: AddIngredient,
    },
    {
        path: "/leader-beton/remainder",
        name: "Tarkib qoldig'i",
        component: IngredientRemainder,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
});

router.beforeEach((to) => {
    if (to.name !== 'Login' && localStorage.getItem("expiry") !== null && Date.now() > parseInt(localStorage.getItem("expiry"))) {
        localStorage.clear();
        location.reload();
        return '/';
    }
    store.state.isAbsolute = to.name === 'Profile';
})
export default router;
