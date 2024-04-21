<script setup lang="ts">
<<<<<<< HEAD
=======
import TheNavBar from '@/components/TheNavBar.vue'
import DetailCard from '@/components/DetailCard.vue'
import HospitalSearch from '@/components/HospitalSearch.vue'
import TheFooter from '@/components/TheFooter.vue'
>>>>>>> 89657ca5ba19098fc9280afed1ab2b8da8057657
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
  faFileText,
  faMapLocationDot
} from '@fortawesome/free-solid-svg-icons'

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
  faFileText,
  faMapLocationDot
)

const data = {
  hospitals: [
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipMui4lkCP9J2wHxPdwIN9dTOf_LCrlG7Zg52Wnb=w408-h544-k-no",
      name: "Marigold Hospital",
      type: "Hospital",
      address: "12/14, Adeniyi Adefioye Street, Ikate, Lagos",
      phone: "08033925500",
      email: "N/A"
    },
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipOWSZ0l_Xety_7BDoj0BiYjh8dQ771UeVr2FxXy=w408-h306-k-no",
      name: "Havana Specialist Hospital Limited",
      type: "Hospital",
      address: "115 Akerele Extension, 115 Akerele Road, Surulere, Lagos",
      phone: "08027272727",
      email: "info@havanaspecialisthospital.com"
    },
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipMfy1m5p2XEkjHpfwy24ytmgNWJvo-c5TzxkzQL=w426-h240-k-no",
      name: "Lagos State University Primary Health Care Centre",
      type: "Clinic",
      address: "Lagos State University, Ojo, Lagos",
      phone: "N/A",
      email: "N/A"
    },
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipMi3MPgoS5PUNBYSvQLTxkv91C91uPXuzaTAEz9=w408-h544-k-no",
      name: "Reddington Hospital",
      type: "General Hospital",
      address: "12 Idowu Martins St, Victoria Island, Lagos",
      phone: "08128008187",
      email: "info@reddingtonhospital.com"
    },
  ],
  features: [
    {
      iconic: ['fas', 'fa-search'],
      title: "Search",
      desc: "Carefinder allows users to search for hospitals within their region, and view the list of hospitals and their respective contact details."
    },
    {
      iconic: ['fas', 'fa-filter'],
      title: "Filter",
      desc: "Carefinder lists hospitals based on the user's location or based on the user's selection from a list of nearby cities within the area."
    },
    {
      iconic: ['fas', 'fa-file-text'],
      title: "Export",
      desc: "Carefinder allows users to export the list of hospitals to a CSV file, making it easy to save and share the information."
    },
    {
      iconic: ['fas', 'fa-share-alt'],
      title: "Share",
      desc: "Carefinder also allows users to share the list of hospitals with others. Users can share the information via email or by generating a shareable link."
    }
  ]
}
</script>
<template>
  <div class="container">
    <TheNavBar />
    <header>
      <div class="hero">
        <div class="hero-content">
          <h1>Find, Export, and Share Hospitals within your Region.</h1>
        </div>
      </div>
    </header>
    <HospitalSearch />
    <main>
      <h2>Features</h2>
      <div class="grid-container">
        <div class="detail-card" v-for="(feature, index) in data.features" :key="`feat-${index}`">
          <div class="name">
            <FontAwesomeIcon :icon="feature.iconic" size="2x" />
            &nbsp;
            <h3>{{ feature.title }}</h3>
          </div>
          <hr />
          <div class="type">
            <p>
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
      <h2>Featured Hospitals</h2>
      <div class="grid-container">
        <DetailCard v-for="(hospital, index) in data.hospitals" :key="index" :type="hospital.type" :name="hospital.name"
          :address="hospital.address" :image="hospital.img" :phone="hospital.phone" :email="hospital.email" />
      </div>
      <div class="admin-card">
        <div>
          <h3>Become an Admin</h3>
          <p>
            Join the elite league of admins adding entries to our database, and enlarging our
            provider network.
          </p>
        </div>
        <router-link to="/signup" class="admin-cta-btn">Join Today</router-link>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.cta-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 5.625rem;
  border: 1px solid #2aa7ff;
  color: #2aa7ff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
}

.admin-card {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 2rem;
  background: #2aa8ff;
  text-align: center;
  margin-block: 6rem;
  padding: 7rem 2rem;
}

.admin-card>div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.admin-card>div>h3 {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 2.25rem;
}

.admin-card>div>p {
  color: #fafbfe;
  font-size: 1rem;
  line-height: 1.5rem;
}

.admin-cta-btn {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  border-radius: 5.625rem;
  border: 1px solid #ffffff;
  align-self: center;
  padding: 0.75rem 2rem;
}
</style>
