<template>
  <div>
    <button class="btn" @click="increment">
      Counter : {{ x.truc.trac.counter }}
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const x = reactive({ truc: { trac: { counter: 0 } } });

function increment() {
  x.truc.trac.counter++;
  console.log("x: ", x);
  console.log("x.truc: ", x.truc);
}
</script>
