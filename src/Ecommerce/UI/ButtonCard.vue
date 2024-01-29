<template>
  <button :class="[inCart ? 'button active' : 'button']">
    <img v-if="inCart" class="button__icon" :src="checkIcon" alt="галочка корзины" />
    <span>{{ inCart ? 'In Cart' : 'Add to Cart' }}</span>
  </button>
</template>

<script>
import checkIcon from '../images/svg/check.svg';

export default {
  data() {
    return {
      checkIcon,
    };
  },

  props: {
    inCart: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
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

.button__icon {
  margin-right: 10px;
}

.button:hover {
  transform: scale(1.05);
}

.button.active {
  background-color: var(--black);
}
</style>
