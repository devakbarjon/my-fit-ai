import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import FeaturesView from "./views/FeaturesView.vue";
import PricingView from "./views/PricingView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 86, behavior: "smooth" };
    return { top: 0 };
  },
  routes: [
    { path: "/", name: "home", component: HomeView, meta: { title: "Your Goals. Your Plan. Your Progress." } },
    { path: "/features", name: "features", component: FeaturesView, meta: { title: "Features" } },
    { path: "/pricing", name: "pricing", component: PricingView, meta: { title: "Pricing" } },
    { path: "/about", name: "about", component: AboutView, meta: { title: "About MyFitAI" } },
    { path: "/contact", name: "contact", component: ContactView, meta: { title: "Contact" } },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
  ],
});

router.afterEach((to) => {
  document.title = `${to.meta.title ?? "Your Goals. Your Plan. Your Progress."} — MyFitAI`;
});

export default router;
