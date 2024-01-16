<template>
  <input type="text" :value="value" :disabled="disabled" maxlength="2" />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },

    disabled: {
      type: Boolean,
      required: true,
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
  width: 170px;

  @media (max-width: 769px) {
    font-size: 100px;
    width: 85px;
    height: 85px;
  }
}
</style>
