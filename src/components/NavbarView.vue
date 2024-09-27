<template>
  <nav>
    <router-link v-if="isLoggedIn"  to="/">Home</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <router-link v-if="!isLoggedIn" to="/signup">Registro</router-link>
    <button @click="logout" v-if="isLoggedIn" class="btn-logout">
      cerrar sesion
    </button>
  </nav>
</template>

<script>
import { auth, signOut, onAuthStateChanged } from "../auth.js";

export default {
  name: "NavbarView",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user;
    });
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.$router.push({ name: "/login" });
      } catch (error) {
        console.log("error al cerrar sesion", error.message);
      }
    },
  },
};
</script>
