<template>
  <button
    class="button"
    :class="{
      double,
      triple,
      operation,
    }"
    :disabled="disabled"
    @click="$emit('onClick', label)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: {
      type: Boolean,
      default: false,
    },
    double: {
      type: Boolean,
      default: false,
    },
    triple: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4em;
  /* background-color: var(--bg-button); */
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  border: none;
  outline: none;
  /* border-radius: 2px; */
  /* color: #000;
      cursor: pointer;
      transition: all 0.3s ease; */
}
.button:active {
  background-color: #ccc;
  border: solid 1px #444;
}
.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #fa8231;
  color: white;
  /* border: none; */
  /* border-radius: 0; */
}
.button.operation:active {
  background-color: #fa8231cc;
}
</style>
