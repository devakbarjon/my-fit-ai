<script setup>
import { ArrowRight, Compass, Heart, ShieldCheck, Sparkles } from "@lucide/vue";
import { Motion } from "motion-v";
import Button from "../components/ui/Button.vue";

const principles = [
  { icon: Heart, title: "Built around real life", text: "Healthy routines should fit your day, your experience, and the equipment you have access to." },
  { icon: Compass, title: "Progress at your pace", text: "A useful plan leaves room to adjust. Your journey does not need to look like anyone else's." },
  { icon: ShieldCheck, title: "Helpful, not overpromising", text: "Fitness tools can support everyday habits without pretending to replace qualified care." },
];
</script>

<template>
  <section class="route-hero about-hero section-space">
    <div class="container about-hero-grid">
      <div>
        <span class="eyebrow"><span class="eyebrow-dot"></span>ABOUT THE MYFITAI CONCEPT</span>
        <h1>Fitness should feel<br /><span>like it belongs to you.</span></h1>
        <p>MyFitAI is a product concept for making personal fitness planning feel a little clearer, more connected, and easier to make your own.</p>
        <Button to="/features">See what we're building <ArrowRight :size="16" /></Button>
      </div>
      <Motion class="about-image-card" :initial="{ opacity: 0, scale: 0.97 }" :animate="{ opacity: 1, scale: 1 }" :transition="{ duration: 0.5 }">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85" alt="Athlete taking a focused moment between strength training sets" />
        <div class="about-image-caption"><Sparkles :size="16" /><span><b>Your goals. Your plan.</b><small>A personal approach to everyday fitness.</small></span></div>
      </Motion>
    </div>
  </section>

  <section class="about-story-section section-space">
    <div class="container about-story-grid">
      <div><span class="eyebrow">THE IDEA</span><h2>One place for the parts of your routine that connect.</h2></div>
      <div><p>It can be hard to keep workouts, food notes, and progress check-ins in one clear view. MyFitAI imagines bringing those everyday pieces together with plans and suggestions that start with your goals.</p><p>Instead of promising overnight change, the idea is to make it easier to plan, notice patterns, and keep showing up in a way that feels sustainable for you.</p><span class="concept-callout"><ShieldCheck :size="18" /> MyFitAI is currently a business concept, not a released fitness service.</span></div>
    </div>
  </section>

  <section class="principles-section section-space">
    <div class="container">
      <div class="section-heading centered-heading"><span class="eyebrow">WHAT MATTERS TO US</span><h2>A thoughtful approach to fitness.</h2><p>The principles behind the product we're imagining.</p></div>
      <div class="principle-grid">
        <Motion v-for="(principle, index) in principles" :key="principle.title" :initial="{ opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.4, delay: index * 0.08 }" class="principle-card">
          <div class="feature-icon"><component :is="principle.icon" :size="21" /></div><h3>{{ principle.title }}</h3><p>{{ principle.text }}</p>
        </Motion>
      </div>
    </div>
  </section>

  <section class="cta-section section-space">
    <div class="container cta-inner"><span class="cta-orbit"></span><div><span class="eyebrow cta-eyebrow">TAKE A CLOSER LOOK</span><h2>See how MyFitAI<br />could fit your routine.</h2><p>Explore the concept features and sample plans.</p></div><Button to="/features" variant="lime" size="lg" class="cta-button">Explore features <ArrowRight :size="16" /></Button></div>
  </section>
</template>
