<template>
  <div class="cart-block__wrapper">
    <ul class="cart-block__list">
      <slot></slot>
    </ul>

    <div class="cart-block__total">
      <p>Subtotal:<span>$</span></p>
      <p>Tax:<span>$</span></p>
      <p>Total:<span>$</span></p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.cart-block__wrapper {
  padding: 0 29px 0 27px;
}

.cart-block__list {
  max-height: 335px;
  overflow-x: hidden;
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
  font-size: 32px;
  line-height: 32px;
}

.cart-block__total p:last-of-type span {
  color: var(--primary-purple);
}
</style>
