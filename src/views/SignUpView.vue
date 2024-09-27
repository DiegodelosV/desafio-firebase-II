<template>
  <form @submit.prevent="register">
    <h1>Registro</h1>
    <input type="text" placeholder="Correo Electronico" v-model="email" />
    <input type="password" placeholder="Contraseña" v-model="password" />
    <button type="submit">Registrarse</button>
  </form>
</template>

<script>
import { createUserWithEmailAndPassword } from "../auth.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        console.log(userCredential, "usuario creado exitosamente");
      } catch (error) {
        console.log(error.code, error.message);
      }
    },
  },
};
</script>
