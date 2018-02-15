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
        placeholder="Company Name"
        data-vv-as="Name"
        @input.lazy="errors.has('name') ? companyNameError = 1 : companyNameError = 0">
      <span v-show="errors.has('company_name')" class="error-text">{{ errors.first('company_name') }}</span>
    </div>
    <!-- Area -->
    <div class="form-group">
      <label for="area" class="label">Select your service location</label>
      <div class="select">
          <select name="company_area"
            v-validate="'required'"
            :class="{'error-field': errors.has('company_area')}">
              <option value="mirpur">Mirpur</option>
              <option value="dhanmondi">Dhanmondi</option>
              <option value="banani">Banani</option>
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
        v-validate="'required'"
        :class="{'error-field': errors.has('company_address')}"
        data-vv-as="Address"
        @input.lazy="errors.has('name') ? companyAddressError = 1 : companyAddressError = 0"></textarea>
        <span v-show="errors.has('company_address')" class="error-text">{{ errors.first('company_address') }}</span>
    </div>

    <!-- Licence number -->
    <div class="form-group">
      <label for="licence_number" class="label">Licence number</label>
      <input type="text"
        class="form-control form-input"
        name="licence_number"
        placeholder="Licence number"
        v-validate="'required'"
        :class="{'error-field': errors.has('licence_number')}"
        data-vv-as="Licence number"
        @input.lazy="errors.has('name') ? companylincenceNoError = 1 : companylincenceNoError = 0">
        <span v-show="errors.has('licence_number')" class="error-text">{{ errors.first('licence_number') }}</span>
    </div>
</div>
  <!-- end of step 1 -->
</template>

<script>
export default {
  data: function () {
    return {
      companyNameError: 1,
      companyAddressError: 1,
      companylincenceNoError: 1
    }
  }
}
</script>

<style lang="css">
</style>
