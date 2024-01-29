<template>
  <li class="card">
    <img :src="card.img" width="148" height="144" alt="карточка товара" loading="lazy" />
    <div class="card__content">
      <p class="card__text">{{ card.title }}</p>
      <p class="card__price">${{ card.price }}</p>
      <Button @click="checkHandler" />
    </div>
  </li>
</template>

<script>
import Button from '../UI/ButtonCard.vue';

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },

    isInCart: {
      type: Object,
    },
  },

  components: {
    Button,
  },

  methods: {
    checkHandler(card) {
      this.$emit('add-to-cart', card);
	  console.log(this.isIncart)
      if (this.isInCart) {
        this.$emit('remove-from-cart', card);
      }
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  column-gap: 20px;
  position: relative;
  height: 152px;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: var(--bg-color);
}

.card:not(:last-child) {
  margin-bottom: 33px;
}

.card img {
  width: 148px;
  height: 144px;
  margin-top: -15px;
  margin-left: -20px;
}

.card__content {
  margin-top: auto;
  width: 158px;
  margin-bottom: -10px;
}

.card__text {
  margin: 0;
  margin-bottom: 16px;
  line-height: 20px;
  font-size: 18px;
}

.card__price {
  margin: 0;
  margin-bottom: 16px;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
}
</style>
