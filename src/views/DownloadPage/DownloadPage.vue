<template>
  <div>
    <div class="downloadpage"></div>
    <header-nav />
    <download-item :getNowWebData="getNowWebData" />
    <footer-nav />
  </div>
</template>

<script>
import DownloadItem from "./downloadComponents/DownloadItem";

import HeaderNav from "../../components/content/header/HeaderNav";
import FooterNav from "../../components/content/footer/FooterNav";

import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import river_img from "../River/rivercomponents/img_js/River_img_1";
import river_img_2 from "../River/rivercomponents/img_js/River_img_2";

import s_img_1 from "../Sustainable/sustainablecomponents/img_js/Sustaibable_img_1";
import s_img_2 from "../Sustainable/sustainablecomponents/img_js/Sustainable_img_2";

export default {
  name: "downloadpage",
  components: {
    HeaderNav,
    FooterNav,
    DownloadItem,
  },
  setup() {
    const route = useRoute();

    const myArg = parseInt(route.params.data);

    const downloadData_2 = ref([
      {
        id: 1,
        Block_1_text: "App下載",
        Block_1_app: "#",
        Block_1_img: river_img.b_1_img,
        Block_2_text: "繪本下載",
        Block_2_app: "#",
        Block_2_img: river_img.b_2_img,
        Block_3_text: "遊戲下載",
        Block_3_app: "#",
        Block_3_img_01: river_img.b_3_img_1,
        Block_3_img_02: river_img.b_3_img_2,
        Block_3_img_03: river_img.b_3_img_3,
        Block_4_text: "電子書下載",
        Block_4_app: "#",
        Block_4_img_01: river_img.b_4_img_1,
        Block_4_img_02: river_img.b_4_img_2,
        Block_4_img_03: river_img.b_4_img_3,
      },
      {
        id: 2,
        Block_1_text: "第二塊響適應數據測試成功",
        Block_1_app: "#",
        Block_1_img: river_img_2.b_1_img,
        Block_2_text: "第二區塊的測試文字1",
        Block_2_app: "#",
        Block_2_img: river_img_2.b_2_img,
        Block_3_text: "第三區塊的測試文字1",
        Block_3_app: "#",
        Block_3_img_01: river_img_2.b_3_img_1,
        Block_3_img_02: river_img_2.b_3_img_2,
        Block_3_img_03: river_img_2.b_3_img_3,
        Block_4_text: "第四區塊的測試文字1",
        Block_4_app: "#",
        Block_4_img_01: river_img_2.b_4_img_1,
        Block_4_img_02: river_img_2.b_4_img_2,
        Block_4_img_03: river_img_2.b_4_img_3,
      },
      {
        id: 3,
        Block_1_text: "第三塊響適應數據測試成功OHLAAAAAAAAAAAAA",
        Block_1_app: "#",
        Block_1_img: s_img_1.b_1_img,
        Block_2_text: "第二區塊的測試文字1",
        Block_2_app: "#",
        Block_2_img: s_img_1.b_2_img,
        Block_3_text: "第三區塊的測試文字1",
        Block_3_app: "#",
        Block_3_img_01: s_img_1.b_3_img_1,
        Block_3_img_02: s_img_1.b_3_img_2,
        Block_3_img_03: s_img_1.b_3_img_3,
        Block_4_text: "第四區塊的測試文字1",
        Block_4_app: "#",
        Block_4_img_01: s_img_1.b_4_img_1,
        Block_4_img_02: s_img_1.b_4_img_2,
        Block_4_img_03: s_img_1.b_4_img_3,
      },
      {
        id: 4,
        Block_1_text: "第四塊響適應數據測試成功OHLAAAAAAAAAAAAA書胡",
        Block_1_app: "#",
        Block_1_img: s_img_2.b_1_img,
        Block_2_text: "第二區塊的測試文字1",
        Block_2_app: "#",
        Block_2_img: s_img_2.b_2_img,
        Block_3_text: "第三區塊的測試文字1",
        Block_3_app: "#",
        Block_3_img_01: s_img_2.b_3_img_1,
        Block_3_img_02: s_img_2.b_3_img_2,
        Block_3_img_03: s_img_2.b_3_img_3,
        Block_4_text: "第四區塊的測試文字1",
        Block_4_app: "#",
        Block_4_img_01: s_img_2.b_4_img_1,
        Block_4_img_02: s_img_2.b_4_img_2,
        Block_4_img_03: s_img_2.b_4_img_3,
      },
    ]);

    const getNowWebData = computed(() => {
      let nowData = [];
      downloadData_2.value.find((item) => {
        if (item.id === myArg) {
          nowData.push(item);
        }
      });
      return nowData;
    });

    return {
      getNowWebData,
    };
  },
};
</script>

<style lang="scss" scoped>
.downloadpage {
  width: 100%;
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/downloadPage/downloadPage.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
}
</style>