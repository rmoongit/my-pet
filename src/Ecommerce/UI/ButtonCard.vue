<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script></script>

<style scoped>
.button {
  color: var(--white);
  background-color: var(--primary-purple);
  text-align: center;
  border: none;
  border-radius: 20px;
  padding: 4px 18px;
  cursor: pointer;
  font-family: 'Poppins', 'Arial', sans-serif;
  font-weight: 700;
  transition: all 0.5s;
}

.button:hover {
  transform: scale(1.05);
}
</style>
