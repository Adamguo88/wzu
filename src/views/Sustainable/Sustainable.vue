<template>
  <div>
    <div class="river"></div>
    <header-nav />
    <sustainable-components />
    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from "@/components/content/header/HeaderNav";
import FooterNav from "@/components/content/footer/FooterNav";
import SustainableComponents from "./sustainablecomponents/SustainableComponents.vue";

export default {
  name: "about",
  components: {
    HeaderNav,
    FooterNav,
    SustainableComponents,
  },
};
</script>

<style lang="scss" scoped>
.river {
  width: 100%;
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/sustainable/Sustainable.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
}
</style>