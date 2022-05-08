<template>
  <div class="container">
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
            <router-link to="/downloadpage/:data" @click="downloadpage(1)">
              <img
                class="river-img"
                v-lazy="require('@/assets/river/River-patting-1.jpg')"
                alt=""
              />
            </router-link>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-10 col-10">
          <div class="river-photo">
            <div class="pc-book-title mb-3">
              續環境 AR 繪本_和小愛同學一起迺愛河
            </div>
            <div class="pc-book-intro mb-3">
              簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字
            </div>
            <div class="into-btn-style">
              <button class="down-load-btn-style btn">
                <router-link
                  class="into-link"
                  to="/downloadpage/:data"
                  @click="downloadpage(1)"
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
            <router-link to="/downloadpage/:data" @click="downloadpage(2)">
              <img
                class="river-img"
                v-lazy="require('@/assets/river/River-patting-1.jpg')"
                alt=""
              />
            </router-link>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-10 col-10">
          <div class="river-photo">
            <div class="pc-book-title mb-3">
              環境保護 AR 繪本_和小博同學一起保護愛河
            </div>
            <div class="pc-book-intro mb-3">
              簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字簡介100字
            </div>
            <div class="into-btn-style">
              <button class="down-load-btn-style btn">
                <router-link
                  class="into-link"
                  to="/downloadpage/:data"
                  @click="downloadpage(2)"
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
        background-color: #3b9acf !important;
        border-color: #3b9acf;
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
        background-color: #3b9acf !important;
        border-color: #3b9acf;
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
      }
    }
  }
}
</style>