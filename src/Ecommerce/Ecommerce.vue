<template>
  <section class="commerce">
    <Container>
      <div class="commerce__wrapper">
        <MenuWrapper :title="`To Go Menu`">
          <MenuBlock>
            <Card
              v-for="(card, index) in mocksData"
              :key="card.id"
              :card="card"
              @add-to-cart="addToCart(card)"
              @remove-card="removeFromCart(card)"
              :style="`--bg-color: ${colors[index % colors.length]}`"
            /> </MenuBlock
        ></MenuWrapper>

        <MenuWrapper :title="`Your Cart`">
          <CartBlock v-if="cart.length" :cart="cart">
            <AddedCard
              v-for="addedCard in cart"
              :key="addedCard.id"
              :addedCard="addedCard"
              :arrowImg="arrowImg"
              :binImg="binImg"
              @remove-from-cart="removeFromCart(addedCard)"
            />
          </CartBlock>
          <div v-else><h1 :style="{textAlign: 'center', margin: '0'}">Your cart is Empty&#128519;</h1></div>
        </MenuWrapper>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../components/UI/Container.vue';
import MenuWrapper from './components/MenuWrapper.vue';
import MenuBlock from './components/MenuBlock.vue';
import CartBlock from './components/CartBlock.vue';
import Card from './components/Card.vue';
import AddedCard from './components/AddedCard.vue';

import mocks from './data/data';
import arrowImg from './images/svg/chevron.svg';
import binImg from './images/svg/bin.svg';

export default {
  data() {
    return {
      colors: [
        'rgba(122, 179, 243, 0.20)',
        'rgba(233, 121, 178, 0.20)',
        'rgba(215, 215, 249, 0.20)',
        'rgba(120, 247, 187, 0.20)',
      ],

      cart: [],
      arrowImg,
      binImg,
      mocksData: mocks,
    };
  },

  components: {
    Container,
    MenuWrapper,
    MenuBlock,
    CartBlock,
    Card,
    AddedCard,
  },

  methods: {
    //Добавляет товар в корзину
    addToCart(card) {
      const findCard = this.cart.find((item) => card.id === item.id);

      if (findCard) {
        return;
      }

      this.cart.push({...card, count: 1});
    },
    //Удаляет товар из корзины
    removeFromCart(card) {
      this.cart = this.cart.filter((item) => item.id !== card.id);
    },
  },
};
</script>

<style scoped>
.commerce {
  width: 100%;
  height: 100%;
  background-color: var(--grey);
  background-image: url('./images/svg/bg__left.svg'), url('./images/svg/bg__top-right.svg'),
    url('./images/svg/bg__btm-right.svg');
  background-repeat: no-repeat;
  background-position: 0 70%, right top, bottom right;
  font-family: 'poppins', 'Arial', sans-serif;
  color: var(--black);
  font-size: 16px;
  font-weight: 400;
}

.commerce__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  padding: 106px 0;
}
</style>
