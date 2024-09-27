<template>
  <form @submit.prevent="login">
    <h1>Iniciar Sesion</h1>
    <input type="email" placeholder="Correo Electronico" v-model="email" />
    <input type="password" placeholder="Contraseña" v-model="password" />
    <button class="btn-login" type="submit">Iniciar Sesion</button>
    <router-link to="/signup">Registrarse</router-link>
  </form>
</template>

<script>
import {auth, signInWithEmailAndPassword } from "../auth.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth,this.email, this.password);
        const redirectpath = this.$route.query.redirect || "/"; // constante de ruta de redireccion

        this.$router.push(redirectpath);//redireccionar a la ruta correspondiente
      } catch (error) {
        console.log("error al iniciar sesion", error.message);
      }
    },
  },
};
</script>
