<template>
  <div>
    <button class="btn" @click="increment">
      Counter : {{ x.truc.trac.counter }}
    </button>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";

const x = shallowRef({ truc: { trac: { counter: 0 } } });

function increment() {
  x.value = { truc: { trac: { counter: x.value.truc.trac.counter + 1 } } };
  console.log("x: ", x);
  console.log("x.value: ", x.value);
}
</script>
