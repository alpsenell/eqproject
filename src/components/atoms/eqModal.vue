<template>
  <Dialog
    :header="header"
    :visible="visible"
    closeOnEscape
    :containerStyle="{ width: '50vw' }"
    @update:visible="$emit('hide')"
  >
    <slot />
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';

export default {
  components: {
    Dialog,
  },
  props: {
    header: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
  }
}
</script>
