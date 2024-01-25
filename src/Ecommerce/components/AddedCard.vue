<template>
  <li class="added-card">
    <img class="added-card__img" :src="addedCard.img" width="64" height="63" alt="Товар в корзине" />

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
  },

  methods: {
    //увеличиваем count товара
    increaseCount() {
      if (this.addedCard.count >= 10) {
        return;
      }
      this.addedCard.count++;
    },

    //уменьшаем count товара
    reduceCount() {
      if (this.addedCard.count <= 0) {
        return;
      }
      this.addedCard.count--;
    },
  },
};
</script>

<style scoped>
.added-card {
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

.added-card .added-card__img {
  width: 64px;
  height: 63px;
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
</style>
