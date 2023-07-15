<template>
  <li>
    <nuxt-link :to="url" target="_blank" v-if="label && url">
      <dt
        class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50"
      >
        <div
          class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500"
        >
          <icon v-if="icon" :name="icon" class="h-7 w-7" />
          <icon v-else name="ph:link-simple" class="h-7 w-7" />
        </div>
        <div class="w-full flex-grow min-w-0">
          <p class="font-medium text-xl leading-6 text-gray-900">
            {{ label }}
          </p>
          <div v-if="videoUrl" class="mt-2">
            <a :href="videoUrl" target="_blank">Watch Video</a>
          </div>
        </div>
      </dt>
    </nuxt-link>
    <!-- Popup-Code hier einfuegen -->
    <div class="coupon-popup" :class="{ 'show': showPopup }" @click.self="closePopup">
      <div class="card" :class="{ 'slide-in': showPopup }">
        <button class="close-button" @click="closePopup">Close</button>
        <div class="main">
          <div class="co-img">
            <img
              src="https://i.ibb.co/0yY1zxt/Only-Fans-Social-Icon-Rounded-Blue.png"
              alt=""
            />
          </div>
          <div class="vertical"></div>
          <div class="content">
            <h2 class="offer-title">Limited offer</h2>
            <h1 class="discount">50% <span>Off</span></h1>
            <p :id="countdownId">{{ countdownText }}</p>
          </div>
        </div>
        <div class="copy-button">
          <input id="copyvalue" ref="textInput" type="text" readonly :value="displayText">
          <button @click="redirectToOnlyFans" class="copybtn btn-effect">SEND</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "ph:link-simple",
  },
  videoUrl: {
    type: String,
  },
});

const showPopup = ref(false);
const countdownId = 'countdown';
const countdownText = ref('Only 02:00 minutes left');
let timer;
const displayText = ref('');

onMounted(async () => {
  setTimeout(() => {
    showPopup.value = true;
    startCountdown(120, countdownId);
    typeText("Hey Dalia 👋🏻 Whats up? 😏", 80);
  }, 1000);
});

function startCountdown(duration, elementId) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownText.value = "Only " + minutes + ":" + seconds + " minutes left";

    if (--timer < 0) {
      countdownText.value = "Expired";
      clearInterval(timer);
    }
  }, 1000);
}

function typeText(text, speed) {
  let i = 0;
  const interval = setInterval(() => {
    displayText.value += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

function closePopup() {
  showPopup.value = false;
  clearInterval(timer);
}

function redirectToOnlyFans() {
  window.location.href = 'https://onlyfans.com/dalia-demirel';
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

/* Ihr CSS-Code hier */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.coupon-popup {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none; /* Klickereignisse ignorieren */
}

.coupon-popup.show {
  opacity: 1;
  pointer-events: auto; /* Klickereignisse akzeptieren */
}

.card {
  position: relative;
  width: 400px;
  height: 180px;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px 10px;
}

.main,
.copy-button {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}

.co-img img {
  width: 70px;
  height: 70px;
  margin-left: 35px;
}

.vertical {
  border-left: 5px dotted black;
  height: 100px;
  position: absolute;
  left: 40%;
}

.content h2.offer-title {
  font-size: 18px;
  margin-left: -20px;
  color: #565656;
  text-transform: uppercase;
}

.content h1.discount {
  font-size: 35px;
  margin-left: -20px;
  color: #565656;
  font-weight: bold;
}

.content h1.discount span {
  font-size: 18px;
}

.content p {
  font-size: 16px;
  color: #696969;
  margin-left: -20px;
}

.copy-button {
  margin: 12px 0 -5px 0;
  height: 45px;
  border-radius: 4px;
  padding: 0 5px;
  border: 1px solid #e1e1e1;
}

.copy-button input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
}

.copy-button button {
  padding: 5px 20px;
  background-color: #00aeef;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 50px;
}

.copy-button button:active {
  transform: scale(0.95);
  background-color: #0088cc;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #696969;
  cursor: pointer;
}

.slide-in {
  animation: slide-in 0.5s ease forwards;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
