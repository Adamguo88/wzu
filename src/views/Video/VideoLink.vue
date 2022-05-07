<template>
  <div class="container">
    <div class="videoItem">
      <div
        class="col-xl-6 col-lg-10 col-sm-10 col-10 video-padding"
        v-for="item in videoData"
        :key="item.id"
      >
        <div class="video-title">{{ item.name }}</div>
        <div class="video-item">
          <iframe
            :width="broswerWidth"
            :height="broswerHeight"
            :src="item.Link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "VideoLink",
  setup() {
    const broswerNow = ref(1920);
    const broswerWidthNow = document.body.offsetWidth;
    broswerNow.value = broswerWidthNow + 20;
    const broswerWidth = ref(560);
    const broswerHeight = ref(315);

    const videoData = reactive([
      {
        id: 1,
        name: "用影像記錄生命的價值-「身為大學生的我們能為社會做什麼？」",
        Link: "https://www.youtube.com/embed/OMlZs57O6vM",
      },
      {
        id: 2,
        name: "看見需要・千手扶學專業志工團隊形象影片",
        Link: "https://www.youtube.com/embed/RR6XNOmtwB8",
      },
      {
        id: 3,
        name: "109年教育部USR HUB看見需要・千手扶學計畫學生專訪影片",
        Link: "https://www.youtube.com/embed/2G0-ATT2vCw",
      },
      {
        id: 4,
        name: "111年教育部USR HUB看見需要・千手扶學計畫紀錄",
        Link: "https://www.youtube.com/embed/eotSSEDcdoQ",
      },
      {
        id: 5,
        name: "看見生命的需要–「謝謝，讓我們有機會成為彼此的貴人。」",
        Link: "https://www.youtube.com/embed/0-rD75bLT_o",
      },
      {
        id: 6,
        name: "2021藝術陪伴 扶學課輔在來義",
        Link: "https://www.youtube.com/embed/YwERCXyyLnw",
      },
      {
        id: 7,
        name: "國小藝術創作與藝術陪伴（崎峰、楠西、新豐）",
        Link: "https://www.youtube.com/embed/2GNzsKsJ3pI",
      },
    ]);

    const videoSize = () => {
      if (broswerNow.value > 1200) {
        broswerWidth.value = 560;
      } else if (broswerNow.value > 768) {
        broswerWidth.value = 560;
      } else if (broswerNow.value > 576) {
        broswerWidth.value = 500;
        broswerHeight.value = 250;
      } else {
        broswerWidth.value = 320;
        broswerHeight.value = 200;
      }
    };

    videoSize();

    return {
      videoData,
      broswerNow,
      broswerWidth,
      broswerHeight,
    };
  },
};
</script>

<style lang="scss" scoped>
.videoItem {
  padding: 80px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .video-padding {
    margin-top: 20px;
    padding: 15px;

    .video-title {
      font-weight: 600;
      font-size: 18px;
      padding-bottom: 15px;
    }
    .video-item {
      width: 100%;
      overflow: hidden;
    }
  }
}

@media screen and (max-width: 1200px) {
  .videoItem {
    padding: 80px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>