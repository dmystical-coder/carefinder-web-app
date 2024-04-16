<script setup lang="ts">

import TheFooter from '@/components/TheFooter.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(
  faBars,
  faUser
)
</script>
<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="" />
      </router-link>
    </div>

    <FontAwesomeIcon :icon="faUser" size="2x" />
  </nav>

  <TheFooter />
</template>

<style scoped>
nav{
      font-family: 'Raleway', sans-serif;
        padding: 1rem 2rem;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
}
</style>
