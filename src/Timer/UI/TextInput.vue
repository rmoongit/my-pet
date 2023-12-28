<template>
  <input type="text" :value="value" :disabled="disabled" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
input {
  font-family: 'bebas', Arial, sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  text-align: center;
  font-size: 196px;
  color: var(--white);

  height: 170px;
  width: 150px;

  @media (max-width: 769px) {
    font-size: 100px;
    width: 85px;
    height: 85px;
  }
}
</style>
