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

