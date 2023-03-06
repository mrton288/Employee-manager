import { createRouter, createWebHistory } from "vue-router";

/**Page */
import AbstractPage from "../views/pages/AbstractPage.vue";
import CashPage from "../views/pages/CashPage.vue";
import DepositPage from "../views/pages/DepositPage.vue";

const routes = [
    { path: "/abstract", component: AbstractPage },
    { path: "/", component: CashPage },
    { path: "/deposit", component: DepositPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
