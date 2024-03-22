<template>
  <div class="hospital-search">
    <input
      type="text"
      v-model="locationQuery"
      @input="handleSearch"
      placeholder="Enter your location..."
    />
    <select v-model="selectedCity" @change="handleSearch">
      <option value="">Select a nearby city</option>
      <option v-for="city in nearbyCities" :key="city">{{ city }}</option>
    </select>
    <ul v-if="searchResults.length">
      <li v-for="hospital in searchResults" :key="hospital.id">
        <h3>{{ hospital.name }}</h3>
        <p>Address: {{ hospital.address }}</p>
        <p>Phone: {{ hospital.phone }}</p>
        <p>Email: {{ hospital.email }}</p>
      </li>
    </ul>
    <p v-else>No hospitals found.</p>
  </div>
</template>

<script>
import { db } from '@/firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default {
  name: 'HospitalSearch',
  data() {
    return {
      locationQuery: '',
      selectedCity: '',
      searchResults: [],
      nearbyCities: ['Gbagada', 'Victoria Island', 'Ikeja'] // Replace with actual nearby cities
    }
  },
  methods: {
    async handleSearch() {
      const query = this.locationQuery.trim()
      const city = this.selectedCity.trim()

      if (!query && !city) {
        this.searchResults = []
        return
      }

      // let hospitalsRef = db.collection('hospitals')

      // if (query) {
      //   hospitalsRef = hospitalsRef.where('location', '==', query)
      // } else if (city) {
      //   hospitalsRef = hospitalsRef.where('city', '==', city)
      // }

      try {
        const querySnapshot = await getDocs(collection(db, 'hospitals'))
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`)
        })
      } catch (error) {
        console.error('Error searching hospitals:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
