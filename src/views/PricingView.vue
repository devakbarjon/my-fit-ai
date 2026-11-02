<script setup>
import { computed, ref } from "vue";
import { ArrowRight, Check, Minus } from "@lucide/vue";
import Button from "../components/ui/Button.vue";

const selectedPlan = ref("free");
const comparison = [
  ["Basic workout plans", true, true],
  ["Weight tracking", true, true],
  ["Food tracking", "Limited", "AI-assisted estimates"],
  ["Progress monitoring", "Basic", "Advanced reports"],
  ["AI coaching", "Limited", "More coaching"],
  ["Personalized recommendations", false, true],
];
const selectedPlanName = computed(() => selectedPlan.value === "premium" ? "Premium" : "Free");
</script>

<template>
  <section class="route-hero pricing-route-hero section-space">
    <div class="container centered-heading">
      <span class="eyebrow"><span class="eyebrow-dot"></span>SIMPLE, TRANSPARENT PRICING</span>
      <h1>Find your fit.<br /><span>Start at your own pace.</span></h1>
      <p>Start for free and upgrade when you need more personalized support.</p>
      <div class="pricing-toggle" role="group" aria-label="Choose a plan to highlight">
        <button type="button" :class="{ active: selectedPlan === 'free' }" @click="selectedPlan = 'free'">Free</button>
        <button type="button" :class="{ active: selectedPlan === 'premium' }" @click="selectedPlan = 'premium'">Premium</button>
      </div>
      <span class="plan-selection-note">Viewing {{ selectedPlanName }} plan details</span>
    </div>
  </section>

  <section class="pricing-section section-space pricing-page-cards">
    <div class="container">
      <div class="pricing-grid">
        <article class="price-card" :class="{ 'selected-plan': selectedPlan === 'free' }">
          <span class="plan-kicker">A GOOD PLACE TO BEGIN</span><h2>Free</h2><p class="plan-description">Build a routine and get to know your fitness habits.</p>
          <div class="price"><strong>$0</strong><span>/ month</span></div>
          <Button to="/contact" variant="outline" class="price-button">Get Started Free <ArrowRight :size="16" /></Button>
          <div class="plan-divider"></div><span class="included-label">INCLUDES</span>
          <ul class="plan-list"><li>Basic workout plans</li><li>Weight tracking</li><li>Limited food tracking</li><li>Basic progress monitoring</li><li>Limited AI coaching</li></ul>
        </article>
        <article class="price-card premium-card" :class="{ 'selected-plan': selectedPlan === 'premium' }">
          <span class="recommended-label">RECOMMENDED</span><span class="plan-kicker">MORE PERSONALIZED SUPPORT</span><h2>Premium</h2>
          <p class="plan-description">A more personal plan for your changing goals.</p>
          <div class="price"><strong>$9.99</strong><span>/ month</span></div>
          <Button to="/contact" variant="lime" class="price-button">Get Premium <ArrowRight :size="16" /></Button>
          <div class="plan-divider"></div><span class="included-label">EVERYTHING IN FREE, PLUS</span>
          <ul class="plan-list"><li>Personalized AI workout plans</li><li>AI-assisted meal tracking</li><li>Detailed nutrition information</li><li>Advanced progress reports</li><li>More AI coaching</li><li>Personalized recommendations</li></ul>
        </article>
      </div>
      <p class="pricing-note">Plans shown are concept pricing and may change before launch. No payment is collected on this preview site.</p>
    </div>
  </section>

  <section class="comparison-section section-space">
    <div class="container">
      <div class="section-heading centered-heading"><span class="eyebrow">A SIDE-BY-SIDE LOOK</span><h2>What's included?</h2><p>Compare the concept plans and choose what suits you.</p></div>
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead><tr><th scope="col">FEATURE</th><th scope="col">FREE</th><th scope="col">PREMIUM</th></tr></thead>
          <tbody><tr v-for="row in comparison" :key="row[0]"><th scope="row">{{ row[0] }}</th><td><Check v-if="row[1] === true" :size="17" /><Minus v-else-if="row[1] === false" :size="17" class="comparison-minus" /><span v-else>{{ row[1] }}</span></td><td><Check v-if="row[2] === true" :size="17" /><Minus v-else-if="row[2] === false" :size="17" class="comparison-minus" /><span v-else>{{ row[2] }}</span></td></tr></tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="faq-section section-space">
    <div class="container faq-layout">
      <div><span class="eyebrow">GOOD TO KNOW</span><h2>A few common questions.</h2><p>This is a product concept, so plan details may evolve before launch.</p><Button to="/contact" variant="outline">Ask us a question <ArrowRight :size="15" /></Button></div>
      <div class="faq-list">
        <details><summary>Is MyFitAI available now?<span>+</span></summary><p>This site presents a product concept. The app and its plans are not currently available for purchase here.</p></details>
        <details><summary>Are the nutrition estimates exact?<span>+</span></summary><p>No. Photo-based food analysis is an estimate and can vary with ingredients, portion sizes, and preparation.</p></details>
        <details><summary>Can I change my plan?<span>+</span></summary><p>The plan details shown are illustrative concept pricing. Subscription management is not enabled on this preview.</p></details>
      </div>
    </div>
  </section>
</template>
