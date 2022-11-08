<template>
  <div class="flex justify-between p-4 border items-center">
    <div class="flex">
      <p>{{ coin.symbol }}</p>
      <p class="font-bold px-1">-</p>
      <p>{{ coin.askPrice }}</p>
    </div>
    <div class="flex">
      <InputNumber
        v-model="value"
        id="minmax-buttons"
        class="w-32"
        mode="decimal"
        showButtons
        :min="0"
        @input="$emit('input', $event)"
      />
      <eq-button
        class="ml-4"
        label="Add"
        @click="$emit('add', { coin, count: value })"
      />
    </div>
  </div>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import eqButton from '@/components/atoms/eqButton';

export default {
  components: {
    InputNumber,
    eqButton,
  },
  data() {
    return {
      value: 1,
    };
  },
  props: {
    coin: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.p-inputnumber-input {
  width: 100%;
}
</style>
