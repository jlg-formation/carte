<template>
  <div>
    <button class="btn" @click="increment">Counter : {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "NiceCounter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      console.log("this: ", this);
      console.log("this.count: ", this.count);
      this.count++;
    },
  },
};
</script>
