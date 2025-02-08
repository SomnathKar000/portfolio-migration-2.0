<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <ion-icon :name="icon"></ion-icon>
      </div>

      <h3 class="h3">{{ title }}</h3>
    </div>

    <ol class="timeline-list">
      <template v-for="(timeline, i) in timeLineList" :key="i">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">{{ timeline.title }}</h4>

          <span>{{ timeline.duration }}</span>

          <p class="timeline-text">
            {{ timeline.details }}
          </p>
        </li>
      </template>
    </ol>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    default: () => "book-outline",
  },
  timeLineList: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every(
        (item) =>
          typeof item.title === "string" &&
          typeof item.duration === "string" &&
          typeof item.details === "string"
      );
    },
  },
});
</script>
