<template>
  <form @submit.prevent="register">
    <h1>Registro</h1>
    <input type="email" placeholder="Correo Electronico" v-model="email" />
    <input type="password" placeholder="Contraseña" v-model="password" />
    <button class="btn-register" type="submit">Registrarse</button>
  </form>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../auth.js";
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
          auth,
          this.email,
          this.password
        );
        console.log("usuario creado exitosamente", userCredential);
        
        //limpiar campos de formulario
        this.email = "";
        this.password = "";

        //rediccionamiento
        this.$router.push("/");

        
      } catch (error) {
        console.log(error.code, error.message);
      }
    },
  },
};
</script>
