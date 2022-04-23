<template>
  <div>
    <div class="video"></div>
    <header-nav />
    <video-link />
    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from "@/components/content/header/HeaderNav";
import FooterNav from "@/components/content/footer/FooterNav";
import VideoLink from './VideoLink';

export default {
  name: "about",
  components: {
    HeaderNav,
    FooterNav,
    VideoLink
  },
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/video/1.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
}
</style>