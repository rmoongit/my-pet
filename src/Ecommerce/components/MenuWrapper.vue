<template>
  <div class="menu-wrapper">
    <p class="menu-wrapper__title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.menu-wrapper {
  padding-top: 50px;
  padding-bottom: 50px;
  height: 812px;
  width: 375px;
  background-color: var(--white);
  box-shadow: 0px 0px 70px 0px #c7cbe3;
  border-radius: 25px;
  overflow-y: scroll;
}

.menu-wrapper__title {
  margin: 0;
  margin-bottom: 37px;
  margin-left: 27px;
  font-weight: 700;
  font-size: 32px;
}
</style>
