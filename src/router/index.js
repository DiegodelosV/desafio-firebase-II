import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";

import { getAuth } from "firebase/auth"; //importar firebase "auth" para uso del la const auth

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },//permite el acceso solo para usuarios autenticados
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => { //"guardian beforeEach" para el acceso solo para usuarios autenticados
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (to.meta.requiresAuth && !user) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
