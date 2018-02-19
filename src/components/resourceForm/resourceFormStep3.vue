<template lang="html">
  <!-- step 3 -->
  <div class="steps col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0" id="step3">
    <p>You are just one step away from completing your profile</p>
    <!-- Nid number -->
    <!-- optional -->
    <div class="form-group">
      <label for="resource_nid_num" class="label">NID Number</label>
      <label for="resource_nid_num" class="label sub-label">Enter your NID card number</label>
      <input type="text"
        class="form-control form-input"
        name="resource_nid_num"
        placeholder="NID Number"
        v-model="resource_nid_num"
        v-validate="'numeric'"
        :class="{'error-field': errors.has('resource_nid_num')}"
        data-vv-as="NID Number">
      <span v-show="errors.has('resource_nid_num')" class="error-text">{{ errors.first('resource_nid_num') }}</span>
    </div>

    <!-- Nid Attachment -->
    <div class="form-group">
      <label for="name" class="label">NID Attachment</label>
      <label for="name" class="label sub-label">Attach your NID</label>
      <input type="file" id="file_nid" />
      <label for="file_nid" class="file__drop_nid" data-image-uploader-nid>
        <img id="img-preview" v-if="nidImgUploaded" data-image-nid />
        <div id="upload-icon" v-if="!nidImgUploaded">
          <img class="d-none d-sm-none d-md-block"src="../../assets/images/upload.svg" alt="">
          <img class="d-xm-block d-sm-block d-md-none d-lg-none d-xl-none"src="../../assets/images/image-filled-square.svg" alt="">
        </div>
        <p class="grey-bold d-none d-sm-none d-md-block" v-if="!nidImgUploaded">Drag and drop photo here <br><span class="grey d-none d-sm-none d-md-block">or</span></p>

        <div id="upload-btn" for="file">
          <span v-if="!nidImgUploaded">Upload Photo</span>
          <span v-if="nidImgUploaded">Choose Another</span>
        </div>
      </label>
    </div>

    <p><small>By clicking submit I agree to these <a class="link" href="">terms and conditions</a></small></p>

  </div>
  <!-- end of step 3 -->
</template>

<script>
import {global} from '../../main.js'
export default {
  data: function () {
    return {
      resource_nid_num: '',
      // file upload
      nidImgUploaded: false
    }
  },
  created: function () {
    global.$on('resSubmitRequest', (data)=>{
      if (data.step == 2) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            global.resourceFormData.resourceNidNumber = this.resource_nid_num
            global.$emit('resStepSubmitted', {
              step: data.step
            })
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
