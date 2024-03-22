<template>
  <div class="sign-up-form">
    <!-- <img class="user" src="user-removebg-preview.png" /> -->

    <h1>Sign Up Now</h1>
    <form @submit.prevent="submit">
      <input type="email" class="input-box" placeholder="Enter your Email" v-model="data.email" />
      <input
        type="password"
        class="input-box"
        placeholder="Enter your Password"
        v-model="data.password"
      />
      <button type="submit" class="signup-btn">Sign Up</button>

      <!-- <p class="or">OR</p>
      <a href="https://www.twitter.com"
        ><button type="button" class="twitter-btn">Login with Twitter</button></a
      > -->
      <p>Do you have an account? <router-link to="/signin">Sign In</router-link></p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { auth } from '@/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const data = ref({
  email: '',
  password: ''
})

const signup = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {})
    .catch((err) => {
      console.log(err)
    })

  console.log('User created.')
}

const submit = () => {
  let email = data.value.email
  let password = data.value.password

  signup(email, password)
}
</script>
