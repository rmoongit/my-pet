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
