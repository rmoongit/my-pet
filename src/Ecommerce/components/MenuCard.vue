<template>
  <li class="card-item">
    <img :src="card.img" width="148" height="144" alt="карточка товара" />
    <div class="card-item__content">
      <p class="card-item__text">{{ card.title }}</p>
      <p class="card-item__price">${{ card.price }}</p>
      <Button :inCart="inCart" @click="onButtonClick(card)" />
    </div>
  </li>
</template>

<script>
import Button from '../UI/ButtonCard.vue';

export default {
  data() {
    return {
      inCart: false,
    };
  },

  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  components: {
    Button,
  },

  methods: {
    onButtonClick(card) {
      this.inCart = !this.inCart;
      this.$emit('add-to-cart', card);
    },
  },
};
</script>

<style scoped>
.card-item {
  display: flex;
  column-gap: 20px;
  position: relative;
  height: 152px;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: var(--bg-color);
}

.card-item:not(:last-child) {
  margin-bottom: 33px;
}

.card-item img {
  width: 148px;
  height: 144px;
  margin-top: -15px;
  margin-left: -20px;
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
