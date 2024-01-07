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
            <TextInput v-bind:value="displayMinutes" @input="updateDisplayMinutes" v-bind:disabled="disabled" />
          </div>
          <p class="time__colon">:</p>
          <div class="time__seconds">
            <TextInput v-bind:value="displaySeconds" @input="updateDisplaySeconds" v-bind:disabled="disabled" />
          </div>
        </div>
      </div>

      <Button v-bind:text="updateText" v-on:click="startTimer"></Button>

      <Button v-on:click="editTime">
        <img v-bind:src="pathImg" width="32" height="32" alt="settings" />
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
      text: 'start',
      pathImg: '/public/Timer/images/gear.svg',

      minutes: 0,
      seconds: 0,
      interval: null,
      disabled: true,
    };
  },

  components: {
    Container: Container,
    TextInput: TextInput,
    Button: Button,
  },

  methods: {
    startTimer() {
      console.log(this.minutes, this.seconds);

      if (this.minutes === 0 && this.seconds === 0) return;

      if (this.interval) {
        this.clearTimer();
      } else {
        this.interval = setInterval(() => {
          if (this.seconds <= 0) {
            if (this.minutes === 0) {
              this.clearTimer();
              return;
            }

            this.minutes--;
            this.seconds = 60;
          }

          this.seconds--;
        }, 1000);
      }
    },

    editTime() {
      this.disabled = !this.disabled;
    },

    updateDisplaySeconds(event) {
      this.seconds = Number(event.target.value);
    },

    updateDisplayMinutes(event) {
      this.minutes = Number(event.target.value);
    },

    //чистим таймер
    clearTimer() {
      clearInterval(this.interval);
      this.interval = null;
    },
  },

  computed: {
    displaySeconds: function () {
      return this.seconds.toString().padStart(2, 0);
    },

    displayMinutes: function () {
      return this.minutes.toString().padStart(2, 0);
    },

    updateText: function () {
      return this.interval !== null ? (this.text = 'pause') : (this.text = 'start');
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
