<template lang="html">
  <!-- step 1 -->
  <div class="steps col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0" id="step1">
    <!-- Name -->
    <div class="form-group">
      <label for="name" class="big-label">Name</label>
      <label for="name" class="label sub-label">Enter your company name</label>
      <input type="name" class="form-control form-input" name="name" placeholder="Company Name">
    </div>
    <label for="Adress" class="big-label">Adress</label>
    <label for="Adress" class="label sub-label">Enter your company name</label>
    <!-- Area -->
    <div class="form-group">
      <label for="area" class="sml-label">Area</label>
      <div class="select">
          <select>
              <option selected class="option">Choose area</option>
              <option>Mirpur</option>
              <option>Dhanmondi</option>
              <option>Banani</option>
          </select>
          <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
      </div>
    </div>

    <!-- Address -->
    <div class="form-group">
      <label for="name" class="label">Address</label>
      <textarea name="address" class="form-control form-input" rows="5" placeholder="Type your address here"></textarea>
    </div>

    <!-- Licence number -->
    <div class="form-group">
      <label for="licence_number" class="label">Licence number</label>
      <input type="text" class="form-control form-input" name="name" placeholder="Licence number">
    </div>
</div>
  <!-- end of step 1 -->
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
