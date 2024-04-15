<script>
import axios from 'axios'
import { db } from '@/firebase/firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
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
  faMapLocationDot
} from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, query, where } from 'firebase/firestore'

// create a reference to the hospitals collection
const hospitalsRef = collection(db, 'hospitals')
library.add(
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
  faMapLocationDot
)
export default {
  name: 'HospitalSearch',
  components: { FontAwesomeIcon },
  data: () => ({
    lat: '',
    lon: '',
    locationQuery: '',
    allHospitals: [],
    searchedHospitals: []
  }),
  created() {},
  computed: {
    validLocationQuery() {
      return this.locationQuery.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    coordinates() {
      return `${this.lat}, ${this.lon}`
    }
  },
  methods: {
    async handleSearch() {
      this.searchedHospitals = []
      this.allHospitals = []
      try {
        // Create a query against the collection.
        const q = query(hospitalsRef, where('city', '==', this.validLocationQuery))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.searchedHospitals.push({ ...doc.data(), id: doc.id })
        })
      } catch (error) {
        console.error('Error searching hospitals:', error)
      }
    },
    // async fetchData() {
    //   try {
    //     const querySnapshot = await getDocs(hospitalsRef)
    //     querySnapshot.forEach((doc) => {
    //       this.allHospitals.push({ ...doc.data(), id: doc.id })
    //       console.log(this.allHospitals)
    //     })
    //   } catch (error) {
    //     console.error('Error searching hospitals:', error)
    //   }
    // },
    async getLocationCoordinates() {
      try {
        const response =
          await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.locationQuery}&key=AIzaSyDvtWNeV6bFqQ51ZRl8WDbRi_73OhHs1VU
`)
        if (!response.ok) {
          throw new Error('Could not fetch resource')
        }

        const data = await response.json()
        const location = data.results[0].geometry.location
        console.log(location)
        this.lat = location.lat
        this.lon = location.lng
        const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.coordinates}&radius=1500&type=hospital&key=AIzaSyDvtWNeV6bFqQ51ZRl8WDbRi_73OhHs1VU`
        axios
          .get(URL)
          .then((response) => {
            this.searchedHospitals = response.data.results
            console.log(this.searchedHospitals)
          })
          .catch((error) => {
            console.log(error.message)
          })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <header>
      <form @submit.prevent class="search-box">
        <div class="search-input">
          <font-awesome-icon icon="fa-solid fa-search" />

          <input
            type="text"
            placeholder="Enter your Location, e.g. city name..."
            v-model.lazy.trim="locationQuery"
            @keyup.enter="handleSearch"
          />
        </div>

        <button class="search-btn" @click="getLocationCoordinates">
          <span>Search</span>
          <img src="@/assets/search-icon.svg" alt="" />
        </button>

        <!-- <div class="filters">
            <div>
              <span>Filter by Cities:</span>
              <label class="checkbox-label">
                <input type="checkbox" value="user" />
                Lagos
              </label>
              <label class="checkbox-label">
                <input type="checkbox" value="repository" />
                Ogun
              </label>
              <label class="checkbox-label">
                <input type="checkbox" value="repository" />
                Oyo
              </label>
              <label class="checkbox-label">
                <input type="checkbox" value="repository" />
                Niger
              </label>
            </div>
            <div>
              <span>Filter by Providers:</span>
              <label class="checkbox-label">
                <input type="checkbox" value="user" />
                Clinic
              </label>
              <label class="checkbox-label">
                <input type="checkbox" value="repository" />
                Hospital
              </label>
              <label class="checkbox-label">
                <input type="checkbox" value="repository" />
                Gym
              </label>
              <label class="checkbox-label">
                <input type="checkbox" value="repository" />
                Spa
              </label>
            </div>
            
            <button>
              <i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Apply Filters
            </button>
          </div> -->
      </form>
    </header>
    <main>
      <div
        v-if="allHospitals.length || searchedHospitals.length"
        class="search-box search-result-text-box"
      >
        <span v-if="allHospitals.length">Showing {{ allHospitals.length }} results</span>
        <span v-else-if="searchedHospitals.length"
          >Showing {{ searchedHospitals.length }} results for {{ validLocationQuery }}</span
        >

        <div>
          <font-awesome-icon icon="fa-solid fa-file-export" size="2x" style="cursor: pointer" />

          <font-awesome-icon icon="fa-solid fa-share-alt" size="2x" style="cursor: pointer" />
        </div>
      </div>

      <div class="grid-container" v-if="allHospitals.length">
        <div class="detail-card" v-for="hospital in allHospitals" :key="hospital.id">
          <img :src="hospital.img_url" alt="" />
          <div class="content">
            <div class="name">
              <font-awesome-icon icon="fa-solid fa-hospital" />
              &nbsp;
              <h3>{{ hospital.name }}</h3>
            </div>
            <div class="type">
              <img src="@/assets/hospital.svg" alt="" />
              &nbsp;
              <span>Hospital</span>
            </div>
            <div class="address">
              <font-awesome-icon icon="fa-solid fa-map-location-dot" />
              &nbsp;
              <span>{{ hospital.address }}</span>
            </div>
            <div class="phone">
              <font-awesome-icon icon="fa-solid fa-phone" />
              &nbsp;
              <span>{{ hospital.phone_number }}</span>
            </div>
            <div class="email">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              &nbsp;
              <span>{{ hospital.email }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-container" v-else-if="searchedHospitals.length">
        <div class="detail-card" v-for="hospital in searchedHospitals" :key="hospital.id">
          <img :src="hospital.img_url" alt="" />
          <div class="content">
            <div class="name">
              <font-awesome-icon icon="fa-solid fa-hospital" />
              &nbsp;
              <h3>{{ hospital.name }}</h3>
            </div>
            <div class="type">
              <img src="@/assets/hospital.svg" alt="" />
              &nbsp;
              <span>{{ hospital.types[0] }}</span>
            </div>
            <div class="address">
              <font-awesome-icon icon="fa-solid fa-map-location-dot" /> &nbsp;
              <span>{{ hospital.vicinity }}</span>
            </div>
            <div class="phone">
              <font-awesome-icon icon="fa-solid fa-phone" />
              &nbsp;
              <span>{{ hospital.formatted_phone_number || 'N/A' }}</span>
            </div>
            <div class="email">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              &nbsp;
              <span>{{ hospital.email || 'N/A' }}</span>
            </div>
          </div>
        </div>
      </div>
      <p v-else>No hospitals found.</p>
    </main>
  </div>
</template>

<style scoped>
/* Include Font Awesome CSS */

/* Add your styles here */
.search-box {
  display: flex;
  padding: 1.6875rem 1.5rem;
  flex-direction: column;
  gap: 1.8125rem;
  border-radius: 0.9375rem;
  background: #fff;

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

.search-result-text-box > div {
  display: flex;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  .search-result-text-box {
    margin: 1.5rem 2rem;
  }
}
</style>
