<template>
  <router-view></router-view>
</template>

<script>
import Tomadoro from './Tomadoro/Tomadoro.vue';

export default {
  components: {
    Tomadoro: Tomadoro,
  },
};
</script>

<style scoped></style>
