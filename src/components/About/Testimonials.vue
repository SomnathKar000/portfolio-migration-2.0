<template>
  <section v-if="profileData.testimonials.show" class="testimonials">
    <h3 class="h3 testimonials-title">Testimonials</h3>

    <ul class="testimonials-list has-scrollbar">
      <template
        v-for="(testimonial, i) in profileData.testimonials.data"
        :key="i"
      >
        <li class="testimonials-item">
          <div
            class="content-card"
            data-testimonials-item
            @click="openModel(testimonial)"
          >
            <figure class="testimonials-avatar-box">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                width="60"
                data-testimonials-avatar
              />
            </figure>

            <h4 class="h4 testimonials-item-title" data-testimonials-title>
              {{ testimonial.name }}
            </h4>

            <div class="testimonials-text" data-testimonials-text>
              <p>
                {{ testimonial.feedback }}
              </p>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </section>
  <TestimonialModel
    :selectedTestimonial="selectedTestimonial"
    :isTestimonialModelOpen="isTestimonialModelOpen"
    @closeModel="isTestimonialModelOpen = false"
  />
</template>

<script setup>
import { ref } from "vue";
import TestimonialModel from "./TestimonialModel.vue";
import profileData from "../data/profileData";

const testimonials = [
  {
    name: "Daniel Lewis",
    avatar: "/assets/avatar-1.png",
    feedback:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Jessica Miller",
    avatar: "/assets/avatar-2.png",
    feedback:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Emily Evans",
    avatar: "/assets/avatar-3.png",
    feedback:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Henry William",
    avatar: "/assets/avatar-4.png",
    feedback:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
];
const selectedTestimonial = ref(profileData.testimonials.data[0]);
const isTestimonialModelOpen = ref(false);

function openModel(testimonial) {
  setTimeout(() => {
    isTestimonialModelOpen.value = true;
    selectedTestimonial.value = testimonial;
  });
}
</script>
