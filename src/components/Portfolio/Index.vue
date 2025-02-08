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
            <a href="#">
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
defineProps({
  isPortfolioOpen: {
    type: Boolean,
    default: () => false,
  },
});

const projects = [
  {
    title: "Finance",
    category: "Web development",
    image: "/assets/project-1.jpg",
    alt: "finance",
  },
  {
    title: "Orizon",
    category: "Web development",
    image: "/assets/project-2.png",
    alt: "orizon",
  },
  {
    title: "Fundo",
    category: "Web design",
    image: "/assets/project-3.jpg",
    alt: "fundo",
  },
  {
    title: "Brawlhalla",
    category: "Applications",
    image: "/assets/project-4.png",
    alt: "brawlhalla",
  },
  {
    title: "DSM.",
    category: "Web design",
    image: "/assets/project-5.png",
    alt: "dsm.",
  },
  {
    title: "MetaSpark",
    category: "Web design",
    image: "/assets/project-6.png",
    alt: "metaspark",
  },
  {
    title: "Summary",
    category: "Web development",
    image: "/assets/project-7.png",
    alt: "summary",
  },
  {
    title: "Task Manager",
    category: "Applications",
    image: "/assets/project-8.jpg",
    alt: "task manager",
  },
  {
    title: "Arrival",
    category: "Web development",
    image: "/assets/project-9.png",
    alt: "arrival",
  },
];
const selectedCategory = ref("Select category");
const openSelectCategoryMenu = ref(false);

const categories = computed(() =>
  Array.from(new Set(["All", ...projects.map((project) => project.category)]))
);

const filteredProjects = computed(() => {
  if (
    selectedCategory.value === "All" ||
    selectedCategory.value === "Select category"
  )
    return projects;
  return projects.filter(
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
