<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
library.add(
    faCopyright,
)
</script>
<template>
    <footer>
        <div class="footer-brand">
            <div class="footer-logo">
                <router-link to="/">
                    <img src="@/assets/logo.svg" alt="" />
                </router-link>
            </div>
            <div class="socials">
                <a href=""><img src="@/assets/facebook-icon.svg" alt="" /></a>
                <a href="
          #"><img src="@/assets/x-icon.svg" alt="" /></a>
            </div>
        </div>


        <div class="useful-links">
            <div class="nav">
                <h4>Navigation</h4>
                <ul>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </div>
            <div class="contribute">
                <h4>Community</h4>
                <ul>
                    <li><router-link to="/signin" class="btn">Login</router-link></li>
                    <li><router-link to="/signup" class="btn">Signup</router-link></li>
                    <li><router-link to="/contributors">Contributors</router-link></li>
                </ul>
            </div>
        </div>

        <div class="copy">
            <font-awesome-icon icon="fa-solid fa-copyright" size="lg" /> &nbsp;
            <span>2024</span>
            &nbsp;
            <a href="https://github.com/dmystical-coder">dmystical-coder</a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding: 5rem 1.5rem;
    background-color: #1b3c74;
    color: #ffffff;
}

footer a,
.copy span {
    font-size: 0.875rem;
    color: #e2e2e2;
    line-height: 1.75rem;
}

footer p {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.75rem;
}

.useful-links {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.socials {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.nav,
.contribute {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.copy {
    font-size: 0.75rem;
    line-height: 1.75rem;
    margin-top: 2.5rem;
}

@media screen and (min-width: 1024px) {
    footer {
        padding: 3rem 2rem;
        display: flex;
        justify-content: space-between;
    }

    .footer-logo {
        flex-basis: 20%;
    }

    .footer-logo img {
        width: 100%;
    }

    .group {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .useful-links {
        flex-direction: row;
        justify-content: center;
        gap: 4rem;
    }

    .useful-links,
    .copy {
        margin-top: 0;
    }

    .copy {
        align-self: flex-end;
    }
}
</style>