<template lang="html">
  <!-- step 3 -->
  <div class="steps col-xl-6 col-lg-6 col-md-8 col-sm-12 offset-xl-3 offset-lg-3 offset-md-2 offset-sm-0" id="step3">
    <!-- working days -->
    <label for="" class="big-label">Operation Day</label>
    <label for="" class="label sub-label">Select your working days</label>



    <!-- days -->
    <div>
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
      <div class="row date d-flex align-items-center list-row" v-for="(date, index) in dailyOperationTime">
        <div class="col-md-4 col-sm-4 col-4">
          <label class="checkboxcontainer no-margin-bottom">{{ date.day }}
            <input type="checkbox" id="date-check-box" @click="selectDay($event ,date, index)">
            <span class="checkboxcheckmark"></span>
          </label>
        </div>
        <div class="col-md-4 col-sm-4 col-4" v-if="date.selected">
          <div class="select" id="time-select">
              <select @change="selectTime(date, $event.target.value, 'from')" :class="defaultStartTimeError? 'error-field': ''">
                  <option selected class="option">{{ defaultStartTime}}</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                  <option>11:00 PM</option>
                  <option>12:00 AM</option>
                  <option>1:00 AM</option>
                  <option>2:00 AM</option>
                  <option>3:00 AM</option>
                  <option>4:00 AM</option>
                  <option>5:00 AM</option>
                  <option>5:00 AM</option>
                  <option>7:00 AM</option>
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
              </select>
              <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-4" v-if="date.selected">
          <div class="select" id="time-select">
              <select @change="selectTime(date, $event.target.value, 'to')" :class="defaultEndTimeError? 'error-field': ''">
                <option selected class="option">{{defaultEndTime}}</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
                <option>11:00 PM</option>
                <option>12:00 AM</option>
                <option>1:00 AM</option>
                <option>2:00 AM</option>
                <option>3:00 AM</option>
                <option>4:00 AM</option>
                <option>5:00 AM</option>
                <option>5:00 AM</option>
                <option>7:00 AM</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
              </select>
              <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-4" v-if="!date.selected">
          <p class="grey no-margin-bottom">Not Working</p>
        </div>
      </div>
    </div>
    <span v-show="formError" class="error-text">{{ formError }}</span>
    <!-- end ofdays -->
  </div>
  <!-- end of step 3 -->
</template>

<script>
import {global} from '../../main.js'
export default {
  data: function () {
    return {
      dailyOperationTime: [
        { day: 'sunday', from: '12:00 PM', to: '12:00 PM', selected: false },
        { day: 'monday', from: '12:00 PM', to: '12:00 PM' , selected: false},
        { day: 'tuesday', from: '12:00 PM', to: '12:00 PM' , selected: false},
        { day: 'wednessday', from: '12:00 PM', to: '12:00 PM' , selected: false},
        { day: 'thursday', from: '12:00 PM', to: '12:00 PM' , selected: false},
        { day: 'friday', from: '12:00 PM', to: '12:00 PM' , selected: false},
        { day: 'saturday', from: '12:00 PM', to: '12:00 PM' , selected: false}
      ],
      setDefaultTime : 0,
      defaultStartTime: null,
      defaultEndTime: null,
      defaultStartTimeError: null,
      defaultEndTimeError: null,
      formError: null,
      firstIndex: -1
    }
  },
  methods: {
    selectTime : function (date, time, type) {
      if (type == 'from') {
        if (this.setDefaultTime == 1) {
          this.defaultStartTime = time
        }
        date.from = time
      }else if (type == 'to'){
        if (this.setDefaultTime == 1) {
          this.defaultEndTime = time
        }
        date.to = time
      }

    },
    selectDay: function (e, date, index) {
      if (this.setDefaultTime == 0) {
        this.firstIndex = index
        date.selected = !date.selected
        if (date.selected == true) {
          this.setDefaultTime ++
        }else {
          this.setDefaultTime --
        }
      }
      else if(this.setDefaultTime > 0) {
        console.log(this.firstIndex);
        if (index != this.firstIndex) {
          e.preventDefault();
          if (this.defaultStartTime && this.defaultEndTime) {
            date.selected = !date.selected
          }else{
            if (!this.defaultStartTime) this.defaultStartTimeError = 'please select time'
            if (!this.defaultEndTime) this.defaultEndTimeError = 'please select time'
          }
        }else {
          date.selected = !date.selected
          this.setDefaultTime --
        }
      }
    }

  },
  watch: {
    defaultStartTime : function () {
      if (!this.defaultStartTime) this.defaultStartTimeError = 'please select time'
      else this.defaultStartTimeError = null
    },
    defaultEndTime : function () {
      if (!this.defaultEndTime) this.defaultEndTimeError = 'please select time'
      else this.defaultEndTimeError = null
    }
  },
  created: function () {
    global.$on('submitRequest', (data)=>{
      if (data.step == 2) {
        var formData = this.dailyOperationTime.filter(function(date) {
           return date.selected == true;
        })
        if (formData.length == 0) {
          this.formError = "please select Operations days."
        }else {
          if (!this.defaultStartTime && !this.defaultEndTime) {
            this.formError = "please select times."
          }else {
            // saving the data and progressing to next step
            global.companyFormData.companyOperationDays = formData
            global.$emit('stepSubmitted', {
              step: data.step
            })
          }
        }
      }
    })
  }
}
</script>

<style lang="css">
</style>
