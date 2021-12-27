<template>
  <div class="footer">
    <div class="container">
      <div class="d-flex align-items-center justify-content-center">
        <router-link to="/" class="footer-logo">
          <img class="logo" src="@/assets/logo/logo1.png" alt="" />
        </router-link>
        <router-link to="https://www.edu.tw/Default.aspx" class="footer-logo">
          <img class="logo" src="@/assets/logo/education.png" alt="" />
        </router-link>
        <router-link to="https://a001.wzu.edu.tw/" class="footer-logo">
          <img class="logo" src="@/assets/logo/wzu.png" alt="" />
        </router-link>
      </div>
      <div class="foooter-menu">
        <router-link class="footer-map-menu" to="/about">關於我們</router-link>
        <router-link class="footer-map-menu" to="/river">愛河繪本</router-link>
        <router-link class="footer-map-menu" to="/sustainable"
          >永續繪本</router-link
        >
      </div>
      <div class="footer-map">
        <a href="#" class="footer-icon">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="footer-icon">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="copyright d-flex justify-content-center">
    © 2021 文藻外語大學-XXXXXXXXXX 版權所有
  </div>
</template>

<script>
export default {
  name: "footernav",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #222;
  padding: 40px 0;
  display: flex;
  flex-direction: column;


  .footer-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 0 20px;
    .logo {
      width: 100px;
      height: 100px;
    }
  }
  .foooter-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

    .footer-map-menu {
      text-decoration: none;
      color: white;
      padding: 0 20px;
    }
  }
  .footer-map {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;

    .footer-icon {
      font-size: 24px;
      color: white;
      padding: 0px 15px;
    }
  }
}
.copyright {
  width: 100%;
  background-color: #333;
  padding: 25px 0;
  color: white;
}
</style>
