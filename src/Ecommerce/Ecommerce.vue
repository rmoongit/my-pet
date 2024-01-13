<template>
  <section class="commerce">
    <div class="commerce__wrapper">
      <MainBlock v-bind:title="`To Go Menu`"></MainBlock>
      <MainBlock v-bind:title="`Your Cart`"></MainBlock>
    </div>
  </section>
</template>

<script>
import MainBlock from './components/MainBlock.vue';
export default {
  components: {
    MainBlock: MainBlock,
  },
};
</script>

<style scoped>
.commerce {
  width: 100%;
  height: 100%;
  background-color: var(--grey);
  font-family: 'poppins', 'Arial', sans-serif;
  color: var(--black);
  font-size: 16px;
  font-weight: 400;
}

.commerce__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
}
</style>
