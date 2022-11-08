<template>
  <div class="flex justify-between p-4 border items-center">
    <div class="flex">
      <p>{{ coin.symbol }}</p>
      <p class="font-bold px-1">-</p>
      <p>{{ coin.askPrice }}</p>
    </div>
    <div class="flex">
      <InputNumber
        :value="newCount"
        id="minmax-buttons"
        class="w-32"
        mode="decimal"
        showButtons
        :min="0"
        @input="onInput"
      />
      <eq-button
        class="ml-4"
        label="Update"
        @click="$emit('add', { coin, count: newCount })"
      />
      <eq-button
        class="ml-4"
        label="Remove"
        extra-class="p-button-danger"
        @click="$emit('remove', coin)"
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
      newCount: this.value,
    };
  },
  watch: {
    value() {
      this.newCount = this.value;
    },
  },
  props: {
    coin: {
      type: Object,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    }
  },
  methods: {
    onInput(value) {
      this.newCount = value;
    },
  },
}
</script>

<style lang="scss">
.p-inputnumber-input {
  width: 100%;
}

.p-inputnumber-button {
  background-color: #2196F3 !important;
}
</style>
