
<template lang="html">
  <div>
    <div id="on-boarding">
      <div class="container">
        <div class="row">
          <div class="ob-page-header" v-if="progressStepNumber <= 2">Get work in just few steps</div>

          <!-- progress steps -->
          <div class="col-12 d-none d-sm-none d-md-block" v-if="progressStepNumber <= 2">
            <ul id="progress" class="d-flex justify-content-around">
              <li class="progress-step d-flex align-items-center" :class="{'active' : progressStepNumber == 0}"><span class="progress-num">1</span> Personal Info</li>
              <div class="right-arrow"><img src="../../assets/images/arrow-point-to-right.svg" alt=""></div>
              <li class="progress-step d-flex align-items-center" :class="{'active' : progressStepNumber == 1}"><span class="progress-num">2</span> Service Info</li>
              <div class="right-arrow"><img src="../../assets/images/arrow-point-to-right.svg" alt=""></div>
              <li class="progress-step d-flex align-items-center" :class="{'active' : progressStepNumber == 2}"><span class="progress-num">3</span> NID Info (optional)</li>
            </ul>
          </div>

          <!-- progress bar -->
          <div class="col-12 d-xm-block d-sm-block d-md-none d-lg-none d-xl-none" v-if="progressStepNumber <= 2">
            <div class="d-flex justify-content-end">
              <p id="progress-percentage">{{33*(progressStepNumber+1)}}%</p>
            </div>
            <div id="progress-bar">
              <div id="progress-bar-fill" :style="{width : 33*(progressStepNumber+1)+'%'}"></div>
            </div>
            <p id="progress-bar-steps">STEP {{ progressStepNumber+1 }} OF 3 : {{ progressStepName[progressStepNumber] }}</p>
          </div>

          <!-- the resource registration form begins here -->
          <div class="col-12">
            <form class="ob-form">

              <!-- the form contains three 4-col 'step' section which will be switched when 'next' button is pressed, it's done using jquery -->
              <step1 v-if="progressStepNumber == 0"></step1>
              <step2 v-if="progressStepNumber == 1"></step2>
              <step3 v-if="progressStepNumber == 2"></step3>

              <success v-if="progressStepNumber == 3"></success>


              <!-- Next step button -->
              <div class="form-group ob-submit-container text-center col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0">
                <div class="container ob-submit-subcontainer" >
                  <div class="row">
                    <div class="col-12">
                      <div class="btn btn-block ob-submit" @click="next" :style="{textTransform: progressStepNumber <= 2 ? 'uppercase': 'capitalize'}">{{progressStepNumber <= 2 ? 'next' :'Continue to resource portal'}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- end of form div -->

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit-alert-container" v-if="progressStepNumber <= 2">
            <div class="alert alert-success submit-alert" role="alert">
              <img src="../../assets/images/exclamation-sign.svg"><strong>Why we need this information?</strong><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="down-arrow d-xm-block d-sm-block d-md-none d-lg-none d-xl-none"><img src="../../assets/images/arrow-down-green.svg" alt="&#709;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step1 from './resourceFormStep1.vue'
import step2 from './resourceFormStep2.vue'
import step3 from './resourceFormStep3.vue'
import success from './resourceSuccess.vue'
import {global} from '../../main.js'
export default {
  data: function () {
    return {
      // step change
      progressStepName: ['Personal Info', 'Service Info', 'NID Info(optional)'],
      progressStepNumber: 0,

      resourceFormSubmitSuccessful: false
    }
  },
  components: {
    'step1' : step1,
    'step2' : step2,
    'step3' : step3,
    'success' : success
  },
  methods: {
    next: function () {
      global.$emit('resSubmitRequest', {
        step: this.progressStepNumber
      })
    }
  },
  created: function () {
    global.$on('resStepSubmitted', (data)=>{
      if (data.step < 2) {
        this.progressStepNumber++
      }else {
        if (this.progressStepNumber == 4) {
          console.log('go to resource portal');
        }
        console.log(global.resourceFormData);
        this.resourceFormSubmitSuccessful = true;
        this.progressStepNumber++
      }
    })
  },
  // loading jquery after component is mounted
  mounted: function () {
    $('.submit-alert').on('click',function () {
      $('.submit-alert p').slideToggle("slow");
      $('.submit-alert .down-arrow img').toggleClass('up')
    })
  }
}
</script>

<style lang="css"></style>
