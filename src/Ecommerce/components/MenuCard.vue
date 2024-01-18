<template>
  <li class="card-item">
    <img :src="img" width="148" height="144" alt="карточка товара" />
    <div class="card-item__content">
      <p class="card-item__text">{{ title }}</p>
      <p class="card-item__price">${{ price }}</p>
      <Button @click="onButtonClick(id)">{{ buttonText }}</Button>
    </div>
  </li>
</template>

<script>
import Button from '../UI/ButtonCard.vue';

export default {
  props: {
    img: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },

    buttonText: {
      type: String,
      required: false,
      default: 'Add to cart',
    },
  },

  components: {
    Button,
  },

  methods: {
    onButtonClick(id) {
      this.$emit('add-to-cart', id);
    },
  },
};
</script>

<style scoped>
.card-item {
  display: flex;
  position: relative;
  margin-bottom: 33px;
  height: 152px;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: var(--bg-color);
}

.card-item__content {
  margin-top: auto;
  width: 158px;
  margin-bottom: -10px;
}

.card-item__text {
  margin: 0;
  margin-bottom: 16px;
  line-height: 20px;
  font-size: 18px;
}

.card-item__price {
  margin: 0;
  margin-bottom: 16px;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
}
</style>
