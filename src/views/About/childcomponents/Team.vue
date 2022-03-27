<template>
  <div class="team">
    <div
      v-for="(item, index) in teamdata"
      :key="index"
      class="team-introduction col-xl-3 col-lg-4 col-md-6 col-sm-6 col-10 mx-auto"
    >
      <div class="user-photo">
        <img class="user-img" v-lazy="item.photo" :alt="item.name" />
      </div>
      <div class="user-text">
        <h5>{{ item.name }}</h5>
        <h6>{{ item.position }}</h6>
        <span>{{ item.introduction }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
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
.team {
  width: 100%;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .team-introduction {
    padding: 20px 15px;
    transition: all 0.2s linear;

    .user-photo {
      width: 100%;
      display: block;

      .user-img {
        width: 100%;
        transition: all 0.2s linear;
      }
    }

    .user-text {
      height: 320px;
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      background-color: #222;
      color: white;
      padding: 15px;
      position: relative;
      z-index: 1;
      transition: all 0.2s linear;
      border-radius: 10px;
    }
  }
  .team-introduction:hover > .user-photo > .user-img {
    // transform: scaleY(1.1);
    transform: scale(1.1);
  }
  .team-introduction:hover > .user-text {
    transform: scale(1.1);
    color: black;
    background-color: white;
    border: 1px dashed black;
  }
}
@media screen and (max-width: 1200px) {
  .team {
    width: 100%;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    .team-introduction {
      padding: 20px 15px;
      transition: all 0.2s linear;

      .user-text {
        height: 285px;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        background-color: #222;
        color: white;
        padding: 15px;
        position: relative;
        z-index: 1;
        transition: all 0.2s linear;
        border-radius: 10px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .team {
    width: 100%;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    .team-introduction {
      padding: 20px 15px;
      transition: all 0.2s linear;

      .user-text {
        height: 330px;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        background-color: #222;
        color: white;
        padding: 15px;
        position: relative;
        z-index: 1;
        transition: all 0.2s linear;
        border-radius: 10px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .team {
    width: 100%;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    .team-introduction {
      padding: 20px 15px;
      transition: all 0.2s linear;

      .user-text {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        background-color: #222;
        color: white;
        padding: 15px;
        position: relative;
        z-index: 1;
        transition: all 0.2s linear;
        border-radius: 10px;
      }
    }
  }
}
</style>