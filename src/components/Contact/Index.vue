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
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5315.3540290119545!2d88.64859565311714!3d22.684577989552714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739027614717!5m2!1sen!2sin"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form action="#" class="form" data-form>
        <div class="input-wrapper">
          <input
            type="text"
            name="fullname"
            class="form-input"
            placeholder="Full name"
            required
            data-form-input
          />

          <input
            type="email"
            name="email"
            class="form-input"
            placeholder="Email address"
            required
            data-form-input
          />
        </div>

        <textarea
          name="message"
          class="form-input"
          placeholder="Your Message"
          required
          data-form-input
        ></textarea>

        <button class="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script setup>
defineProps({
  isContactOpen: {
    type: Boolean,
    default: () => false,
  },
});
</script>
