<template>
  <button type="button">
    <slot>{{ text }}</slot>
  </button>
</template>

<script></script>

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
</style>
