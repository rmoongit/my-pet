<template>
  <div class="main-block">
    <p class="main-block__title">{{ title }}</p>
    <ul class="main-block__list">
      <slot></slot>
    </ul>
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
.main-block {
  margin-top: 106px;
  padding: 50px 0 50px 14px;
  height: 812px;
  background-color: var(--white);
  width: 375px;
  box-shadow: 0px 0px 70px 0px #c7cbe3;
  border-radius: 25px;
  overflow-y: scroll;
}

.main-block__title {
  margin: 0;
  margin-bottom: 20px;
  margin-left: 27px;
  font-weight: 700;
  font-size: 32px;
}

.main-block__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
