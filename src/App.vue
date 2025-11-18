<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "/src/components/Header.vue";
import FooterComponent from "/src/components/Footer.vue";

export default {
  components: { HeaderComponent, FooterComponent}
};
</script>
<style>
body {
  background-color: rgb(45, 45, 45);
  margin: 0;
}
</style>
