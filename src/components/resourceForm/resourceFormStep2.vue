<template lang="html">
  <!-- step 2 -->
  <div class="steps col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-0" id="step2">

    <!-- Service Area -->
    <div class="form-group">
      <label for="name" class="label">Service Area</label>
      <div class="select">
          <select @change="selectServiceArea" :class="areaError? 'error-field': ''">
              <option selected disabled>Select service area</option>
              <option v-for="area in serviceAreas" value="">{{area.name}}</option>
          </select>
          <div class="down-arrow"><img src="../../assets/images/arrow-down.svg" alt="&#709;"></div>
      </div>
      <span v-show="areaError" class="error-text">{{ areaError }}</span>
      <ul class="selected-areas">
        <li v-for="area in selectedAreas"><div class="list-bullet" @click="removeFromArray(selectedAreas,area)"></div>{{area.name}} <div class="cross-sign float-right" style="margin: 4px;" @click="removeFromArray(selectedAreas,area)"></div></li>
      </ul>
    </div>
    <!-- Expertise -->
    <div class="form-group">
      <label for="name" class="label">Expertise</label>
      <label for="name" class="label sub-label">Select your expertise</label>
      <div class="expertise-container d-flex justify-content-between">
        <!-- <div v-for="expertiseCata in expertiseCatas" class="expertise" @click="expertiseMenu($event, expertiseCata.name)">
            <img :src="expertiseCata.icon" :alt="expertiseCata.name">
            <p>{{expertiseCata.name}}</p>
        </div> -->
        <div class="row">
          <div class="col-md-3 col-sm-3 col-3" v-for="expertiseCata in expertiseCatas">
            <div class="expertise" @click="expertiseMenu($event, expertiseCata)">
                <img :src="expertiseCata.icon" :alt="expertiseCata.name">
                <p>{{expertiseCata.name}}</p>
            </div>
          </div>
          <div class="expertise none col-md-3 col-sm-3 col-3" @click="expertiseNone = true">
              <p>None</p>
          </div>
        </div>

      </div>
    </div>
    <!-- @click="addExpertise(expertise)" -->
    <div class="form-group">
      <div v-if="!expertiseNone" v-for="expertise in catagorizedExpertise">
        <label class="checkboxcontainer" >{{expertise.name}}
            <input type="checkbox" :value="expertise.id" v-model="selectedExpertise" id="expertise-checkbox">
          <span class="checkboxcheckmark"></span>
        </label>
      </div>
      <div v-if="expertiseNone">
        <p>What is your role in your company?</p>
        <label class="radio">Admin
          <input type="radio" name="role" value="admin" v-model="resourceType">
          <span class="checkmark"></span>
        </label><br>
        <label class="radio">Finance
          <input type="radio" name="role" value="finance" v-model="resourceType">
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
    <span v-show="expertiseError" class="error-text">{{ expertiseError }}</span>
  </div>
  <!-- end of step 2 -->
</template>

<script>
import {global} from '../../main.js'
import axios from 'axios'


