<template>
  <div class="home">
    <carousel
      class="carousel"
      v-slot="{ nowpage }"
      :navIsShow="true"
      :prevIsShow="true"
      :autoPlay="{isAutoPlay}"
      :timeout="5500"
    >
      <slider v-for="(item, index) in sliderCount" :key="index">
        <div class="slide" v-show="nowpage === index + 1">
          <img :src="require(`@/assets/slider/${item}.jpg`)" alt="" />
        </div>
      </slider>
    </carousel>
  </div>
  <header-nav />
</template>

<script>
import HeaderNav from "@/components/content/header/HeaderNav";
import carousel from "@/components/content/carousel/carousel";
import slider from "@/components/content/carousel/slider";
import {ref} from 'vue'
export default {
  name: "Home",
  components: {
    HeaderNav,
    carousel,
    slider
  },
  setup() {
    
    const sliderCount = ref(["bg-1", "bg-2", "bg-3","bg-4"]);
    const isAutoPlay = ref(true)


    return {
      sliderCount,
      isAutoPlay
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;

  .carousel {
    position: relative;
    width: 100vw;
    height: 100vh;

    .slide {
      position: absolute;
      width: 100vw;
      height: 100vh;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
