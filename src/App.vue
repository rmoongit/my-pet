<template>
  <div class="main-layout">
    <router-view></router-view>
  </div>
</template>

<script>
import Timer from './Timer/Timer.vue';

export default {
  components: {
    Timer: Timer,
  },
};
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
