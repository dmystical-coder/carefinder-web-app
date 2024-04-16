<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faPhone,
    faEnvelope,
    faHospital,
    faMapLocationDot
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faPhone,
    faEnvelope,
    faHospital,
    faMapLocationDot
)
defineProps<{
    type?: string
    image?: string
    name?: string
    email?: string
    address?: string
    phone?: string
}>()
</script>

<template>
    <div class="detail-card">
        <img :src="image" alt="" />
        <div class="content">
            <div class="name">
                <FontAwesomeIcon :icon="faHospital" />&nbsp;
                <h3>{{ name }}</h3>
            </div>
            <div class="type">
                <img src="@/assets/hospital.svg" alt="" />
                &nbsp;
                <span>{{type}}</span>
            </div>
            <div class="address">
                <FontAwesomeIcon :icon="faMapLocationDot" />
                &nbsp;
                <span>{{ address }}</span>
            </div>
            <div class="phone">
                <FontAwesomeIcon :icon="faPhone" /> &nbsp;
                <span>{{ phone }}</span>
            </div>
            <div class="email">
                <FontAwesomeIcon :icon="faEnvelope" />&nbsp;
                <span>{{ email }}</span>
            </div>
        </div>
    </div>

</template>