<template>
  <Container>
    <section class="timer">
      <div class="timer__ring">
        <svg width="518" height="518" viewBox="0 0 518 518">
          <rect width="100%" height="100%" fill="none"></rect>
          <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254"></circle>
        </svg>
      </div>

      <div class="time">
        <div class="time__block">
          <div class="time__minutes">
            <TextInput :value="minutes" :disabled="disabled" />
          </div>
          <p class="time__colon">:</p>
          <div class="time__seconds">
            <TextInput :value="seconds" :disabled="disabled" />
          </div>
        </div>
      </div>

      <Button :text="text" :startTimer="startTimer" v-on:click="startTimer"></Button>
      <Button>
        <img :src="pathImg" width="32" height="32" alt="settings" />
      </Button>
    </section>
  </Container>
</template>

<script>
import Container from '../components/UI/Container.vue';
import TextInput from '../Timer/UI/TextInput.vue';
import Button from '../Timer/UI/Button.vue';

export default {
  data() {
    return {
      disabled: true,
      text: 'start',
      pathImg: '/public/Timer/images/gear.svg',

      minutes: 0,
      seconds: 0,
      interval: null,
    };
  },

  components: {
    Container: Container,
    TextInput: TextInput,
    Button: Button,
  },

  methods: {
    startTimer() {
      if (this.interval !== null) {
        return;
      }

      let totalSeconds = this.seconds / 60;
      this.seconds = totalSeconds;

      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          this.minutes--;
          this.seconds = 59;

          if (this.minutes < 10) {
            this.minutes = this.displayMinutes;
          }
        }

        if (this.seconds < 10) {
          this.seconds = this.displaySeconds;
        }

        this.seconds--;
      }, 300);
    },
  },

  computed: {
    displayMinutes() {
      return this.minutes.toString().padStart(2, 0);
    },

    displaySeconds() {
      return this.seconds.toString().padStart(2, 0);
    },
  },
};
</script>

<style scoped>
.timer {
  position: relative;
  margin: 0 auto;
  top: 50px;
  font-family: 'bebas', Arial, sans-serif;
  width: 514px;
  height: 514px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.timer__ring {
  position: absolute;
  stroke: var(--circle-green);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.timer__ring svg {
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  max-width: 514px;
  max-height: 514px;

  fill: var(--black);
}

/* time block */

.time__block {
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.time__colon {
  margin: 0;
  font-size: 196px;
}

@media (max-width: 769px) {
  .timer {
    max-width: 280px;
    max-height: 280px;
  }

  .timer__ring svg {
    max-width: 280px;
    max-height: 280px;
  }

  .time__colon {
    font-size: 100px;
  }
}
</style>
