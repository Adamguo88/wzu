<template>
  <div class="container">
    <div class="about-content">
      <div class="introduction-text">
        <div class="introduction-title">
          <h1>關於我們</h1>
        </div>
        <div
          class="
            introduction-photo-text
            col-xl-12 col-lg-12 col-mg-12 col-sm-12
          "
        >
          <div class="col-xl-7 col-lg-7 col-md-8 introduction-content-photo">
            <img
              class="introduction-photo"
              src="../../../assets/about/introduction.jpg"
              alt=""
            />
          </div>
          <div class="col-xl-5 col-lg-5 col-md-4 introduction-content-text">
            <h2>簡單介紹</h2>
            <p style="fontsize: 18px">
              hello world hello worldhello worldhello worldhello worldhello
              worldhello worldhello worldhello worldhello worldhello worldhello
              worldhello worldhello worldhello world hello world hello
              worldhello worldhello worldhello worldhello worldhello worldhello
            </p>
          </div>
        </div>
      </div>
    </div>
    <team :teamdata="teamdata" />
  </div>
</template>

<script>
import Team from "./Team.vue";
export default {
  name: "aboutcontent",
  components: {
    Team,
  },
  props: {
    teamdata: {
      type: Object,
      default() {},
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$aboutcontent: 768px;

.about-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 80px 0;

  .introduction-title {
    padding-bottom: 50px;
  }

  .introduction-photo-text {
    display: flex;
    flex-wrap: wrap;

    .introduction-photo {
      display: block;
      width: 100%;
    }

    .introduction-content-text {
      padding: 0px 25px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    @media screen and (max-width: $aboutcontent) {
      .introduction-content-text {
        padding: 25px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
}
</style>