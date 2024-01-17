<template>
  <li class="card-item">
    <img src="" width="" height="" alt="" />
    <div class="card-item__content">
      <p class="card-item__text"></p>
      <p class="card-item__price">$</p>
    </div>

    <Button>Add to Cart</Button>
  </li>
</template>

<script>
import Button from '../UI/ButtonCard.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.card-item {
  position: relative;
  height: 152px;
  width: 370px;
  border-radius: 20px;
}

.card-item__text {
  margin: 0;
  line-height: 20px;
  font-size: 18px;
}

.card-item__price {
  margin: 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
}
</style>
