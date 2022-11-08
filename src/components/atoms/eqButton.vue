<template>
  <Button
    class="bg-blue-500"
    :label="label"
    @click="$emit('click')"
  />
</template>

<script>
import Button from 'primevue/button';

export default {
  components: {
    Button,
  },
  props: {
    label: {
      type: String,
      default: ''
    },
  }
}
</script>
