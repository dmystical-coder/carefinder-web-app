<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import { auth } from '@/firebase/firebase'
import router from '@/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const data = ref({
  email: '',
  password: ''
})

const signin = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => { })
    .catch((err) => {
      console.log(err)
    })

  console.log('User Signed in.')
}

const submit = () => {
  let email = data.value.email
  let password = data.value.password

  signin(email, password)
  router.push('/dashboard')
}
</script>
<template>
  <TheNavBar />
  <div class="sign-up-form">
    <!-- <img class="user" src="user-removebg-preview.png" /> -->
    <main>
      <h1>Sign In</h1>
      <form @submit.prevent="submit">
        <input type="email" class="input-box" placeholder="Enter your Email" v-model="data.email" />
        <input type="password" class="input-box" placeholder="Enter your Password" v-model="data.password" />

        <button type="submit" class="signup-btn">Sign In</button>
        <!-- <hr />
      <p class="or">OR</p>
      <a href="https://www.twitter.com"
        ><button type="button" class="twitter-btn">Login with Twitter</button></a
      > -->
        <p>No account? <router-link to="/signup">Sign Up</router-link></p>
      </form>
    </main>
  </div>
  <TheFooter />
</template>


<style scoped>
.sign-up-form {
  max-width: 400px;
  width: 100%;
  background: white;
  padding: 20px;
  margin: 0 auto;
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

  .logo {
    margin: -6% 0 0 18%;
    color: deepskyblue;
  }

  span {
    color: lightskyblue;
  }
}
</style>