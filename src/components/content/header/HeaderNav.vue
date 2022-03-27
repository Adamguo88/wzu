<template>
  <div class="header" :class="{ mobileFixed: isFixed }">
    <div class="container">
      <div class="header-menu">
        <router-link to="/" class="logo-box">
          <img class="logo" src="@/assets/logo/logo2.gif" alt="" />
        </router-link>
        <!-- 手機板 -->
        <ul class="for-web-menu">
          <li>
            <router-link class="for-web-a" to="/about">關於我們</router-link>
          </li>
          <li>
            <router-link class="for-web-a" to="/river">愛河繪本</router-link>
          </li>
          <li>
            <router-link class="for-web-a" to="/sustainable"
              >永續繪本</router-link
            >
          </li>
        </ul>
        <button class="toggle-menu-btn" @click="toggleMenu(true)">
          <i class="fas fa-bars font-aw icon-size"></i>
        </button>
        <div
          class="menu col-xl-3 col-lg-3 col-md-5 col-sm-5 col-5"
          :class="{ menuPosition: isClick }"
        >
          <div class="close-btn">
            <button
              class="toggle-menu-btn my-close-button"
              @click="toggleMenu(false)"
            >
              <i
                style="color: white; padding-right: 80px"
                class="fas fa-bars font-aw fa-times icon-size"
              ></i>
            </button>
          </div>
          <div class="all-menu">
            <router-link class="header-a" to="/about">關於我們</router-link>
            <router-link class="header-a" to="/river">愛河繪本</router-link>
            <router-link class="header-a" to="/sustainable"
              >永續繪本</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "headernav",
  setup() {
    const isClick = ref(false);
    const isFixed = ref(false);

    const toggleMenu = (bool) => {
      isClick.value = bool;
    };

    onMounted(() => {
      window.addEventListener("scroll", headerScroll);
    });

    const headerScroll = () => {
      const nowHeight = window.pageYOffset;
      if (nowHeight >= 500) {
        isFixed.value = true;
        console.log("現在應該要fixed");
      } else {
        isFixed.value = false;
        console.log("現在不用fixed");
      }
    };

    return {
      isClick,
      isFixed,
      toggleMenu,
      headerScroll,
    };
  },
};
</script>

<style lang="scss" scoped>
$lerage: 992px;

.mobileFixed {
  position: fixed !important;
  background-color: #222;
}
.header {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  transition: .3s all linear;

  .header-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-box {
      display: block;

      .logo {
        width: 100px;
        height: 100px;
      }
    }
    .for-web-menu {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .for-web-a {
        display: block;
        padding: 20px 15px;
        transition: 0.2s all linear;
        color: white;
      }
    }
    .toggle-menu-btn,
    .menu {
      display: none;
    }
  }
}
@media screen and (max-width: 992px) {
  .mobileFixed {
    position: fixed !important;
    background-color: white;
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%)

  }
  .header {
    width: 100%;
    position: absolute;
    top:0;
    z-index: 999;
    transition: .3s all linear;

    .header-menu {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo-box {
        display: block;

        .logo {
          width: 75px;
          height: 75px;
        }
      }
      .for-web-menu {
        display: none;
      }
      .toggle-menu-btn {
        display: block;
        border-style: none;
        background: transparent;
        .icon-size {
          font-size: 28px;
        }
      }
      .my-close-button {
        position: absolute;
        top: 9px;
        right: -40px;
      }

      .menu {
        display: block;
        padding: 15px;
        height: 100vh;
        overflow: hidden;
        background-color: #222;
        position: fixed;
        top: 0;
        right: -600px;
        z-index: -999;
        transition: all 0.8s ease;
        overflow: hidden;

        .close-btn {
          padding-top: 40px;
          display: flex;
          justify-content: flex-end;
          position: relative;
        }
        .all-menu {
          padding-left: 40px;
          display: flex;
          flex-direction: column;

          .header-a {
            text-decoration: none;
            color: white;
            padding: 20px 8px;
          }
        }
      }
      .menuPosition {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 999;
      }
    }
  }
}
</style>
