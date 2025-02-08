<template>
  <main>
    <SideBar />

    <div class="main-content">
      <NavBar
        :currentPanel="currentPanel"
        :navButtons="navButtons"
        @updatePanel="updatePanel"
      />

      <About :isAboutOpen="isAboutOpen" />
      <Resume :isResumeOpen="isResumeOpen" />
      <Portfolio :isPortfolioOpen="isPortfolioOpen" />
      <Blog :isBlogOpen="isBlogOpen" />
      <Contact :isContactOpen="isContactOpen" />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import About from "./About/Index.vue";
import SideBar from "./Layout/SideBar.vue";
import NavBar from "./Layout/NavBar.vue";
import Resume from "./Resume/Index.vue";
import Portfolio from "./Portfolio/Index.vue";
import Blog from "./Blog/Index.vue";
import Contact from "./Contact/Index.vue";

const navButtons = ["About", "Resume", "Portfolio", "Blog", "Contact"];

const currentPanel = ref("About");

const isAboutOpen = computed(() => currentPanel.value === "About");
const isResumeOpen = computed(() => currentPanel.value === "Resume");
const isPortfolioOpen = computed(() => currentPanel.value === "Portfolio");
const isBlogOpen = computed(() => currentPanel.value === "Blog");
const isContactOpen = computed(() => currentPanel.value === "Contact");

function updatePanel(name) {
  currentPanel.value = name;
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
