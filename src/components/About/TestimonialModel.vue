<template>
  <div
    ref="testimonialModelRef"
    class="modal-container"
    data-modal-container
    :class="{ active: isTestimonialModelOpen }"
  >
    <div
      class="overlay"
      data-overlay
      :class="{ active: isTestimonialModelOpen }"
    ></div>

    <section class="testimonials-modal">
      <button class="modal-close-btn" @click="emits('closeModel')">
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div class="modal-img-wrapper">
        <figure class="modal-avatar-box">
          <img
            :src="selectedTestimonial.avatar"
            :alt="selectedTestimonial.name"
            width="80"
            data-modal-img
          />
        </figure>

        <img src="/assets/icon-quote.svg" alt="quote icon" />
      </div>

      <div class="modal-content">
        <h4 class="h3 modal-title" data-modal-title>
          {{ selectedTestimonial.name }}
        </h4>

        <time datetime="2021-06-14">14 June, 2021</time>

        <div data-modal-text>
          <p>
            {{ selectedTestimonial.feedback }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onUnmounted, onMounted } from "vue";

const props = defineProps({
  selectedTestimonial: {
    type: Object,
    default: () => {},
  },
  isTestimonialModelOpen: {
    type: Boolean,
    default: () => false,
  },
});

const emits = defineEmits(["closeModel"]);

const testimonialModelRef = ref(null);

onMounted(() => {
  document.addEventListener("click", handleClickOutSide);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutSide);
});

function handleClickOutSide(event) {
  //   if (
  //     !testimonialModelRef.value.contains(event.target) &&
  //     props.isTestimonialModelOpen
  //   ) {
  //     emits("closeModel");
  //   }
}
</script>
