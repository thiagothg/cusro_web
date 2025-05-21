<template>
  <div class="calculator">
    <Display :value="displayValue" />

    <Button label="AC" triple @onClick="clearMemory" />
    <Button label="/" operation @onClick="setOperation" />
    <Button label="7" @onClick="addDigit" />
    <Button label="8" @onClick="addDigit" />
    <Button label="9" @onClick="addDigit" />
    <Button label="*" operation @onClick="setOperation" />
    <Button label="4" @onClick="addDigit" />
    <Button label="5" @onClick="addDigit" />
    <Button label="6" @onClick="addDigit" />
    <Button label="-" operation @onClick="setOperation" />
    <Button label="1" @onClick="addDigit" />
    <Button label="2" @onClick="addDigit" />
    <Button label="3" @onClick="addDigit" />
    <Button label="+" operation @onClick="setOperation" />
    <Button label="0" double @onClick="addDigit" />
    <Button label="." @onClick="setOperation" />
    <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import Display from "@/components/Display.vue";
import Button from "@/components/Button.vue";
export default {
  components: {
    Display,
    Button,
  },
  data() {
    return {
      displayValue: 0,
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.current = 1;
        this.operation = operation;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        const values = [...this.values];
        try {
          values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
            this.clearMemory();
            return;
          }
        } catch (e) {
          values[0] = this.values[0];
        }
        values[1] = 0;
        this.displayValue = values[0];
        this.current = equals ? 0 : 1;
        this.operation = equals ? null : operation;
        this.clearDisplay = !equals;
      }
    },
    addDigit(digit) {
      if (digit === "." && this.displayValue.includes(".")) {
        return;
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + digit;
      this.displayValue = displayValue;
      this.clearDisplay = false;
      if (digit !== ".") {
        const i = this.current;
        const value = parseFloat(displayValue);
        this.values[i] = value;
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  width: 320px;
  height: 290px;
  border-radius: 5px;
  overflow: hidden;
  border: solid 1px #888;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px 48px;
}
</style>
