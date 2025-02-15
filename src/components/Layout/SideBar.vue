<template>
  <aside class="sidebar" data-sidebar :class="{ active: showContactsInfo }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img
          :src="profileData.personalInfo.avatar"
          :alt="profileData.personalInfo.name"
          width="80"
        />
      </figure>

      <div class="info-content">
        <h1 class="name" :title="profileData.personalInfo.name">
          {{ profileData.personalInfo.name }}
        </h1>

        <p class="title">{{ profileData.personalInfo.title }}</p>
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

            <a
              :href="`mailto:${profileData.personalInfo.email}`"
              class="contact-link"
              >{{ profileData.personalInfo.email }}</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a
              :href="`tel:${profileData.personalInfo.phone}`"
              class="contact-link"
              >{{ profileData.personalInfo.phone }}</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Birthday</p>

            <time :datetime="profileData.personalInfo.birthday">{{
              formattedDate
            }}</time>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>{{ profileData.personalInfo.location }}</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <template v-for="(contact, i) in profileData.socialLinks" :key="i">
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
import { ref, computed } from "vue";
import { formatDate } from "../../utils/helper";
import profileData from "../../data/profileData";

const showContactsInfo = ref(false);
const formattedDate = computed(() =>
  formatDate(profileData.personalInfo.birthday)
);

function toggleShowContactInfo() {
  showContactsInfo.value = !showContactsInfo.value;
}
</script>
