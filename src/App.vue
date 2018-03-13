<template>
  <div id="app">
    <resource-form v-if="!goToCompanyForm" resource-id=""></resource-form>
    <company-form v-if="goToCompanyForm"></company-form>
    <div class="illustration"><img src="./assets/images/illustration.png" alt=""></div>
  </div>
</template>

<script>
import resourceForm from './components/resourceForm/resourceForm.vue'
import companyForm from './components/companyForm/companyForm.vue'
import {global} from './main.js'

export default {
  data: function () {
    return {
      goToCompanyForm: false
    }
  },
  components: {
    'resource-form': resourceForm,
    'company-form': companyForm
  },
  created: function () {
    global.$on('companyFormRequest', (data)=>{
      this.goToCompanyForm = true
    })
  }
}
</script>

<style lang="css" src="./App.css"></style>
