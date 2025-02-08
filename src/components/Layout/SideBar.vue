<template>
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/assets/my-avatar.png" alt="Richard hanrick" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Richard hanrick">Somnath Kar</h1>

        <p class="title">Software Engineer</p>
      </div>

      <button class="info_more-btn">
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

            <time datetime="1982-06-23">Sept 17, 2001</time>
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
        <li class="social-item">
          <a href="https://github.com/SomnathKar000" class="social-link">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a
            href="https://www.linkedin.com/in/somnath-kar-aa73aa1a3/"
            class="social-link"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="https://twitter.com/Somnathkar000" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
