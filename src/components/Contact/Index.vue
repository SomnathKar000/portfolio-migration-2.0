<template>
  <article
    class="contact"
    v-if="isContactOpen"
    :class="{ active: isContactOpen }"
  >
    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe
          :src="profileData.personalInfo.googleMapLocation"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form action="#" class="form" data-form @submit.prevent="handleSubmit">
        <div class="input-wrapper">
          <input
            v-model="form.fullName"
            type="text"
            name="fullname"
            class="form-input"
            placeholder="Full name"
            required
            data-form-input
          />

          <input
            v-model="form.email"
            type="email"
            name="email"
            class="form-input"
            placeholder="Email address"
            required
            data-form-input
          />
        </div>

        <textarea
          v-model="form.message"
          name="message"
          class="form-input"
          placeholder="Your Message"
          required
          data-form-input
        ></textarea>

        <button class="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script setup>
import useContactForm from "../../composables/useContactForm";
import profileData from "../data/profileData";

const { form, handleSubmit, errors } = useContactForm();

defineProps({
  isContactOpen: {
    type: Boolean,
    default: () => false,
  },
});
</script>
