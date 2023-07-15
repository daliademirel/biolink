<template>
  <li>
    <nuxt-link :to="url" target="_blank">
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

    <!-- Popup-Code hier eingefügt und als Button angepasst -->
    <div class="coupon-popup" :class="{ 'show': showPopup }" @click.self="closePopup">
      <button class="card" :class="{ 'slide-in': showPopup }" @click="closePopup">
        Close
      </button>
    </div>
  </li>
</template>

<script setup>
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

onMounted(() => {
  setTimeout(() => {
    showPopup.value = true;
  }, 5000);
});

function closePopup() {
  showPopup.value = false;
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.coupon-popup {
  /* Ändern Sie die Position auf "absolute" und die Höhe und Breite auf "auto" */
  position: absolute;
  width: auto;
  height: auto;
  /* Entfernen Sie die Hintergrundfarbe und die Ausrichtungseigenschaften */
  z-index: 9999;
}

.card {
  /* Ändern Sie die Breite und Höhe auf kleinere Werte, um einen Button darzustellen */
  width: 100px;
  height: 50px;
  /* Ändern Sie die Hintergrundfarbe und den Schatten, um einen Button darzustellen */
  background-color: #00aeef;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  /* Zentrieren Sie den Text im Button */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Fügen Sie eine Randradius hinzu, um den Button abgerundet zu machen */
  border-radius: 25px;
  /* Fügen Sie eine Schriftfarbe hinzu */
  color: white;
  /* Fügen Sie eine Schriftgröße hinzu */
  font-size: 14px;
  /* Fügen Sie einen Cursor hinzu */
  cursor: pointer;
}
</style>
