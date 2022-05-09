<template>
  <div class="container">
    <div class="river-content">
      <div class="river-content">
        <div
          class="
            col-xl-12 col-lg-12 col-md-10 col-sm-10 col-10
            d-flex
            align-items-center
            justify-content-center
            flex-wrap
          "
        >
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-10 col-10">
            <div class="river-photo">
              <router-link to="/downloadpage/:data" @click="downloadpage(3)">
                <img
                  class="river-img"
                  v-lazy="
                    require('@/assets/sustainable/Sustainable-patting-1.png')
                  "
                  alt=""
                />
              </router-link>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-10 col-10">
            <div class="river-photo">
              <div class="pc-book-title mb-3">
                氣候變遷 AR 繪本_旺仔的春夏秋冬
              </div>
              <div class="pc-book-intro mb-3">
                植物成長的生命歷程中，會經理哪些過程呢？可愛的旺仔會帶你們大家一起前往發掘植物的秘密，瞭解植物構造。事不宜遲一起來看吧！
              </div>
              <div class="into-btn-style">
                <button class="down-load-btn-style btn">
                  <router-link
                    class="into-link"
                    to="/downloadpage/:data"
                    @click="downloadpage(3)"
                    >進入</router-link
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            col-xl-12 col-lg-12 col-md-10 col-sm-10 col-10
            d-flex
            align-items-center
            justify-content-center
            flex-wrap
          "
        >
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-10 col-10">
            <div class="river-photo">
              <router-link to="/downloadpage/:data" @click="downloadpage(4)">
                <img
                  class="river-img"
                  v-lazy="
                    require('@/assets/sustainable/Sustainable-patting-2.png')
                  "
                  alt=""
                />
              </router-link>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-10 col-10">
            <div class="river-photo">
              <div class="pc-book-title mb-3">
                植物成長 AR 繪本_與小鳳探索植物奧妙
              </div>
              <div class="pc-book-intro mb-3">
                身為小小採訪員的小鳳來到了幸福農場，遇到了農場的主人-老伯伯。小鳳會向伯伯採訪什麼樣的問題呢？在這之間小鳳又會有哪些體驗呢？
                <br />
                趕快進入跟著小鳳一起探索植物奧妙吧！
              </div>
              <div class="into-btn-style">
                <button class="down-load-btn-style btn">
                  <router-link
                    class="into-link"
                    to="/downloadpage/:data"
                    @click="downloadpage(4)"
                    >進入</router-link
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            col-xl-12 col-lg-12 col-md-10 col-sm-10 col-10
            d-flex
            align-items-center
            p-4
          "
        >
          <div class="download-game">
            <div class="download-game-text mb-3">
              <div class="down-load-game-title mb-3">遊戲下載</div>
              <button class="down-load-btn btn my-btn-color">
                <a
                  class="down-load-a"
                  target="_black"
                  href="https://drive.google.com/drive/folders/1u6fXBKBTD1OkL9O7p5C8W_Gmqac-zd15"
                  >下載</a
                >
              </button>
            </div>
            <div class="download-game-img">
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-10 pe-1">
                <img
                  class="river-img"
                  v-lazy="require('@/assets/river/download-img/1.jpg')"
                  alt=""
                />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-10 pe-1">
                <img
                  class="river-img"
                  v-lazy="require('@/assets/river/download-img/2.jpg')"
                  alt=""
                />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-10 pe-1">
                <img
                  class="river-img"
                  v-lazy="require('@/assets/river/download-img/3.jpg')"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "rivercomponents",
  setup() {
    const router = useRouter();

    const downloadpage = (num) => {
      router.push({
        name: "downloadpage",
        params: { data: num },
      });
    };
    return {
      downloadpage,
    };
  },
};
</script>

<style lang="scss" scoped>
.river-content {
  padding: 80px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .river-photo {
    width: 100%;
    padding: 25px;
    display: block;

    .river-img {
      display: block;
      width: 100%;
      border-radius: 15px;
    }

    .pc-book-title {
      font-weight: bold;
      font-size: 24px;
    }
    .pc-book-intro {
      text-indent: 2rem;
    }

    .into-btn-style {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .down-load-btn-style {
        color: white;
        background-color: #039552 !important;
        border-color: #039552;
      }

      .into-link {
        text-decoration: none;
        color: white;
      }
    }
  }
  .download-game {
    width: 100%;
    .download-game-text {
      width: 100%;
      .down-load-game-title {
        font-size: 22px;
        font-weight: 500;
      }
      .down-load-btn {
        color: white;
        background-color: #039552 !important;
        border-color: #039552;
        .down-load-a {
          text-decoration: none;
          color: white;
        }
      }
    }
    .download-game-img {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .river-img {
        width: 100%;
        display: block;
        border-radius: 15px;
      }
    }
  }
}
</style>