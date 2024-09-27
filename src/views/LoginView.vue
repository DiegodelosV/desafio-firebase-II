<template>
  <form @submit.prevent="login">
    <h1>Iniciar Sesion</h1>
    <input type="email" placeholder="Correo Electronico" v-model="email" />
    <input type="password" placeholder="Contraseña" v-model="password" />
    <button type="submit">Iniciar Sesion</button>
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
      } catch (error) {
        console.log("error al iniciar sesion", error.message);
      }
    },
  },
};
</script>
