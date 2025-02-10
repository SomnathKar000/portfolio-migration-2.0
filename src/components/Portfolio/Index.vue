<template>
  <article
    class="portfolio"
    v-if="isPortfolioOpen"
    :class="{ active: isPortfolioOpen }"
  >
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <template v-for="category in categories" :key="category">
          <li class="filter-item">
            <button
              data-filter-btn
              :class="{ active: isActive(category) }"
              @click="updateCategory(category)"
            >
              {{ category }}
            </button>
          </li>
        </template>
      </ul>

      <div class="filter-select-box">
        <button
          class="filter-select"
          data-select
          :class="{ active: openSelectCategoryMenu }"
          @click="toggleSelectCategory"
        >
          <div class="select-value" data-select-value>
            {{ selectedCategory }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul class="select-list">
          <template v-for="category in categories" :key="category">
            <li class="select-item">
              <button data-select-item @click="updateCategory(category)">
                {{ category }}
              </button>
            </li>
          </template>
        </ul>
      </div>

      <ul class="project-list">
        <template v-for="(project, i) in filteredProjects" :key="i">
          <li
            class="project-item active"
            data-filter-item
            :data-category="project.category"
          >
            <a :href="project.link" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img :src="project.image" :alt="project.alt" loading="lazy" />
              </figure>

              <h3 class="project-title">{{ project.title }}</h3>

              <p class="project-category">{{ project.category }}</p>
            </a>
          </li>
        </template>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from "vue";
import profileData from "../data/profileData";

defineProps({
  isPortfolioOpen: {
    type: Boolean,
    default: () => false,
  },
});

const selectedCategory = ref("Select category");
const openSelectCategoryMenu = ref(false);

const categories = computed(() =>
  Array.from(
    new Set([
      "All",
      ...profileData.projects?.map((project) => project.category),
    ])
  )
);

const filteredProjects = computed(() => {
  if (
    selectedCategory.value === "All" ||
    selectedCategory.value === "Select category"
  )
    return profileData.projects;
  return profileData.projects?.filter(
    (project) => project.category === selectedCategory.value
  );
});

function isActive(category) {
  return (
    selectedCategory.value == category ||
    (category == "All" && selectedCategory.value === "Select category")
  );
}
function updateCategory(category) {
  selectedCategory.value = category;
  openSelectCategoryMenu.value = false;
}
function toggleSelectCategory() {
  openSelectCategoryMenu.value = !openSelectCategoryMenu.value;
}
</script>
