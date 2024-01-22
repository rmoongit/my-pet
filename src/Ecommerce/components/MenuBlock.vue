<template>
  <div class="menu-block__wrapper">
    <ul class="menu-block__list">
      <slot></slot>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
.menu-block__wrapper {
  padding: 0 0 0 27px;
}

.menu-block__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
