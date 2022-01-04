<template>
  <div class="carousel">
    <slot :nowpage="nowPage"></slot>

    <div class="navigate" v-if="navControl">
      <div class="toggle-page left" @click="prevSlider">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right" @click="nextSlider">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <div class="pagination" v-if="prevControl">
      <span
        v-for="(pag, index) in allPage"
        :key="index"
        :class="{ pagActive: index + 1 === nowPage }"
        @click="pagination(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
export default {
  name: "caruosel",
  props: ["navIsShow", "prevIsShow", "autoPlay", "timeout"],
  setup(props) {
    const nowPage = ref(1);
    const allPage = ref(null);
    const autoPlay = ref(
      props.autoPlay.isAutoPlay === undefined ? true : props.autoPlay.isAutoPlay
    );
    const playTimeout = ref(props.timeout === undefined ? 5000 : props.timeout);

    const navControl = ref(
      props.navControl === undefined ? true : props.navControl
    );

    const prevControl = ref(
      props.prevIsShow === undefined ? true : props.prevIsShow
    );

    const nextSlider = () => {
      if (nowPage.value === allPage.value) {
        nowPage.value = 1;
        window.clearInterval(newSliderAutoPlay);
        return;
      }
      nowPage.value += 1;
      window.clearInterval(newSliderAutoPlay);
    };

    const prevSlider = () => {
      if (nowPage.value === 1) {
        nowPage.value = 3;
        window.clearInterval(newSliderAutoPlay);
        return;
      }
      nowPage.value -= 1;
      window.clearInterval(newSliderAutoPlay);
    };

    const pagination = (index) => {
      nowPage.value = index + 1;
      window.clearInterval(newSliderAutoPlay);
    };

    // const sliderAutoPlay = () => {
    //   setInterval(() => {
    //     nextSlider();
    //   }, playTimeout.value);
    // };
    
    let newSliderAutoPlay

    if (autoPlay.value) {
      newSliderAutoPlay = window.setInterval(() => {nextSlider()}, playTimeout.value);
      // sliderAutoPlay();
    }

    onMounted(() => {
      allPage.value = document.querySelectorAll(".slide").length;
    });
    watch(nowPage, (newP, oldP) => {
      if (newP !== oldP ) {
        newSliderAutoPlay = window.setInterval(() => {nextSlider()}, playTimeout.value);
      }
    });

    return {
      nowPage,
      allPage,
      nextSlider,
      prevSlider,
      pagination,
      prevControl,
      navControl,
    };
  },
};
</script>

<style lang="scss">
.navigate {
  padding: 0 16px;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.2);

  .toggle-page {
    flex: 1;
  }
  .right {
    display: flex;
    justify-content: flex-end;
  }
  i {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: chocolate;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .pagActive {
    background-color: brown;
  }
}
</style>