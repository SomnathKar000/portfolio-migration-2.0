<template>
  <article class="resume" v-if="isResumeOpen" :class="{ active: isResumeOpen }">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>

    <template v-for="(timeLineData, i) in profileData.timeLinesData" :key="i">
      <TimeLine
        :title="timeLineData.title"
        :icon="timeLineData.icon"
        :timeLineList="timeLineData.timeLineList"
      />
    </template>

    <Skills
      v-if="profileData.skills?.show"
      :skillsData="profileData.skills.data"
    />
  </article>
</template>
<script setup>
import TimeLine from "./TimeLine.vue";
import Skills from "./Skills.vue";
import profileData from "../data/profileData";

defineProps({
  isResumeOpen: {
    type: Boolean,
    default: () => false,
  },
});
</script>
