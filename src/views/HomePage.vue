<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
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
</script>
<template>
  <div class="container">
    <TheNavBar />
    <header>
      <div class="hero">
        <div class="hero-content">
          <h1>Find, Export, and Share Hospitals within your Region.</h1>
        </div>

        <router-link to="/dashboard">Find Hospitals</router-link>
      </div>
    </header>
    <main>
      <h2>Features</h2>
      <div class="grid-container">
        <div class="detail-card">
          <div class="name">
            <FontAwesomeIcon :icon="faSearch" size="2x" />
            &nbsp;
            <h3>Search</h3>
          </div>
          <hr />
          <div class="type">
            <p>
              Carefinder allows users to search for hospitals within their region, and view the list
              of hospitals and their respective contact details.
            </p>
          </div>
        </div>
        <div class="detail-card">
          <div class="name">
            <FontAwesomeIcon :icon="faFilter" size="2x" />
            &nbsp;
            <h3>Filter</h3>
          </div>
          <hr />
          <div class="type">
            <p>
              Carefinder lists hospitals based on the user's location or based on the user's
              selection from a list of nearby cities within the area.
            </p>
          </div>
        </div>

        <div class="detail-card">
          <div class="name">
            <FontAwesomeIcon :icon="faFileText" size="2x" />
            &nbsp;
            <h3>Export</h3>
          </div>
          <hr />
          <div class="type">
            <p>
              Carefinder allows users to export the list of hospitals to a CSV file, making it easy
              to save and share the information.
            </p>
          </div>
        </div>
        <div class="detail-card">
          <div class="name">
            <FontAwesomeIcon :icon="faShareAlt" size="2x" />
            &nbsp;
            <h3>Share</h3>
          </div>
          <hr />
          <div class="type">
            <p>
              Carefinder also allows users to share the list of hospitals with others. Users can
              share the information via email or by generating a shareable link.
            </p>
          </div>
        </div>
      </div>
      <h2>Featured Hospitals</h2>
      <div class="grid-container">
        <div class="detail-card">
          <!-- <div class="image">
              <img
                src="https://lh5.googleusercontent.com/p/AF1QipOWSZ0l_Xety_7BDoj0BiYjh8dQ771UeVr2FxXy=w408-h306-k-no"
                alt=""
              />
            </div> -->
          <img src="https://lh5.googleusercontent.com/p/AF1QipOWSZ0l_Xety_7BDoj0BiYjh8dQ771UeVr2FxXy=w408-h306-k-no"
            alt="" />
          <div class="content">
            <div class="name">
              <FontAwesomeIcon :icon="faHospital" />&nbsp;
              <h3>Havana Specialist Hospital Limited</h3>
            </div>
            <div class="type">
              <img src="@/assets/hospital.svg" alt="" />
              &nbsp;
              <span>Hospital</span>
            </div>
            <div class="address">
              <FontAwesomeIcon :icon="faMapLocationDot" />
              &nbsp;
              <span>115 Akerele Extension, 115 Akerele Road, Surulere, Lagos 100001</span>
            </div>
            <div class="phone">
              <FontAwesomeIcon :icon="faPhone" /> &nbsp;
              <span>08027272727</span>
            </div>
            <div class="email">
              <FontAwesomeIcon :icon="faEnvelope" />&nbsp;
              <span>info@havanaspecialisthospital.com</span>
            </div>
          </div>
        </div>
        <div class="detail-card">
          <img src="https://lh5.googleusercontent.com/p/AF1QipMfy1m5p2XEkjHpfwy24ytmgNWJvo-c5TzxkzQL=w426-h240-k-no"
            alt="" />
          <div class="content">
            <div class="name">
              <FontAwesomeIcon :icon="faHospital" />&nbsp;
              <h3>Lagos State University Primary Health Care Centre</h3>
            </div>
            <div class="type">
              <FontAwesomeIcon :icon="faMedkit" />&nbsp;
              <span>Clinic</span>
            </div>
            <div class="address">
              <FontAwesomeIcon :icon="faMapLocationDot" />
              &nbsp;
              <span>Ojo, Lagos 102101, Lagos</span>
            </div>
            <div class="phone">
              <FontAwesomeIcon :icon="faPhone" /> &nbsp;
              <span>N/A</span>
            </div>
            <div class="email">
              <FontAwesomeIcon :icon="faEnvelope" />&nbsp;
              <span>N/A</span>
            </div>
          </div>
        </div>
        <div class="detail-card">
          <img src="https://lh5.googleusercontent.com/p/AF1QipMui4lkCP9J2wHxPdwIN9dTOf_LCrlG7Zg52Wnb=w408-h544-k-no"
            alt="" />
          <div class="content">
            <div class="name">
              <FontAwesomeIcon :icon="faHospital" />&nbsp;
              <h3>Marigold Hospital</h3>
            </div>
            <div class="type">
              <img src="@/assets/hospital.svg" alt="" />
              &nbsp;
              <span>Hospital</span>
            </div>
            <div class="address">
              <FontAwesomeIcon :icon="faMapLocationDot" />
              &nbsp;
              <span>12/14 Adeniyi Adefioye Street, Ikate, Lagos 101241, Lagos</span>
            </div>
            <div class="phone">
              <FontAwesomeIcon :icon="faPhone" /> &nbsp;
              <span>08033925500</span>
            </div>
            <div class="email">
              <FontAwesomeIcon :icon="faEnvelope" />&nbsp;
              <span>N/A</span>
            </div>
          </div>
        </div>
      </div>

      <!-- <a href="#" class="cta-btn">Find a Hospital in your Region</a> -->

      <div class="admin-card">
        <div>
          <h3>Become an Admin</h3>
          <p>
            Join the elite league of admins adding entries to our database, and enlarging our
            provider network.
          </p>
        </div>
        <a href="#" class="admin-cta-btn">Join Today</a>
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
