<template>
  <aside class="sidebar" data-sidebar :class="{ active: showContactsInfo }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/assets/my-avatar.png" alt="Somnath Kar" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Somnath Kar">Somnath Kar</h1>

        <p class="title">Software Engineer</p>
      </div>

      <button class="info_more-btn" @click="toggleShowContactInfo">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:somnathkar2023@gmail.com" class="contact-link"
              >somnathkar2023@gmail.com</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a href="tel:+918509592835" class="contact-link"
              >+91 (850) 959-2835</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Birthday</p>

            <time datetime="2001-09-17">Sept 17, 2001</time>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>Kolkata, West Bengal, India</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <template v-for="(contact, i) in contactListData" :key="i">
          <li class="social-item">
            <a :href="contact.link" class="social-link">
              <ion-icon :name="contact.icon"></ion-icon>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </aside>
</template>
<script setup>
import { ref } from "vue";

const contactListData = [
  {
    name: "Github",
    link: "https://github.com/SomnathKar000",
    icon: "logo-github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/somnath-kar-aa73aa1a3/",
    icon: "logo-linkedin",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Somnathkar000",
    icon: "logo-twitter",
  },
];

const showContactsInfo = ref(false);

function toggleShowContactInfo() {
  showContactsInfo.value = !showContactsInfo.value;
}
</script>
