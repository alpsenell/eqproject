<template>
  <div class="flex">
    <eq-button
      label="Add / Update"
      @click="$emit('openModal')"
    />
    <eq-button
      class="ml-4"
      label="Refresh"
      @click="$emit('refresh')"
    />
  </div>
</template>

<script>
import eqButton from '@/components/atoms/eqButton';
export default {
  components: {
    eqButton,
  }
}
</script>