export default {
  data: function () {
    return  {
      // api
      apiLocations: '',
      apiCategories: '',
      // service areas
      serviceAreas: [],
      selectedAreas: [],

      resourceType: '',

      // expertises
      expertiseCatas: [],
      selectedExpertise: [],
      catagorizedExpertise: [],
      expertiseNone: false,

      // errors
      areaError: null,
      expertiseError: null
    }
  },
  methods: {
    // select any 3 service areas
    selectServiceArea: function (e) {
      if(this.selectedAreas.length < 3){
        if (!this.selectedAreas.includes(this.serviceAreas[e.target.selectedIndex -1])) {
          this.selectedAreas.push(this.serviceAreas[e.target.selectedIndex -1])
        }else {
          this.areaError = "you already selected this area"
        }
      }else {
        this.areaError = "can't select anymore"
      }
    },
    // expertise based on selected category
    expertiseMenu: function (e, cata) {
      this.selectedExpertise = []
      this.expertiseNone = false
      this.catagorizedExpertise = cata.children
      console.log(cata);
      // if (expertiseCata == 'repair') {
      //   this.catagorizedExpertise = ['ac repair', 'lock repair', 'laptop repair', 'mobile repair']
      // }
      // else if (expertiseCata == 'beauty') {
      //   this.catagorizedExpertise = ['hair style', 'facial', 'beauty 1', 'beauty 2']
      // }
      // else if (expertiseCata == 'cleaning') {
      //   this.catagorizedExpertise = ['house cleaning', 'car cleaning', 'cleaning 1', 'cleaning 2', 'cleaning']
      // }
      // else if (expertiseCata == 'food') {
      //   this.catagorizedExpertise = ['cooking', 'food delivery', 'diet planner']
      // }
    },
    // addExpertise: function (expertise) {
    //   this.selectedExpertise.push(expertise)
    // },
    removeFromArray: function (arr, what) {
        var found = arr.indexOf(what);

        while (found !== -1) {
            arr.splice(found, 1);
            found = arr.indexOf(what);
        }
    }
  },
  watch: {
    selectedAreas: function () {
      if (this.selectedAreas.length > 0) {
        if (this.selectedAreas.length < 3) {
          this.areaError = 'You have to select at least 3 areas'
        }else {
          this.areaError = null

        }
      }else {
        this.areaError = 'You have to select Service areas'
      }
    },
    selectedExpertise: function () {
      if(this.selectedExpertise.length > 0){
        this.expertiseError = null
      }else {
        this.expertiseError = "You have to select your Expertise"
      }
    }
  },
  created: function () {
    // define
    this.apiLocations = global.apiBaseUrl + '/v1/locations'
    this.apiCategories = global.apiBaseUrl + '/sheba?query={ categories(isMaster:true){ id,name,icon,children{ id,name } } }'
    // getting data
    axios.get(this.apiLocations).then((res)=>{
      this.serviceAreas = res.data.locations;
    }).catch(function (error) {
      console.log(error);
    });
    axios.get(this.apiCategories).then((res)=>{
      this.expertiseCatas = res.data.data.categories;
      console.log(this.expertiseCatas);
    }).catch(function (error) {
      console.log(error);
    });
    if (global.resourceFormData.resourceServiceAreas && global.resourceFormData.resourceExpertise) {
      this.selectedAreas = global.resourceFormData.resourceServiceAreas
      this.selectedExpertise = global.resourceFormData.resourceExpertise
      this.expertiseNone = global.temp.expertiseNone
      this.catagorizedExpertise = global.temp.catagorizedExpertise
    }
    global.$on('resSubmitRequest', (data)=>{
      if (data.step == 1) {
        if (this.expertiseNone == false) {
          if (this.selectedAreas.length == 3 && this.selectedExpertise.length > 0) {
            global.resourceFormData.resourceServiceAreas = this.selectedAreas
            global.resourceFormData.resourceExpertise = this.selectedExpertise
            global.resourceFormData.resourceType = "handyman"
            global.temp.expertiseNone = this.expertiseNone
            global.temp.catagorizedExpertise = this.catagorizedExpertise
            global.$emit('resStepSubmitted', {
              step: data.step
            })
          }else {
            if (this.selectedAreas.length == 0) this.areaError = 'You have to select Service areas'
            if (this.selectedExpertise.length == 0) this.expertiseError = 'You have to select your Expertise'
          }
        }else {
          if (this.selectedAreas.length == 3 && this.resourceType) {
            global.resourceFormData.resourceServiceAreas = this.selectedAreas
            global.resourceFormData.resourceExpertise = null
            global.resourceFormData.resourceType = this.resourceType
            global.temp.expertiseNone = this.expertiseNone
            global.temp.catagorizedExpertise = this.catagorizedExpertise
            global.$emit('resStepSubmitted', {
              step: data.step
            })
          }else {
            if (this.selectedAreas.length == 0) this.areaError = 'You have to select Service areas'
            if (this.resourceType == '') this.expertiseError = 'You have to select your Type'
          }
        }

      }
    })
  },
  mounted: function () {
    $(".expertise").on('click', function () {
      $('.expertise').removeClass('active')
      $(this).addClass('active')
    })
  }
}
</script>

<style lang="css">
</style>
