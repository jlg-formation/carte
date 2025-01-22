<template>
  <div>
    <button class="btn" @click="increment">Counter : {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  console.log("count: ", count);
  console.log("count.value: ", count.value);
  count.value++;
}
</script>
