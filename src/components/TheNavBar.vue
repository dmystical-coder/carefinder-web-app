<script setup>
import {ref} from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(
    faBars,
    faTimes
)

const data = ref({
    isClicked: false,
})

const toggleMobileNav = () => {
data.value.isClicked = !data.value.isClicked
}
</script>
<template>
    <nav>
        <div class="logo">
            <img src="@/assets/logo.svg" alt="" />
        </div>
        <span :class="{hidden: data.isClicked}" class="hamburger" @click="toggleMobileNav">
            <FontAwesomeIcon :icon="faBars" size="2x" />
        </span>
        <span :class="{ hidden: !data.isClicked }" class="close" @click="toggleMobileNav">
            <FontAwesomeIcon :icon="faTimes" size="2x" />
        </span>
        <ul :class="{ hidden: !data.isClicked }" class="nav-links">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/signin" class="btn">Login</router-link></li>
            <li><router-link to="/signup" class="btn">Signup</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: relative;
    font-family: 'Raleway', sans-serif;
    padding: 2.75rem 1.5rem 1rem;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav h1 {
    text-transform: uppercase;
    color: #ff832a;
}

nav h1 .dark {
    color: #2aa8ff;
}

nav ul li a:hover{
    background-color: #2aa6ff;
    color: #ffffff;
    padding: .5rem 1rem;
    border-radius: 2rem;
}

.btn {
    padding: .5rem 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    border-radius: 2rem;
    border: 1px solid #2aa8ff;
}

.nav-links{
    padding: 2rem;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 80px;
    left: 0;
}
.nav-links li{
    text-align: center;
    margin-top: 2rem;
}
.nav-links li a {
    font-size: 1.5rem;
    color: #2aa6ff;
}

@media screen and (min-width: 1024px) {

    .hamburger,
    .close {
        display: none;
    }

    nav {
        padding: 2rem 3rem;
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
}
</style>