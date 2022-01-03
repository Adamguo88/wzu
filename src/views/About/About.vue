<template>
  <div>
    <div class="about"></div>
    <header-nav />
    <about-content :teamdata="data" />
    <footer-nav />
  </div>
</template>

<script>
import AboutContent from "./childcomponents/AboutContent.vue";

import HeaderNav from "@/components/content/header/HeaderNav";
import FooterNav from "@/components/content/footer/FooterNav";

import { reactive } from "@vue/reactivity";
import photo_l from "../../assets/about/team/leader.jpg";
import photo_1 from "../../assets/about/team/t1.jpg";
import photo_2 from "../../assets/about/team/t2.jpg";
import photo_3 from "../../assets/about/team/t3.jpg";
import photo_4 from "../../assets/about/team/t4.jpg";
import photo_5 from "../../assets/about/team/t5.jpg";
import photo_6 from "../../assets/about/team/t6.jpg";
import photo_7 from "../../assets/about/team/t7.jpg";
export default {
  name: "about",
  components: {
    HeaderNav,
    FooterNav,
    AboutContent,
  },
  setup() {
    const data = reactive({
      leader: {
        name: "黃相容",
        position: "組長",
        introduction: "我在專題製作中是負責彙整及繪圖，也擔任了組長一職。雖然我不是個稱職的組長，但還好有各位組員的幫忙，讓團隊茁壯。從一開始懵懵懂懂的我們，經過老師以及時間的不段的打磨，讓我們擁多更優秀的技術及經驗，在未來有更多機會去實現自己的夢想。",
        photo: photo_l,
      },
      team1: {
        name: "張珈芯",
        position: "組員",
        introduction: "在繪畫的過程中，我明白到萬事起頭難，無論是簡單或是再複雜不過的圖，都得用基礎工具的經驗累積來完成。越簡單的越困難，越困難的越值得好好嘗試，放手一搏。",
        photo: photo_3,
      },
      team2: {
        name: "陳吟靜",
        position: "組員",
        introduction: "從未想過自己能做什麼，但透過專題組員的合作，從中擔任行政及繪畫等工作以及角色，學習與團隊共融，使得自己有所長進，歲月累積而來的成長，一步步教會我如何將作業輾轉成作品，累積自己的養分時，同時也在幫助他人的成長。",
        photo: photo_5,
      },
      team3: {
        name: "王姿涵",
        position: "組員",
        introduction: "在製作專題的過程中，主要工作為繪製繪本及教材內容發想，從中學習到了許多從未接觸過的技能，也因有大家共同的努力，讓我們完成了許多活動。在自己學習的同時，也幫助了許多孩童，因此也為我們的人生添加了更多不同的色彩。",
        photo: photo_1,
      },
      team4: {
        name: "黃筠琪",
        position: "組員",
        introduction: "在製作專題的過程中，許多繪畫上的技巧都是努力與團員們互相學習的，雖然偶爾會有意見摩擦的時候，但也因為有這些不同的意見才能使我們越來越好，互相鼓勵、互相成長，讓彼此成為自己心目中最理想的人。",
        photo: photo_6,
      },
      team5: {
        name: "蘇詣倫",
        position: "組員",
        introduction: "我在專題中主要是負責製作遊戲的部份，在過程中與其他團員們一同增進製作企劃的能力。而最讓我感慨的是學習到了如何將自己所學與其他領域的組員們的知識進行結合並產出了大家共有的成品。",
        photo: photo_7,
      },
      team6: {
        name: "周宛霖",
        position: "組員",
        introduction: "我在專題中負責課程設計以及資料整理等工作。謝謝團員們的齊心努力，讓我們的價值與不凡被欣賞、被看見。希望日後也能持續努力不懈，共創美好回憶。",
        photo: photo_2,
      },
      team7: {
        name: "郭朝祐",
        position: "組員",
        introduction: "我負責的工作是前端，我覺得遇到最大的挑戰是可以把其他人提出合理的想法實現成功能，雖然有時候會卡在某個地方，但是最後完成看見成品，我覺得這就是寫前端的魅力。",
        photo: photo_4,
      },
    });

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/about/about.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
}
</style>