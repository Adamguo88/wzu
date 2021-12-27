<template>
  <div class="slider">
    <transition name="slider">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  name: "slider",
};
</script>

<style lang="scss">
.slider-enter-active,
.slider-leave-active {
  transition: opacity 1.2s ease-in-out;
}

.slider-enter-from,
.slider-leave-to {
  opacity: 0;
}

.slider-enter-to,
.slider-leave-from {
  opacity: 1;
}
</style>