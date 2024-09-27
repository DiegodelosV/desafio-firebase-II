<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/signup">Registro</router-link>
      <button @click="logout" v-if="isLoggedIn" class="btn-logout">
        Cerrar sesión
      </button>
    </nav>
  </template>
  
  <script>
  import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
  
  export default {
    name: "NavbarView",
    data() {
      return {
        isLoggedIn: false,
      };
    },
    created() {
      const auth = getAuth();
      
      // Verificar si hay un usuario autenticado
      onAuthStateChanged(auth, (user) => {
        this.isLoggedIn = !!user;
      });
    },
    methods: {
      async logout() {
        const auth = getAuth();
        try {
          await signOut(auth);
          this.isLoggedIn = false; 
          this.$router.push({ name: "login" }); 
        } catch (error) {
          console.log("Error al cerrar sesión:", error.message);
        }
      },
    },
  };
  </script>
  