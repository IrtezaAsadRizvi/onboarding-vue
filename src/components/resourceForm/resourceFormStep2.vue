<template lang="html">
  <!-- step 2 -->
  <div class="steps col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0" id="step2">

    <!-- Service Area -->
    <div class="form-group">
      <label for="name" class="label">Service Area</label>
      <div class="select">
          <select @change="selectServiceArea">
              <option selected disabled>Select service area</option>
              <option v-for="area in serviceAreas" value="">{{area}}</option>
          </select>
          <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
      </div>
      <ul class="selected-areas">
        <li v-for="area in selectedAreas"><div class="list-bullet"></div>{{area}}</li>
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
    <!--  -->
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
          <input type="radio" name="role" value="admin">
          <span class="checkmark"></span>
        </label><br>
        <label class="radio">Finance
          <input type="radio" name="role" value="finance">
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
  <!-- end of step 2 -->
</template>

<script>
export default {
  data: function () {
    return {
      // service areas
      serviceAreas: ['mirpur', 'gulshan', 'banani', 'uttara', 'dhanmondi', 'khilgaon'],
      selectedAreas: [],
      // expertises
      expertises: [],
      catagorizedExpertise: [],
      expertiseNone: false
    }
  },
  methods: {
    // select any 3 service areas
    selectServiceArea: function (e) {
      if(this.selectedAreas.length < 3){
        if (!this.selectedAreas.includes(this.serviceAreas[e.target.selectedIndex -1])) {
          this.selectedAreas.push(this.serviceAreas[e.target.selectedIndex -1])
        }else {
          console.log("you already selected this area")
        }
      }else {
        console.log("can't select anymore")
      }
    },
    // expertise based on selected category
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
  }
}
</script>

<style lang="css">
</style>
