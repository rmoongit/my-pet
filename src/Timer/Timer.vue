<template>
  <Container>
    <nav>
      <RouterLink to="Timer"> Таймер </RouterLink>
      <!-- <RouterLink to="Other"> в процесе.. </RouterLink> -->
    </nav>

    <section class="timer">
      <div :class="{timer__ring: true, finished: timesUp}">
        <svg width="518" height="518" viewBox="0 0 518 518">
          <rect width="100%" height="100%" fill="none"></rect>
          <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254"></circle>
        </svg>
      </div>

      <div class="time">
        <div class="time__block">
          <div class="time__minutes">
            <TextInput
              ref="input"
              v-bind:value="displayMinutes"
              v-on:blur="updateDisplayMinutes"
              @input="this.minutes"
              v-bind:disabled="disabled"
            />
          </div>
          <p class="time__colon">:</p>
          <div class="time__seconds">
            <TextInput
              v-bind:value="displaySeconds"
              v-on:blur="updateDisplaySeconds"
              @input="this.seconds"
              v-bind:disabled="disabled"
            />
          </div>
        </div>

        <Button v-bind:text="updateText" v-on:click="startTimer"></Button>

        <Button v-on:click="editTime">
          <img v-bind:src="imageGear" width="32" height="32" alt="settings" />
        </Button>
      </div>
    </section>
  </Container>
</template>

<script>
import {useSound} from '@vueuse/sound';
import audio from './audio/times-up.mp3';
import imageGear from './images/gear.svg';
import Container from '../components/UI/Container.vue';
import TextInput from '../Timer/UI/TextInput.vue';
import Button from '../Timer/UI/Button.vue';

export default {
  data() {
    return {
      text: 'start',
      imageGear: imageGear,

      minutes: 5,
      seconds: 0,
      interval: null,
      disabled: false,
      timesUp: false,
    };
  },
  //УСтанавливает мелодию
  setup() {
    const {play, stop} = useSound(audio, {
      volume: 1,
    });

    return {
      play,
      stop,
    };
  },

  components: {
    Container: Container,
    TextInput: TextInput,
    Button: Button,
  },

  mounted() {
    this.focusInput();
  },

  methods: {
    startTimer() {
      if (this.minutes === 0 && this.seconds === 0) return;
      this.timesUp = false;
      this.stop();

      if (this.interval) {
        this.clearTimer();
      } else {
        this.interval = setInterval(() => {
          if (this.seconds <= 0) {
            if (this.minutes === 0) {
              this.play();
              this.timesUp = true;
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

    focusInput() {
      this.$refs.input.$el.focus();
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
  margin: 0 auto;
  font-family: 'bebas', Arial, sans-serif;
  width: 514px;
  height: 514px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.timer__ring {
  stroke: var(--circle-green);
  width: 100%;
  height: 100%;
}

.timer__ring.finished {
  stroke: var(--circle-red);
}

.timer__ring svg {
  box-shadow: -5px 14px 100px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 100%;
  height: 100%;

  fill: var(--black);
}

/* time block */

.time {
  position: absolute;
  z-index: 1;
}

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
    width: 280px;
    height: 280px;
  }

  .time__colon {
    font-size: 100px;
  }
}
</style>
