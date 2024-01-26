<template>
  <li class="added-card">
    <figure class="added-card__figure">
      <img class="added-card__img" :src="addedCard.img" width="64" height="63" alt="Товар в корзине" loading="lazy" />
      <p class="added-card__img-counter">
        <span>{{ addedCard.count }}</span>
      </p>
    </figure>

    <div class="added-card__inner">
      <div class="added-card__content">
        <p class="added-card__text">{{ addedCard.title }}</p>
        <span class="added-card__price">${{ addedCard.price }}</span>
      </div>

      <div class="added-card__counter">
        <div class="added-card__control">
          <button @click="reduceCount" class="added-card__button" type="button">
            <img :src="arrowImg" width="7" height="14" alt="стрелочка" />
          </button>
          <span class="added-card__count">{{ addedCard.count }}</span>
          <button @click="increaseCount" class="added-card__button added-card__button--right" type="button">
            <img :src="arrowImg" width="7" height="14" alt="стрелочка" />
          </button>
        </div>
        <p class="added-card__total">${{ addedCard.price }}</p>
      </div>
    </div>

    <button class="added-card__close" @click="removeFromCart">
      <img :src="binImg" width="21" height="21" alt="Удалить" />
    </button>
  </li>
</template>

<script>
export default {
  props: {
    addedCard: {
      type: Object,
      required: true,
    },

    arrowImg: {
      type: String,
      required: true,
    },

    binImg: {
      type: String,
      required: true,
    },
  },

  methods: {
    //увеличиваем count товара
    increaseCount() {
      if (this.addedCard.count >= 10) return;
      this.addedCard.count++;
    },

    //уменьшаем count товара
    reduceCount() {
      if (this.addedCard.count === 0) {
        this.removeFromCart();
        return;
      }

      this.addedCard.count--;
    },

    //Вешаем событие на кнопку
    removeFromCart(card) {
      this.$emit('remove-from-cart', card);
    },
  },
};
</script>

<style scoped>
.added-card {
  position: relative;
  display: flex;
  column-gap: 18px;
  width: 100%;
}

.added-card__inner {
  width: 100%;
}
.added-card:not(:last-child) {
  margin-bottom: 77px;
}

.added-card__content {
  margin-bottom: 16px;
}

.added-card__figure {
  position: relative;
  width: 64px;
  height: 63px;
  margin: 0;
  flex-shrink: 0;
}

.added-card__img-counter {
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--black);
  color: var(--white);
  width: 32px;
  height: 32px;
  text-align: center;
  font-weight: 700;
  border-radius: 20px;
  padding: 5px;
}

.added-card__text {
  margin: 0;
  font-size: 18px;
  line-height: 20px;
}

.added-card__price {
  line-height: 32px;
  font-weight: 700;
}

/* counter block */
.added-card__counter {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.added-card__control {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.added-card__button {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  width: 32px;
  height: 32px;
  background-color: var(--primary-purple);
  color: var(--white);
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

.added-card__button--right {
  transform: rotate(180deg);
}

.added-card__button:hover {
  background-color: var(--black);
}

.added-card__count {
  font-weight: 700;
  width: 27px;
  text-align: center;
}

.added-card__total {
  margin: 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
}

.added-card__close {
  position: absolute;
  z-index: 10;
  padding: 5px;
  bottom: 0;
  left: 15px;

  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
