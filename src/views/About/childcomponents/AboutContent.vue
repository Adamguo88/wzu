<template>
  <div class="container">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 mx-auto">
      <div class="about-content">
        <div class="introduction-text">
          <div class="introduction-title">
            <h1>關於我們</h1>
          </div>
          <div class="introduction-photo-text col-xl-12 col-lg-12 col-mg-12 col-sm-12">
            <div class="col-xl-7 col-lg-6 col-md-12 introduction-content-photo">
              <img
                class="introduction-photo"
                v-lazy="require('@/assets/about/introduction.jpg')"
                alt
              />
            </div>
            <div class="col-xl-5 col-lg-6 col-md-12 introduction-content-text">
              <!-- <h2 style="margin: 20px 0">簡單介紹</h2> -->
              <span
                style="margin-bottom: 20px; margin-top:30px;"
              >我們是一群熱愛幫助孩童的大學生，秉持著對孩童的喜愛與教導熱忱，因此想為都市中的弱勢孩童設計一系列的活動及教材，而促使我們組成本團隊。當我們回憶起小時候的教育時，都曾在學習上遇到困難，無論是課業上，還是在課後才藝班，都會受到家庭影響及個人特質的因素，而止步於前。</span>
              <span>近幾年，大量教育資金投入於偏鄉學校，當城鄉的需求相較之下，偏鄉的急迫性、話題性讓許多人忽略了都市中依舊有陽光照不到的地方。多元化族群的人口構成，M型現象的教育落差，學習成就M型化加劇，都市中的小校在資源與支援，實際上比偏鄉更「弱勢」。社會產生不平等的教育時，身為教育者的我們，不應該只因為「偏鄉處處是亮點」而漠視了實際的情況。事實上，「全台功課最落後的學生，只有四分之一來自鄉村偏遠地區」。</span>
            </div>
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
    Team
  },
  props: {
    teamdata: {
      type: Object,
      default() {},
      required: true
    }
  }
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
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
      max-height: 400px;
      border-radius: 5px;
    }

    .introduction-content-text {
      padding: 0px 25px;
      display: flex;
      flex-direction: column;
      // justify-content: flex-end;
    }
  }
}
@media screen and (max-width: $aboutcontent) {
  .introduction-content-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 992px) {
  .about-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 40px 0;

    .introduction-title {
      padding-bottom: 50px;
    }

    .introduction-photo-text {
      display: flex;
      flex-wrap: wrap;

      .introduction-photo {
        object-fit: cover;
        display: block;
        width: 100%;
        height: 100%;
        max-height: 400px;
      }

      .introduction-content-text {
        padding: 0px 0px;
        display: flex;
        flex-direction: column;
        // justify-content: flex-end;
      }
    }
  }
}
</style>