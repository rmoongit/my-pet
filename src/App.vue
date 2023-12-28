<template>
  <router-view></router-view>
</template>

<script>
import Timer from './Timer/Timer.vue';

export default {
  components: {
    Timer: Timer,
  },
};
</script>

<style scoped></style>
