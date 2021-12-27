<template>
  <div>
    <div class="river"></div>
    <header-nav />
    <river-components />
    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from "@/components/content/header/HeaderNav";
import FooterNav from "@/components/content/footer/FooterNav";
import RiverComponents from "./rivercomponents/RiverComponents";
export default {
  name: "about",
  components: {
    HeaderNav,
    FooterNav,
    RiverComponents,
  },
};
</script>

<style lang="scss" scoped>
.river {
  width: 100%;
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/river/River.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
}
</style>