<template>
  <div>
    <button class="btn" @click="increment">
      Counter : {{ x.truc.trac.counter }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const x = ref({ truc: { trac: { counter: 0 } } });

function increment() {
  x.value.truc.trac.counter++;
  console.log("x: ", x);
  console.log("x.value: ", x.value);
}
</script>
