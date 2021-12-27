<template>
  <div>
    <div class="about"></div>
    <header-nav />
    <about-content :teamdata="data" />
    <footer-nav />
  </div>
</template>

<script>
import AboutContent from "./childcomponents/AboutContent.vue";

import HeaderNav from "@/components/content/header/HeaderNav";
import FooterNav from "@/components/content/footer/FooterNav";

import { reactive } from "@vue/reactivity";
import photo from "../../assets/about/team/leader.jpg";
export default {
  name: "about",
  components: {
    HeaderNav,
    FooterNav,
    AboutContent,
  },
  setup() {
    const data = reactive({
      leader: {
        name: "黃相容",
        position: "組長",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
      team1: {
        name: "張珈芯",
        position: "組員",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
      team2: {
        name: "陳吟靜",
        position: "組員",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
      team3: {
        name: "王姿涵",
        position: "組員",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
      team4: {
        name: "黃筠琪",
        position: "組員",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
      team5: {
        name: "蘇一輪",
        position: "組員",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
      team6: {
        name: "周宛霖",
        position: "組員",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
      team7: {
        name: "郭朝祐",
        position: "組員",
        introduction: "個人簡介個人簡介個人簡介個人簡介個人簡介",
        photo: photo,
      },
    });

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/about/about.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
}
</style>