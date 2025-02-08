<template>
  <article class="resume" v-if="isResumeOpen" :class="{ active: isResumeOpen }">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>

    <template v-for="(timeLineData, i) in timeLinesData" :key="i">
      <TimeLine
        :title="timeLineData.title"
        :icon="timeLineData.icon"
        :timeLineList="timeLineData.timeLineList"
      />
    </template>

    <Skills :skillsData="skillsData" />
  </article>
</template>
<script setup>
import TimeLine from "./TimeLine.vue";
import Skills from "./Skills.vue";

defineProps({
  isResumeOpen: {
    type: Boolean,
    default: () => false,
  },
});

const timeLinesData = [
  {
    title: "Education",
    icon: "book-outline",
    timeLineList: [
      {
        title: "University school of the arts",
        duration: "2007 — 2008",
        details:
          "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
      },
      {
        title: "New york academy of art",
        duration: "2006 — 2007",
        details:
          "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
      },
      {
        title: "High school of art and design",
        duration: "2002 — 2004",
        details:
          "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
      },
    ],
  },
  {
    title: "Experience",
    icon: "book-outline",
    timeLineList: [
      {
        title: "Creative director",
        duration: "2015 — Present",
        details:
          "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
      },
      {
        title: "Art director",
        duration: "2013 — 2015",
        details:
          "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
      },
      {
        title: "Web designer",
        duration: "2010 — 2013",
        details:
          "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
      },
    ],
  },
];
const skillsData = [
  {
    title: "Web design",
    progress: "80%",
  },
  {
    title: "Graphic design",
    progress: "70%",
  },
  {
    title: "Branding",
    progress: "90%",
  },
  {
    title: "WordPress",
    progress: "50%",
  },
];
</script>
