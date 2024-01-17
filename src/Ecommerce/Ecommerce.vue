<template>
  <section class="commerce">
    <Container>
      <div class="commerce__wrapper">
        <MainBlock :title="`To Go Menu`">
          <MenuCard />
        </MainBlock>

        <MainBlock :title="`Your Cart`"></MainBlock>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../components/UI/Container.vue';
import MainBlock from './components/MainBlock.vue';
import MenuCard from './components/MenuCard.vue';

export default {
  data() {
    return {
      colors: [
        'rgba(122, 179, 243, 0.20)',
        'rgba(233, 121, 178, 0.20)',
        'rgba(215, 215, 249, 0.20)',
        'rgba(120, 247, 187, 0.20)',
      ],
    };
  },

  components: {
    Container,
    MainBlock,
    MenuCard,
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
}
</style>
