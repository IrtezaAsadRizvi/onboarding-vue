<template lang="html">
  <!-- step 1 -->
  <div class="steps col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0" id="step1">

    <!-- file drag and drop -->
    <div class="form-group">
      <label for="" class="label d-none d-sm-none d-md-block">Profile Image</label>
      <input type="file" id="file" />
      <!-- the area of drag & drop -->
      <label for="file" class="file__drop" data-image-uploader>
        <img id="img-preview" v-if="profImgUploaded" data-image />
        <div id="upload-icon" v-if="!profImgUploaded">
          <img class="d-none d-sm-none d-md-block"src="../../assets/images/upload.svg" alt="">
          <img class="d-xm-block d-sm-block d-md-none d-lg-none d-xl-none"src="../../assets/images/user.jpg" alt="">
        </div>
        <p class="grey-bold d-none d-sm-none d-md-block" v-if="!profImgUploaded">Drag &amp; drop photo here <br><span class="grey d-none d-sm-none d-md-block">or</span></p>

        <div id="upload-btn" for="file">
          <span v-if="!profImgUploaded">Upload Photo</span>
          <span v-if="profImgUploaded">Choose Another</span>
        </div>
      </label>
    </div>

    <!-- Name -->
    <div class="form-group">
      <label for="resource_name" class="label">Name</label>
      <input type="text"
        class="form-control form-input"
        name="resource_name"
        placeholder="Full Name"
        v-validate="'required|alpha_spaces'"
        :class="{'error-field': errors.has('resource_name')}"
        data-vv-as="Name">
      <span v-show="errors.has('resource_name')" class="error-text">{{ errors.first('resource_name') }}</span>
    </div>

    <!-- Gender -->
    <div class="form-group">
      <label for="resource_gender" class="label">Gender</label><br>
      <div class="container row">
        <label class="radio col">Male
          <input type="radio" name="resource_gender" value="male" v-validate="{ rules: 'required', arg: 'resource_gender' }">
          <span class="checkmark"></span>
        </label>
        <label class="radio col">Female
          <input type="radio" name="resource_gender" value="female">
          <span class="checkmark"></span>
        </label>
        <label class="radio col">Other
          <input type="radio" name="resource_gender" value="other">
          <span class="checkmark"></span>
        </label>
      <span v-show="errors.has('resource_gender')" class="error-text">{{ errors.first('resource_gender') }}</span>
      </div>
    </div>

    <!-- Contact number -->
    <div class="form-group">
      <label for="resource_contact_no" class="label">Contact number</label>
      <input type="text"
        class="form-control form-input"
        name="resource_contact_no"
        placeholder="Type a Valid number"
        v-validate="'required|numeric'"
        :class="{'error-field': errors.has('resource_contact_no')}"
        data-vv-as="Contact number">
      <span v-show="errors.has('resource_contact_no')" class="error-text">{{ errors.first('resource_contact_no') }}</span>
    </div>

    <!-- Address -->
    <div class="form-group">
      <label for="resource_address" class="label">Address</label>
      <textarea name="resource_address"
        class="form-control form-input" rows="4" placeholder="Type your address here"
        v-validate="'required'"
        :class="{'error-field': errors.has('resource_address')}"
        data-vv-as="Address"></textarea>
      <span v-show="errors.has('resource_address')" class="error-text">{{ errors.first('resource_address') }}</span>
    </div>
  </div>
  <!-- end of step 1 -->
</template>

<script>
export default {
  data: function () {
    return {
      // file upload
      profImgUploaded: false
    }
  }
}
</script>

<style lang="css">
</style>
