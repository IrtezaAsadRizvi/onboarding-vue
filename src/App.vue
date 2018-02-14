<template>
  <div id="app">
    <resource-form></resource-form>
    <div class="illustration"><img src="./assets/images/illustration.png" alt=""></div>
  </div>
</template>

<script>
import resourceForm from './components/resourceForm/resourceForm.vue'
import companyForm from './components/companyForm/companyForm.vue'

export default {
  components: {
    'resource-form': resourceForm,
    'company-form': companyForm
  }
}
</script>

<style lang="css" src="./App.css"></style>
