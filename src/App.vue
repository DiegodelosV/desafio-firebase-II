<template>
  <NavbarView />

  <main>
    <router-view />
  </main>
</template>

<script>
import NavbarView from "./components/NavbarView.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavbarView,
  },
};

</script>
