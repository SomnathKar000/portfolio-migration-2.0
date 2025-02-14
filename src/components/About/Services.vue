<template>
  <section v-if="profileData.services.show" class="service">
    <h3 class="h3 service-title">What i'm doing</h3>

    <ul class="service-list">
      <template v-for="(service, i) in profileData.services.data" :key="i">
        <li class="service-item">
          <div class="service-icon-box">
            <img :src="service.image" alt="design icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">{{ service.title }}</h4>

            <p class="service-item-text">
              {{ service.details }}
            </p>
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>
<script setup>
import profileData from "../../data/profileData";
</script>
