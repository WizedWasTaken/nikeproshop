<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.disable-scroll {
  overflow: hidden;
}
</style>
