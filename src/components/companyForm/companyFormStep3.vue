<template lang="html">
  <!-- step 3 -->
  <div class="steps col-xl-6 col-lg-6 col-md-8 col-sm-12 offset-xl-3 offset-lg-3 offset-md-2 offset-sm-0" id="step3">
    <p>You are just one step away from completing your profile</p>
    <!-- working days -->
    <label for="" class="big-label">Operation Day</label>
    <label for="" class="label sub-label">Select your working days</label>
    <div class="form-group">
      <label for="op-days" class="label">How do you work?</label><br>
      <label class="radio sml-text">Different times in different days
        <input type="radio" name="dailyOperationTimeType" v-model="dailyOperationTimeType" value="different_times">
        <span class="checkmark"></span>
      </label><br>
      <label class="radio sml-text">Same time every day
        <input type="radio" name="dailyOperationTimeType" v-model="dailyOperationTimeType" value="same_time">
        <span class="checkmark"></span>
      </label>
    </div>
    <div style="padding-bottom: 30px" v-if="dailyOperationTimeType == 'same_time'">
      <label class="label">Working hours</label>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-4">
          <div class="select" id="time-select">
              <select>
                  <option selected disabled class="option">12:00 PM</option>
                  <option>Mirpur</option>
                  <option>Dhanmondi</option>
                  <option>Banani</option>
              </select>
              <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-4">
          <div class="select" id="time-select">
              <select  >
                  <option selected disabled class="option">12:00 PM</option>
                  <option>Mirpur</option>
                  <option>Dhanmondi</option>
                  <option>Banani</option>
              </select>
              <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- days -->
    <div v-if="dailyOperationTimeType == 'same_time' || dailyOperationTimeType == 'different_times'">
      <div class="row list-row">
        <div class="col-md-4 col-sm-4 col-4">
          <label class="grey">Day</label>
        </div>
        <div class="col-md-4 col-sm-4 col-4">
          <label class="grey">From</label>
        </div>
        <div class="col-md-4 col-sm-4 col-4">
          <label class="grey">To</label>
        </div>
      </div>
      <div class="row date d-flex align-items-center list-row" v-for="date in dailyOperationTime">
        <div class="col-md-4 col-sm-4 col-4">
          <label class="checkboxcontainer no-margin-bottom">{{ date.day }}
            <input type="checkbox" @click="date.selected = !date.selected">
            <span class="checkboxcheckmark"></span>
          </label>
        </div>
        <div class="col-md-4 col-sm-4 col-4" v-if="date.selected">
          <div class="select" id="time-select">
              <select>
                  <option selected disabled class="option">12:00 PM</option>
                  <option>Mirpur</option>
                  <option>Dhanmondi</option>
                  <option>Banani</option>
              </select>
              <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-4" v-if="date.selected">
          <div class="select" id="time-select">
              <select  >
                  <option selected disabled class="option">12:00 PM</option>
                  <option>Mirpur</option>
                  <option>Dhanmondi</option>
                  <option>Banani</option>
              </select>
              <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-4" v-if="!date.selected">
          <p class="grey no-margin-bottom">Not Working</p>
        </div>
      </div>
    </div>
    <!-- end ofdays -->
  </div>
  <!-- end of step 3 -->
</template>

<script>
export default {
  data: function () {
    return {
      dailyOperationTimeType: '',
      dailyOperationTime: [
        { day: 'sunday', from: '', to: '', selected: false },
        { day: 'monday', from: '', to: '' , selected: false},
        { day: 'tuesday', from: '', to: '' , selected: false},
        { day: 'wednessday', from: '', to: '' , selected: false},
        { day: 'thursday', from: '', to: '' , selected: false},
        { day: 'friday', from: '', to: '' , selected: false},
        { day: 'saturday', from: '', to: '' , selected: false}
      ]
    }
  },
  methods: {
    setDailyOperationTimeType: function () {
      console.log(this.dailyOperationTimeType);
    }
  }
}
</script>

<style lang="css">
</style>
