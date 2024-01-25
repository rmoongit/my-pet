<template>
  <div class="cart-block__wrapper">
    <ul class="cart-block__list">
      <slot></slot>
    </ul>

    <div class="cart-block__total">
      <p>
        Subtotal:<span>${{ getSubtotal }}</span>
      </p>
      <p>
        Tax:<span>${{ getTax }}</span>
      </p>
      <p>
        Total:<span>${{ getTotal }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tax: 0.0975,
      total: 0,
    };
  },

  props: {
    cart: {
      type: Object,
      required: true,
    },
  },

  computed: {
    //Подсчёт общий без налога
    getSubtotal() {
      return this.cart.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2);
    },
    //Подсчёт налога
    getTax() {
      return this.cart.reduce((acc, item) => acc + item.price * item.count * this.tax, 0).toFixed(2);
    },
    //Подсчёт общего счёта с налогом
    getTotal() {
      return (+this.getSubtotal + +this.getTax).toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-block__wrapper {
  padding: 0 29px 0 27px;
}

.cart-block__list {
  max-height: 335px;
  overflow-y: auto;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  padding-top: 10px;
  padding-bottom: 43px;
  list-style: none;
  border-bottom: 5px solid var(--quartz);
}

.cart-block__total p {
  display: flex;
  justify-content: end;
  align-items: center;

  column-gap: 26px;
  margin: 0;
  font-weight: 700;
}

.cart-block__total p:not(:last-child) {
  margin-bottom: 27px;
}

.cart-block__total span {
  width: 130px;
  font-size: 32px;
  line-height: 32px;
}

.cart-block__total p:last-of-type span {
  color: var(--primary-purple);
}
</style>
