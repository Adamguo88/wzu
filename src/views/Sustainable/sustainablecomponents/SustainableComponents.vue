<template>
  <div class="container">
    <div class="river-content">
      <div class="col-xl-6">
        <div class="river-photo">
          <router-link to="/downloadpage/:data" @click="downloadpage(3)">
            <img
              class="river-img"
              src="../../../assets/sustainable/Sustainable-patting-1.jpg"
              alt=""
            />
          </router-link>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="river-photo">
          <router-link to="/downloadpage/:data" @click="downloadpage(4)">
            <img
              class="river-img"
              src="../../../assets/sustainable/Sustainable-patting-2.jpg"
              alt=""
          /></router-link>
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
  }
}
</style>