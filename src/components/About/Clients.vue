<template>
  <section v-if="profileData.clients.show" class="clients">
    <h3 class="h3 clients-title">Clients</h3>

    <ul class="clients-list has-scrollbar">
      <template v-for="client in profileData.clients.data" :key="client.src">
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
import profileData from "../../data/profileData";
</script>
