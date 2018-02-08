<template>
  <div id="app">
    <resource-form></resource-form>
  </div>
</template>

<script>
import resourceForm from './components/resourceForm/resourceForm.vue'
export default {
  components: {
    'resource-form': resourceForm
  }
}
</script>

<style lang="css" src="./App.css"></style>
