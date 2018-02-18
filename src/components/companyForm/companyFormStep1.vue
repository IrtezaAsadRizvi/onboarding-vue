<template lang="html">
  <!-- step 1 -->
  <div class="steps col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0" id="step1">
    <!-- Name -->
    <div class="form-group">
      <label for="company_name" class="label">Name</label>
      <label for="company_name" class="label sub-label">Enter your company name</label>
      <input type="text"
        class="form-control form-input"
        v-validate="'required|alpha_spaces'"
        :class="{'error-field': errors.has('company_name')}"
        name="company_name"
        v-model="formData.company_name"
        placeholder="Company Name"
        data-vv-as="Name">
      <span v-show="errors.has('company_name')" class="error-text">{{ errors.first('company_name') }}</span>
    </div>
    <!-- Area -->
    <div class="form-group">
      <label for="area" class="label">Select your service location</label>
      <div class="select">
          <select name="company_area"
            v-validate="'required'"
            v-model="formData.company_area"
            :class="{'error-field': errors.has('company_area')}">
              <option value="mirpur">mirpur</option>
              <option value="dhanmondi">dhanmondi</option>
              <option value="banani">banani</option>
          </select>
          <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
      </div>
    </div>

    <!-- Address -->
    <div class="form-group">
      <label for="company_address" class="label">Address</label>
      <textarea name="company_address"
        class="form-control form-input" rows="5"
        placeholder="Type your address here"
        v-model="formData.company_address"
        v-validate="'required'"
        :class="{'error-field': errors.has('company_address')}"
        data-vv-as="Address"></textarea>
        <span v-show="errors.has('company_address')" class="error-text">{{ errors.first('company_address') }}</span>
    </div>

    <!-- Licence number -->
    <div class="form-group">
      <label for="licence_number" class="label">Licence number</label>
      <input type="text"
        class="form-control form-input"
        name="licence_number"
        v-model="formData.licence_number"
        placeholder="Licence number"
        v-validate="'required'"
        :class="{'error-field': errors.has('licence_number')}"
        data-vv-as="Licence number">
        <span v-show="errors.has('licence_number')" class="error-text">{{ errors.first('licence_number') }}</span>
    </div>
</div>
  <!-- end of step 1 -->
</template>

<script>
import {global} from '../../main.js'
export default {
  data: function () {
    return {
      formData: {
        company_name: '',
        company_area: 'mirpur',
        company_address: '',
        licence_number: ''
      }
    }
  },
  created: function () {
    global.$on('submitRequest', (data)=>{
      if (data.step == 0) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            global.companyFormData.companyName = this.formData.company_name
            global.companyFormData.companyArea = this.formData.company_area
            global.companyFormData.companyAddress = this.formData.company_address
            global.companyFormData.licenceNumber = this.formData.licence_number
            global.$emit('stepSubmitted', {
              step: data.step
            })
            console.log(this.formData);
          }else {
            console.log('Correct them errors!');
          }
        });
      }
    })
  }
}
</script>

<style lang="css">
</style>
