<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
}

@media (max-width: 769px) {
  .container {
    padding: 0 20px;
  }
}
</style>
