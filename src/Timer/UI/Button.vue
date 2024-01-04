<template>
  <button :class="{active: disabled}" type="button" :text="text">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Object],
    },

    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
button {
  display: block;
  cursor: pointer;
  background-color: transparent;
  color: var(--white);
  opacity: 0.5;
  border: none;
  letter-spacing: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;

  font-family: 'bebas', Arial, sans-serif;
}

button.active {
  color: var(--red);
  font-size: 20px;
  letter-spacing: 1px;
}
</style>
