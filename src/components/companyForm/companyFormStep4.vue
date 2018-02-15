<template lang="html">
  <div class="">
    <!-- step 4 -->
    <div class="steps col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0" id="step4">
      <!-- bank -->
      <div class="form-group">
        <label for="company_bank_name" class="label">Bank</label>
        <label for="company_bank_name" class="label sub-label">Enter bank name</label>
        <input type="email"
          class="form-control form-input"
          name="company_bank_name"
          placeholder="Bank Name"
          v-validate="'required|alpha_spaces'"
          :class="{'error-field': errors.has('company_bank_name')}"
          data-vv-as="Bank name">
        <span v-show="errors.has('company_bank_name')" class="error-text">{{ errors.first('company_bank_name') }}</span>
      </div>
      <!-- Branch -->
      <div class="form-group">
        <label for="name" class="label">Branch</label>
        <label for="name" class="label sub-label">Enter branch name</label>
        <input type="email"
          class="form-control form-input"
          name="company_bank_branch"
          placeholder="Branch Name"
          v-validate="'required|alpha_spaces'"
          :class="{'error-field': errors.has('company_bank_branch')}"
          data-vv-as="Bank Branch name">
        <span v-show="errors.has('company_bank_branch')" class="error-text">{{ errors.first('company_bank_branch') }}</span>
      </div>
      <!-- Account Name -->
      <div class="form-group">
        <label for="name" class="label">Account Name</label>
        <label for="name" class="label sub-label">Enter bank account name</label>
        <input type="email"
          class="form-control form-input"
          name="company_bank_acc_name"
          placeholder="Account Name"
          v-validate="'required|alpha_spaces'"
          :class="{'error-field': errors.has('company_bank_acc_name')}"
          data-vv-as="Bank Account name">
        <span v-show="errors.has('company_bank_acc_name')" class="error-text">{{ errors.first('company_bank_acc_name') }}</span>
      </div>
      <!-- Account no -->
      <div class="form-group">
        <label for="name" class="label">Account No</label>
        <label for="name" class="label sub-label">Enter your bank account number</label>
        <input type="email"
          class="form-control form-input"
          name="company_bank_acc_no"
          placeholder="Account Number"
          v-validate="'required|alpha_num'"
          :class="{'error-field': errors.has('company_bank_acc_no')}"
          data-vv-as="Bank Account name">
        <span v-show="errors.has('company_bank_acc_no')" class="error-text">{{ errors.first('company_bank_acc_no') }}</span>
      </div>

    </div>
    <!-- end of step 4 -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
