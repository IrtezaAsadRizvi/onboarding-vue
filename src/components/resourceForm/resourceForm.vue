<template lang="html">
  <div>
    <div id="on-boarding">
      <div class="container">
        <div class="row">
          <div class="ob-page-header">Get work in just few steps</div>
          <!-- progress steps -->
          <div class="col-12 d-none d-sm-none d-md-block">
            <ul id="progress" class="d-flex justify-content-around">
              <li class="progress-step active d-flex align-items-center active"><span class="progress-num">1</span> Personal Info</li>
              <div class="right-arrow"><img src="../../assets/images/arrow-point-to-right.svg" alt=""></div>
              <li class="progress-step d-flex align-items-center"><span class="progress-num">2</span> Service Info</li>
              <div class="right-arrow"><img src="../../assets/images/arrow-point-to-right.svg" alt=""></div>
              <li class="progress-step d-flex align-items-center"><span class="progress-num">3</span> NID Info</li>
            </ul>
          </div>
          <!-- progress bar -->
          <div class="col-12 d-xm-block d-sm-block d-md-none d-lg-none d-xl-none">
            <div class="d-flex justify-content-end">
              <p id="progress-percentage">{{33*(step_no+1)}}%</p>
            </div>
            <div id="progress-bar">
              <div id="progress-bar-fill"></div>
            </div>
            <p id="progress-bar-steps">STEP {{ step_no+1 }} OF 3 : {{ step_name[step_no] }}</p>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0">
            <form class="ob-form">
              <!-- step 1 -->
              <div class="steps" id="step1">
                <!-- file drag and drop -->
                <div class="form-group">
                  <label for="" class="label d-none d-sm-none d-md-block">Profile Image</label>
                  <div class="zone">
                    <div id="dropZ">
                      <div id="upload-icon">
                        <img class="d-none d-sm-none d-md-block"src="../../assets/images/upload.svg" alt="">
                        <img class="d-xm-block d-sm-block d-md-none d-lg-none d-xl-none"src="../../assets/images/user.jpg" alt="">
                      </div>
                      <p class="grey-bold d-none d-sm-none d-md-block">Drag and drop photo here</p>
                      <span class="grey d-none d-sm-none d-md-block">or</span>
                      <div class="ob-selectFile">
                        <label for="file">Upload Photo</label>
                        <input type="file" id="fileinput">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Name -->
                <div class="form-group">
                  <label for="name" class="label">Name</label>
                  <input type="email" class="form-control form-input" name="name" placeholder="Full Name">
                </div>
                <!-- Gender -->
                <div class="form-group">
                  <label for="gender" class="label">Gender</label><br>
                  <div class="container row">
                    <label class="radio col">Male
                      <input type="radio" checked="checked" name="gender" value="male">
                      <span class="checkmark"></span>
                    </label>
                    <label class="radio col">Female
                      <input type="radio" checked="checked" name="gender" value="female">
                      <span class="checkmark"></span>
                    </label>
                    <label class="radio col">Other
                      <input type="radio" checked="checked" name="gender" value="other">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <!-- Contact number -->
                <div class="form-group">
                  <label for="contact_number" class="label">Contact number</label>
                  <input type="text" class="form-control form-input" name="name" placeholder="Valid number">
                </div>
                <!-- Area -->
                <div class="form-group">
                  <label for="name" class="label">Area</label>
                  <div class="select">
                      <select>
                          <option selected disabled class="option">Select your area</option>
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
                  <textarea name="address" class="form-control form-input" rows="4" placeholder="Type your address here"></textarea>
                </div>
                <!-- Next step button -->
                <div class="form-group ob-submit-container text-center">
                  <div class="container ob-submit-subcontainer">
                    <div class="row">
                      <div class="col-12">
                        <div class="btn btn-block ob-submit" @click="next">Next</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end of step 1 -->
              <!-- step 2 -->
              <div class="steps" id="step2">
                <!-- Service Area -->
                <div class="form-group">
                  <label for="name" class="label">Service Area</label>
                  <div class="select">
                      <select @change="selectServiceArea">
                          <option selected disabled>Select service area</option>
                          <option v-for="area in service_areas" value="">{{area}}</option>
                      </select>
                      <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
                  </div>
                  <ul class="selected-areas">
                    <li v-for="area in selected_areas"><div class="list-bullet"></div>{{area}}</li>
                  </ul>
                </div>
                <!-- Expertise -->
                <div class="form-group">
                  <label for="name" class="label">Expertise</label>
                  <label for="name" class="label sub-label">Select your expertise</label>
                  <div class="expertise-container d-flex justify-content-between">
                    <div class="expertise" @click="expertiseMenu($event, 'repair')">
                        <img src="../../assets/images/repair.svg" alt="repair">
                        <p>Repair</p>
                    </div>
                    <div class="expertise" @click="expertiseMenu($event, 'beauty')">
                        <img src="../../assets/images/beauty.svg" alt="beauty">
                        <p>Beauty</p>
                    </div>
                    <div class="expertise" @click="expertiseMenu($event, 'cleaning')">
                        <img src="../../assets/images/cleaning-service.svg" alt="cleaning">
                        <p>Cleaning</p>
                    </div>
                    <div class="expertise" @click="expertiseMenu($event, 'food')">
                        <img src="../../assets/images/food.svg" alt="food">
                        <p>Food</p>
                    </div>
                    <div class="expertise" @click="expertiseNone = true">
                        <p>None</p>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div v-if="!expertiseNone" v-for="expertise in catagorizedExpertise">
                    <label class="checkboxcontainer">{{expertise}}
                      <input type="checkbox">
                      <span class="checkboxcheckmark"></span>
                    </label>
                  </div>
                  <div v-if="expertiseNone">
                    <p>What is your role in your company?</p>
                    <label class="radio">Admin
                      <input type="radio" checked="checked" name="gender" value="male">
                      <span class="checkmark"></span>
                    </label><br>
                    <label class="radio">Finance
                      <input type="radio" checked="checked" name="gender" value="male">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <!-- Next step button -->
                <div class="form-group ob-submit-container">
                  <div class="container ob-submit-subcontainer">
                    <div class="row">
                      <div class="col-12">
                        <div class="btn btn-block ob-submit" @click="next">Next</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end of step 2 -->
              <!-- step 3 -->
              <div class="steps" id="step3">
                <p>You are just one step away from completing your profile</p>
                <!-- Name -->
                <div class="form-group">
                  <label for="name" class="label">NID Number</label>
                  <label for="name" class="label sub-label">Enter your NID card number</label>
                  <input type="email" class="form-control form-input" name="name" placeholder="NID Number">
                </div>

                <!-- file drag and drop -->
                <div class="form-group">
                  <label for="" class="label d-none d-sm-none d-md-block">NID Attachment</label>
                  <label for="name" class="label sub-label">Enter your NID card number</label>
                  <div class="zone">
                    <div id="dropZ">
                      <div id="upload-icon">
                        <img class="d-none d-sm-none d-md-block"src="../../assets/images/upload.svg" alt="">
                        <img class="d-xm-block d-sm-block d-md-none d-lg-none d-xl-none"src="../../assets/images/user.jpg" alt="">
                      </div>
                      <p class="grey-bold d-none d-sm-none d-md-block">Drag and drop photo here</p>
                      <span class="grey d-none d-sm-none d-md-block">or</span>
                      <div class="ob-selectFile">
                        <label for="file">Upload Photo</label>
                        <input type="file" id="fileinput">
                      </div>
                    </div>
                  </div>
                </div>

                <p><small>By clicking submit I agree to these <a class="link" href="">terms and conditions</a></small></p>
                <!-- Next step button -->
                <div class="form-group ob-submit-container">
                  <div class="container ob-submit-subcontainer" >
                    <div class="row">
                      <div class="col-12">
                        <div class="btn btn-block ob-submit" @click="submit">Submit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end of step 3 -->
            </form>
          </div>
          <!-- end of form div -->
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit-alert-container">
            <div class="alert alert-success submit-alert" role="alert">
              <!-- icon here --><strong>Why we need this information?</strong><br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
      <div class="illustration"><img src="../../assets/images/illustration.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      step_name: ['Personal Info', 'Service Info', 'NID Info'],
      step_no: 0,
      service_areas: ['mirpur', 'gulshan', 'banani', 'uttara', 'dhanmondi', 'khilgaon'],
      selected_areas: [],
      expertises: [],
      catagorizedExpertise: [],
      expertiseNone: false
    }
  },
  methods: {
    next: function () {

    },
    submit: function () {

    },
    selectServiceArea: function (e) {
      if(this.selected_areas.length < 3){
        if (!this.selected_areas.includes(this.service_areas[e.target.selectedIndex -1])) {
          this.selected_areas.push(this.service_areas[e.target.selectedIndex -1])
        }else {
          console.log("you already selected this area")
        }
      }else {
        console.log("can't select anymore")
      }
    },
    expertiseMenu: function (e, expertise) {
      this.expertiseNone = false
      if (expertise == 'repair') {
        this.catagorizedExpertise = ['ac repair', 'lock repair', 'laptop repair', 'mobile repair']
      }
      else if (expertise == 'beauty') {
        this.catagorizedExpertise = ['hair style', 'facial', 'beauty 1', 'beauty 2']
      }
      else if (expertise == 'cleaning') {
        this.catagorizedExpertise = ['house cleaning', 'car cleaning', 'cleaning 1', 'cleaning 2', 'cleaning']
      }
      else if (expertise == 'food') {
        this.catagorizedExpertise = ['cooking', 'food delivery', 'diet planner']
      }
    }
  },
  mounted: function () {
    var vue = this
    // STEP TRANSITION
    var current_fs, next_fs
    var current_step;

    $(".ob-submit").click(function(){
      current_fs = $(this).parent().parent().parent().parent().parent()
      next_fs = $(this).parent().parent().parent().parent().parent().next()
      current_fs.addClass('slide-out').delay(300).hide();
      next_fs.fadeIn(300);
      console.log(vue.step_no);
      vue.step_no++;
      // progress step web
      $(".progress-step").eq(current_fs.index()).removeClass('active')
      $(".progress-step").eq(next_fs.index()).addClass('active')
      // progress bar fill
      $("#progress-bar-fill").css('width', (($(this).parent().parent().parent().parent().parent().next().index() + 1)*33.33)+'%')
    })

    $(".expertise").click(function() {
      $(".expertise").removeClass('active')
      $(this).addClass('active')
    })
  }
}
</script>

<style lang="css">
</style>
