import { createRouter, createWebHistory } from "vue-router";

/**Page */
import AbstractPage from "../views/AbstractPage.vue";
import CashPage from "../views/CashPage.vue";
import DepositPage from "../views/DepositPage.vue";

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
