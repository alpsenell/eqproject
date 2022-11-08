<template>
  <div id="app">
    <Listing />
  </div>
</template>

<script>
import Listing from '@/components/pages/Listing';

export default {
  name: 'App',
  components: {
    Listing,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style src='primevue/resources/themes/saga-blue/theme.css'></style>
<style src='primevue/resources/primevue.min.css'></style>
