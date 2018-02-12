<template>
  <div id="app">
    <company-form></company-form>
  </div>
</template>

<script>
import resourceForm from './components/resourceForm/resourceForm.vue'
import companyForm from './components/companyForm/companyForm.vue'

export default {
  components: {
    'company-form': companyForm
  }
}
</script>

<style lang="css" src="./App.css"></style>
