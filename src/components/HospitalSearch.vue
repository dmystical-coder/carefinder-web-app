<script>
import DetailCard from '@/components/DetailCard.vue'
import axios from 'axios'
import { db } from '@/firebase/firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSync,
  faPhone,
  faEnvelope,
  faCopyright,
  faSearch,
  faTimes,
  faShareAlt,
  faMedkit,
  faBars,
  faHospital,
  faFilter,
  faFileExport,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { doc, setDoc } from 'firebase/firestore'

library.add(
  faSync,
  faPhone,
  faEnvelope,
  faCopyright,
  faSearch,
  faTimes,
  faShareAlt,
  faMedkit,
  faBars,
  faHospital,
  faFilter,
  faFileExport,
  faMapLocationDot,

)
export default {
  name: 'HospitalSearch',
  components: { FontAwesomeIcon, DetailCard },
  data: () => ({
    isLoading: false,
    foundHospitals: false,
    locationQuery: '',
    locationDisplay: '',
    photoReference: '',
    photoUrl: '',
    allHospitals: [],
    searchedHospitals: []
  }),
  computed: {
    validLocationQuery() {
      return this.locationDisplay.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },

  },
  methods: {
    async writeHospitalsToFirestore() {
      try {
        for (let index = 0; index < this.searchedHospitals.length; index++) {
          const hospital = this.searchedHospitals[index];
          const customId = `${this.locationDisplay}-hospital_${index}`
          // Construct a reference to a document with a custom ID
          const docRef = doc(db, 'hospitals', customId);
          // Set data for the document
          await setDoc(docRef, hospital)
        }
        console.log('Hospitals written to Firestore successfully');
      } catch (error) {
        console.error('Error writing hospitals to Firestore:', error);
      }

    },
    async handleSearch() {
      this.foundHospitals = false
      this.isLoading = true
      try {
        await axios
          .get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
            params: {
              query: `hospitals in ${this.locationQuery}`,
              key: 'AIzaSyDvtWNeV6bFqQ51ZRl8WDbRi_73OhHs1VU'
            }
          })
          .then((response) => {
            this.searchedHospitals = response.data.results
            this.isLoading = false
            // this.photoReference = this.searchedHospitals.photos[0].photo_reference
            console.log(this.searchedHospitals)
          })

          .catch((error) => {
            console.log(error.message)
          })
      } catch (error) {
        this.isLoading = false
        this.foundHospitals = true
        console.error(error)
      }
      this.locationDisplay = this.locationQuery
      this.locationQuery = ''
    },
  }
}
</script>

<template>

  <header>
    <form @submit.prevent class="search-box" style="  max-width: 600px;
  width: 100%;">
      <div class="search-input">
        <font-awesome-icon icon="fa-solid fa-search" />

        <input type="text" placeholder="Enter your Location, e.g. city name..." v-model.trim="locationQuery"
          @keyup.enter="locationQuery.length > 0 ? handleSearch : console.log('error')" />
      </div>

      <button class="search-btn" @click="handleSearch" :disabled="locationQuery.length === 0">
        <span>Search</span>
        <img src="@/assets/search-icon.svg" alt="" />
      </button>
    </form>
  </header>
  <main>
    <div v-if="allHospitals.length || searchedHospitals.length" class="search-box search-result-text-box">
      <span v-if="allHospitals.length">Showing {{ allHospitals.length }} results</span>
      <span v-else-if="searchedHospitals.length">Showing {{ searchedHospitals.length }} results for {{
        validLocationQuery }}</span>

      <div>
        <font-awesome-icon icon="fa-solid fa-file-export" size="2x" style="cursor: pointer"
          @click="writeHospitalsToFirestore" />

        <font-awesome-icon icon="fa-solid fa-share-alt" size="2x" style="cursor: pointer" />
      </div>
    </div>

    <div class="grid-container" v-if="allHospitals.length">
      <DetailCard v-for="hospital in allHospitals" :key="hospital.id" :type="hospital.types[0]" :name="hospital.name"
        :address="hospital.vicinity" :image="hospital.img_url" :phone="hospital.formatted_phone_number"
        :email="hospital.email" />
    </div>
    <div class="grid-container" v-else-if="searchedHospitals.length">
      <DetailCard v-for="hospital in searchedHospitals" :key="hospital.id" :type="hospital.types[0]"
        :name="hospital.name" :address="hospital.formatted_address" :image="photoUrl"
        :phone="hospital.formatted_phone_number" :email="hospital.email" />
    </div>
    <div v-else style="text-align: center;">
      <p v-show="isLoading">Loading <font-awesome-icon icon="fa-solid fa-sync" spin size="lg" /></p>
      <p v-show="foundHospitals">No hospitals found.</p>
    </div>
  </main>


</template>

<style scoped>
/* Include Font Awesome CSS */
button:disabled {
  cursor: not-allowed;
  opacity: 50%;
}

/* Add your styles here */
.search-box {
  display: flex;
  padding: 1.6875rem 1.5rem;
  flex-direction: column;
  gap: 1.8125rem;
  border-radius: 0.9375rem;
  background: #fff;
  margin: 0 auto;
  /* shadow 1 */
  box-shadow: 6px 6px 35px 0px rgba(16, 40, 81, 0.11);
}

.search-input {
  color: #5c6169;
  padding: 0.81rem 0 0.81rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid #2aa8ff;
  background: #fafbfe;
}

.search-input input {
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.25rem;
  width: 100%;
}

input::placeholder {
  color: #abb6c7;
}

.search-btn {
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.02rem;
  display: flex;
  padding: 0.75rem 3.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background: #2aa8ff;
  outline: none;
  border: none;
}

.search-result-text-box {
  border-radius: 0.5rem;
  color: #fafbfe;
  background: linear-gradient(92deg, #2aa7ff 1.4%, #0c8ce5 100.57%);
  margin-block: 1.5rem;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.search-result-text-box span {
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.search-result-text-box>div {
  display: flex;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  .search-result-text-box {
    margin: 1.5rem 2rem;
  }
}
</style>
