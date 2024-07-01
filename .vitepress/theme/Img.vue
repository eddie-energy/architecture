<script setup>
import { ref } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
});

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
  <div>
    <img
      :src="src"
      :alt="alt"
      @click="toggleActive"
    />
    <div v-if="isActive" class="overlay" @click="toggleActive">
      <img :src :alt class="enlarged" />
    </div>
  </div>
</template>
<style scoped>
img {
  cursor: zoom-in;
  max-width: 100%;
  height: auto;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
}
.overlay img {
  cursor: zoom-out;
}
img.enlarged {
  max-width: 90%;
  max-height: 90%;
  z-index: 1001;
}
</style>
