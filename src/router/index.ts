import { createRouter, createWebHistory } from "vue-router";

import AboutUsPage from "../pages/AboutUsPage.vue";
import HomePage from "../pages/HomePage.vue";
import ProductsList from "../pages/ProductsList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "About",
        component: AboutUsPage,
    },
    {
        path: "/products",
        name: "Products",
        component: ProductsList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
