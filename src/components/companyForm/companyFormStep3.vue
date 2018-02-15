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
      <div class="row date d-flex align-items-center list-row" v-for="date in dailyOperationTime">
        <div class="col-md-4 col-sm-4 col-4">
          <label class="checkboxcontainer no-margin-bottom">{{ date.day }}
            <input type="checkbox" @click="selectDay(date)">
            <span class="checkboxcheckmark"></span>
          </label>
        </div>
        <div class="col-md-4 col-sm-4 col-4" v-if="date.selected">
          <div class="select" id="time-select">
              <select @change="selectTime(date, $event.target.value, 'from')">
                  <option selected class="option">{{ setDefaultTime >= 2 ? defaultStartTime : 'from'}}</option>
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
              <select @change="selectTime(date, $event.target.value, 'to')">
                <option selected class="option">{{ setDefaultTime >= 2 ? defaultEndTime : 'to'}}</option>
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
    <!-- end ofdays -->
  </div>
  <!-- end of step 3 -->
</template>

<script>
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
      defaultStartTime: 'start',
      defaultEndTime: 'end'
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
    selectDay: function (date) {
      date.selected = !date.selected
      if (date.selected) {
        this.setDefaultTime ++
      } else {
        this.setDefaultTime --
      }
      if (this.setDefaultTime == 2) {
      }
    }
  }
}
</script>

<style lang="css">
</style>
