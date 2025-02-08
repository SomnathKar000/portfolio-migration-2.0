<template>
  <section class="clients">
    <h3 class="h3 clients-title">Clients</h3>

    <ul class="clients-list has-scrollbar">
      <template v-for="client in clientsList" :key="client.src">
        <li class="clients-item">
          <a href="#">
            <img :src="client.src" alt="client logo" />
          </a>
        </li>
      </template>
    </ul>
  </section>
</template>
<script setup>
const clientsList = [
  {
    name: "",
    src: "/assets/logo-1-color.png",
  },
  {
    name: "",
    src: "/assets/logo-2-color.png",
  },
  {
    name: "",
    src: "/assets/logo-3-color.png",
  },

  {
    name: "",
    src: "/assets/logo-4-color.png",
  },
  {
    name: "",
    src: "/assets/logo-5-color.png",
  },
  {
    name: "",
    src: "/assets/logo-6-color.png",
  },
];
</script>
