<template>
  <div>
    <templates-simple v-if="decodedData" :acc="decodedData" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <base-loading class="h-5 w-5" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { decodeData } from "../utils/transformer";
import axios from 'axios';
const route = useRoute();
const acc = route.query.data;
const decodedData = ref({});

onMounted(async () => {
  // Erhalten Sie die IP-Adresse und den Standort des Benutzers
  const response = await axios.get('https://api.ipapi.com/check?access_key=c886500afafa455c348bfdbae47b9522');
  const location = response.data.city || response.data.region_name || response.data.location.capital;
  const flagEmoji = response.data.location.country_flag_emoji;
  decodedData.value = decodeData(acc);
  // Ersetzen Sie "*CITY*" durch den Standort und das Emoji
  if (decodedData.value.d.includes('*CITY*')) {
    decodedData.value.d = decodedData.value.d.replace('*CITY*', `${location} ${flagEmoji}`);
  }
});
</script>
