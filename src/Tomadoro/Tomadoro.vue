<template>
  <Container>
    <section class="timer">
      <div class="timer__wrapper">
        <div class="timer__ring">
          <svg width="518" height="518" viewBox="0 0 518 518">
            <rect width="100%" height="100%" fill="none"></rect>
            <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254"></circle>
          </svg>
        </div>

        <div class="time">
          <div class="minutes">
            <TextInput />
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from '../components/UI/Container.vue';
import TextInput from '../Tomadoro/UI/TextInput.vue';

export default {
  components: {
    Container: Container,
    TextInput: TextInput,
  },
};
</script>

<style scoped>
.timer {
  padding: 50px 0;
  font-family: 'bebas', Arial, sans-serif;
}

.timer__wrapper {
  position: relative;
  margin: 0 auto;
  height: 514px;
  width: 514px;
}

.timer__ring {
  position: absolute;
  stroke: #09a65a;
  left: 0;
  top: 0;
  z-index: 1;
}

.timer__ring svg {
  width: 100%;
  height: 100%;
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  border-radius: 50%;

  fill: #000;
}

.time {
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
