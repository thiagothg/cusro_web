<template>
  <div class="display">{{ value }}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style scoped>
.display {
  grid-column: span 4;
  background-color: #0004;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 25px;
  font-size: 2.2em;
  overflow: hidden;
}
</style>
