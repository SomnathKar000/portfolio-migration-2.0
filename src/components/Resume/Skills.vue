<template>
  <section class="skill">
    <h3 class="h3 skills-title">My skills</h3>

    <ul class="skills-list content-card">
      <template v-for="(skill, i) in skillsData" :key="i">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">{{ skill.title }}</h5>
            <data value="80">{{ skill.progress }}</data>
          </div>

          <div class="skill-progress-bg">
            <div
              class="skill-progress-fill"
              :style="{ width: skill.progress }"
            ></div>
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  skillsData: {
    type: Array,
    default: () => [],
  },
});
</script>
