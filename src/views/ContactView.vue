<script setup>
import { ref } from "vue";
import { ArrowRight, Check, Mail, MessageCircle, Send } from "@lucide/vue";
import Button from "../components/ui/Button.vue";

const form = ref({ name: "", email: "", topic: "General question", message: "" });
const submitted = ref(false);

function submitForm() {
  submitted.value = true;
}
</script>

<template>
  <section class="route-hero contact-hero section-space">
    <div class="container contact-hero-grid">
      <div class="contact-copy">
        <span class="eyebrow"><span class="eyebrow-dot"></span>LET'S TALK ABOUT YOUR ROUTINE</span>
        <h1>We'd love to<br /><span>hear from you.</span></h1>
        <p>Have a question about the MyFitAI concept or want to share what you'd like to see? Leave a note below.</p>
        <div class="contact-info-card"><span class="contact-info-icon"><MessageCircle :size="18" /></span><span><b>Share a thought</b><small>Feedback helps shape the concept.</small></span></div>
        <div class="contact-info-card"><span class="contact-info-icon"><Mail :size="18" /></span><span><b>Concept preview</b><small>This form is a demo and doesn't send messages.</small></span></div>
      </div>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="contact-form-heading"><span class="eyebrow">CONTACT FORM PREVIEW</span><h2>Send us a note.</h2><p>Fields marked with * are required.</p></div>
        <template v-if="!submitted">
          <div class="form-row">
            <label>Your name *<input v-model.trim="form.name" name="name" autocomplete="name" required placeholder="Your name" /></label>
            <label>Email address *<input v-model.trim="form.email" type="email" name="email" autocomplete="email" required placeholder="you@example.com" /></label>
          </div>
          <label>What would you like to talk about?
            <select v-model="form.topic" name="topic"><option>General question</option><option>Product idea</option><option>Pricing feedback</option><option>Other feedback</option></select>
          </label>
          <label>Your message *<textarea v-model.trim="form.message" name="message" rows="5" required minlength="10" placeholder="Tell us what's on your mind…"></textarea></label>
          <Button type="submit" class="form-submit">Preview message <Send :size="15" /></Button>
          <p class="form-privacy-note">Demo only — the message is not transmitted or stored.</p>
        </template>
        <div v-else class="form-success" role="status" aria-live="polite">
          <span><Check :size="21" /></span><h3>Thanks for sharing your note.</h3>
          <p>This concept preview isn't connected to an inbox, so your message wasn't sent or stored.</p>
          <button type="button" class="reset-form" @click="submitted = false">Back to the form</button>
        </div>
      </form>
    </div>
  </section>

  <section class="contact-note-section section-space">
    <div class="container contact-note-inner"><span class="feature-icon"><MessageCircle :size="21" /></span><div><h2>Your feedback helps us think through what comes next.</h2><p>MyFitAI is an early concept. Share the features, questions, or everyday fitness challenges you'd like us to consider.</p></div><Button to="/features" variant="outline">Explore features <ArrowRight :size="15" /></Button></div>
  </section>
</template>
