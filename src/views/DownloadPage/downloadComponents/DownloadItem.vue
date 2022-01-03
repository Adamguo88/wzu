<template>
  <div class="container">
    <div
      class="download-item"
      v-for="(item, index) in getNowWebData"
      :key="index"
    >
      <div class="download-app-1">
        <div
          style="padding: 15px"
          class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        >
          <div class="app-text">
            <span class="down-load-span">01</span>
            <p class="down-load-p">{{ item.Block_1_text }}</p>
            <a class="down-load-a" :href="item.Block_1_app">下載</a>
          </div>
          <div class="app-1-img">
            <img class="app-img-style" v-lazy="item.Block_1_img" alt="" />
          </div>
        </div>
        <div
          style="padding: 15px"
          class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        >
          <div class="app-text">
            <span class="down-load-span">02</span>
            <p class="down-load-p">
              {{ item.Block_2_text }}
            </p>
            <a class="down-load-a" :href="item.Block_2_app">下載</a>
          </div>
          <div class="app-1-img">
            <img class="app-img-style" v-lazy="item.Block_2_img" alt="" />
          </div>
        </div>
      </div>
      <div class="download-app-2">
        <div style="padding: 15px">
          <div class="app-text col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <span class="down-load-span">03</span>
            <p class="down-load-p">
              {{ item.Block_3_text }}
            </p>
            <a class="down-load-a" :href="item.Block_3_app">下載</a>
          </div>
          <div class="app-2-img col-xl-12 col-lg-12 col-md-12">
            <div class="col-xl-4 col-lg-4 col-sm-4">
              <img class="app-img-style" v-lazy="item.Block_3_img_01" />
            </div>
            <div class="app-1-img col-xl-4 col-lg-4 col-sm-4">
              <img class="app-img-style" v-lazy="item.Block_3_img_02" />
            </div>
            <div class="app-1-img col-xl-4 col-lg-4 col-sm-4">
              <img class="app-img-style" v-lazy="item.Block_3_img_03" />
            </div>
          </div>
        </div>
      </div>
      <div class="download-app-2">
        <div style="padding: 15px">
          <div class="app-text col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <span class="down-load-span">04</span>
            <p class="down-load-p">
              {{ item.Block_4_text }}
            </p>
            <a class="down-load-a" :href="item.Block_4_app">下載</a>
          </div>
          <div class="app-2-img col-xl-12 col-lg-12 col-md-12">
            <div class="col-xl-4 col-lg-4 col-sm-4">
              <img class="app-img-style" v-lazy="item.Block_4_img_01" />
            </div>
            <div class="app-1-img col-xl-4 col-lg-4 col-sm-4">
              <img class="app-img-style" v-lazy="item.Block_4_img_02" />
            </div>
            <div class="app-1-img col-xl-4 col-lg-4 col-sm-4">
              <img class="app-img-style" v-lazy="item.Block_4_img_03" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "downloaditem",
  props: {
    getNowWebData: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$sm: 576px;
.download-item {
  padding: 80px 0;
  width: 100%;

  .download-app-1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 40px;

    .app-text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 30px;

      .down-load-span {
        font-size: 48px;
        font-weight: bolder;
      }
      .down-load-p {
        padding: 10px 0;
      }
      .down-load-a {
        text-decoration: none;
        font-size: 16px;
        color: white;
        background-color: black;
        padding: 18px 35px;
        transition: all 0.3s ease-out;
      }
    }
    .app-1-img {
      width: 100%;
      display: block;

      .app-img-style {
        width: 100%;
      }
    }

    @media screen and (max-width: $sm) {
      .app-1-img {
        width: 100%;
        display: block;

        .app-img-style {
          width: 100%;
          padding: 15px;
        }
      }
    }
  }
  .download-app-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .app-text {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 40px;

      .down-load-span {
        font-size: 48px;
        font-weight: bolder;
      }
      .down-load-p {
        padding: 10px 0;
      }
      .down-load-a {
        text-decoration: none;
        font-size: 16px;
        color: white;
        background-color: black;
        padding: 18px 35px;
        transition: all 0.3s ease-out;
      }
    }
    .app-2-img {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .app-img-style {
        width: 100%;
        padding-right: 15px;
      }
    }
    @media screen and (max-width: $sm) {
      .app-text {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
      }

      .app-2-img {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        .app-img-style {
          width: 100%;
          padding: 15px;
        }
      }
    }
  }
}
</style>