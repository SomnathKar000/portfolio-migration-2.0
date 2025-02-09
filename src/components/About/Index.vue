<template>
  <article class="about" v-if="isAboutOpen" :class="{ active: isAboutOpen }">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text" v-html="profileData.aboutMe"></section>

    <Services />
    <Testimonials />
    <Clients />
  </article>
</template>
<script setup>
import Clients from "./Clients.vue";
import Testimonials from "./Testimonials.vue";
import Services from "./Services.vue";
import profileData from "../data/profileData.js";

defineProps({
  isAboutOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
