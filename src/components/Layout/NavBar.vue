<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <template v-for="name in navButtons" :key="name">
        <li class="navbar-item">
          <button
            class="navbar-link"
            :class="{ active: name === currentPanel }"
            @click="updatePanel(name)"
          >
            {{ name }}
          </button>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  navButtons: {
    type: Array,
    default: () => [],
  },
  currentPanel: {
    type: String,
    require: true,
  },
});
const emit = defineEmits(["updatePanel"]);

function updatePanel(name) {
  emit("updatePanel", name);
}
</script>
