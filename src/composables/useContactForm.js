import { ref } from "vue";
import { isValidEmail } from "../utils/helper";
import emaijs from "@emailjs/browser";

export default function useContactForm() {
  const form = ref({
    fullName: "",
    email: "",
    message: "",
  });
  const errors = ref({});

  function validateForm() {
    errors.value = {};

    if (!form.value.fullName) {
      errors.value.fullName = "Full name is required";
    } else if (form.value.fullName.trim().length < 3) {
      errors.value.fullName = "Full name must be at least 3 characters";
    }

    if (!form.value.email) {
      errors.value.email = "Email is required";
    } else if (!isValidEmail(form.value.email)) {
      errors.value.email = "Enter a valid email";
    }

    if (!form.value.message) {
      errors.value.message = "Message is required";
    } else if (form.value.message.trim().length < 5) {
      errors.value.message = "Message must be at least 5 characters";
    }

    return Object.keys(errors.value).length === 0;
  }

  function handleSubmit() {
    console.log(import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID);
    if (validateForm()) {
      emaijs
        .send(
          import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          form.value,
          import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
        )
        .then(() => {
          form.value.fullName = "";
          form.value.email = "";
          form.value.message = "";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return { form, errors, handleSubmit };
}
