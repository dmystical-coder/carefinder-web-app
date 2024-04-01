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

<style scoped>
.sign-up-form {
  width: 350px;

  background: white;
  padding: 20px;
  margin: 3% auto 0;
  text-align: center;
}

.sign-up-form h1 {
  color: #1c8adb;
  margin-bottom: 30px;
  text-align: center;
}

.input-box {
  border-radius: 20px;
  padding: 10px;
  margin: 10px 0;
  width: 85%;
  border: 1px solid #999;
  outline: none;
}

button {
  color: #fff;
  width: 50%;
  padding: 10px;
  border-radius: 20px;
  font-size: 15px;
  margin: 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
}

.signup-btn {
  background-color: #1c8adb;
}

.twitter-btn {
  background-color: #21afde;
}

a {
  text-decoration: none;
}

hr {
  margin-top: 20px;
  width: 80%;
}

.or {
  background: #fff;
  width: 30px;
  margin: -19px auto 10px;
  font-family: 'Montserrat', sans-serif;
}

.user {
  width: 25%;
  margin-top: -50px;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: white;
  }

  .sign-up-form {
    width: 85%;
  }

  header {
    background-color: white;
  }

  nav {
    display: none;
  }

  .logo {
    margin: -6% 0 0 18%;
    color: deepskyblue;
  }

  span {
    color: lightskyblue;
  }
}
</style>