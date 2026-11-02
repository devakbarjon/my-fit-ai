<script setup>
import { ref } from "vue";
import {
  ArrowRight, BarChart3, Camera, Check, CircleHelp, Dumbbell, MessageCircle, ShieldCheck,
  Sparkles, Utensils,
} from "@lucide/vue";
import { Motion } from "motion-v";
import Button from "../components/ui/Button.vue";
import ChartCard from "../components/ChartCard.vue";

const featureList = [
  { icon: Dumbbell, index: "01", title: "Workouts shaped around you", description: "Explore structured sessions based on your goals, training experience, schedule, and available equipment.", details: ["Exercise suggestions with sets and reps", "Options for home or gym routines", "A suggested weekly workout rhythm"], preview: "workout" },
  { icon: Camera, index: "02", title: "A simpler way to log meals", description: "Add a meal photo and review an AI-assisted estimate of calories and key nutrients before logging.", details: ["Estimated calories and macros", "Quick meal notes", "You stay in control of every entry"], preview: "nutrition" },
  { icon: BarChart3, index: "03", title: "Progress you can follow", description: "See your check-ins and activity together so patterns are easier to notice over time.", details: ["Weight check-in history", "Weekly workout activity", "Simple nutrition summaries"], preview: "progress" },
  { icon: MessageCircle, index: "04", title: "Guidance when you need it", description: "Ask for general fitness ideas and get recommendations to help you think through a routine.", details: ["Workout planning suggestions", "Everyday habit ideas", "Clear boundaries around health advice"], preview: "coach" },
];

const activeTab = ref("workout");

function selectFeature(preview) {
  activeTab.value = preview;
}
</script>

<template>
  <section class="route-hero section-space">
    <div class="container route-hero-grid">
      <div>
        <span class="eyebrow"><span class="eyebrow-dot"></span>THE TOOLS TO FIND YOUR RHYTHM</span>
        <h1>One plan.<br /><span>Your whole routine.</span></h1>
        <p>Workouts, food notes, and progress tools designed to fit into everyday life — not take it over.</p>
        <div class="hero-buttons"><Button to="/pricing">Explore plans <ArrowRight :size="16" /></Button><Button to="/#how-it-works" variant="outline">How it works</Button></div>
      </div>
      <div class="route-hero-card">
        <div class="route-card-top"><span class="route-card-icon"><Sparkles :size="17" /></span><span class="sample-chip">PRODUCT PREVIEW</span></div>
        <span class="mini-label">TODAY, YOUR WAY</span>
        <h2>A little structure.<br />A lot more clarity.</h2>
        <div class="routine-list"><div><span class="routine-check"><Check :size="12" /></span><span><b>Move</b><small>A workout that fits your day</small></span><Dumbbell :size="16" /></div><div><span class="routine-check"><Check :size="12" /></span><span><b>Fuel</b><small>Nutrition estimates, at a glance</small></span><Utensils :size="16" /></div><div><span class="routine-check"><Check :size="12" /></span><span><b>Reflect</b><small>Progress you can look back on</small></span><BarChart3 :size="16" /></div></div>
        <p class="sample-disclaimer">Illustrative concept preview</p>
      </div>
    </div>
  </section>

  <section class="feature-detail-section section-space">
    <div class="container">
      <div class="section-heading centered-heading"><span class="eyebrow">MADE FOR THE FULL PICTURE</span><h2>Small tools. More connected days.</h2><p>Each part of MyFitAI is designed to work together, so your routine feels easier to follow.</p></div>
      <nav class="feature-tabs" aria-label="Jump to a feature">
        <a v-for="feature in featureList" :key="feature.preview" :href="`#feature-${feature.preview}`" :aria-current="activeTab === feature.preview ? 'location' : undefined" :class="{ selected: activeTab === feature.preview }" @click="selectFeature(feature.preview)">
          <component :is="feature.icon" :size="16" /><span>{{ feature.title.split(" ").slice(0, 2).join(" ") }}</span>
        </a>
      </nav>
      <div class="feature-detail-list">
        <Motion v-for="feature in featureList" :key="feature.index" :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.4 }">
          <article class="feature-detail-card" :id="`feature-${feature.preview}`">
            <div class="feature-detail-copy">
              <span class="feature-index">{{ feature.index }} / MYFITAI TOOLS</span>
              <div class="feature-icon"><component :is="feature.icon" :size="21" /></div>
              <h3>{{ feature.title }}</h3><p>{{ feature.description }}</p>
              <ul><li v-for="detail in feature.details" :key="detail"><Check :size="15" />{{ detail }}</li></ul>
              <small v-if="feature.preview === 'nutrition'" class="safety-note"><ShieldCheck :size="14" /> Meal analysis is an estimate, not a medical or laboratory measurement.</small>
            </div>
            <div class="feature-detail-visual" :class="`visual-${feature.preview}`">
              <template v-if="feature.preview === 'workout'">
                <div class="detail-preview-head"><span><small>YOUR PLAN / TODAY</small><b>Upper body</b></span><span class="round-icon"><Dumbbell :size="17" /></span></div>
                <div class="detail-exercise"><span>01</span><b>Dumbbell chest press</b><small>3 sets × 10 reps</small></div>
                <div class="detail-exercise"><span>02</span><b>Seated cable row</b><small>3 sets × 12 reps</small></div>
                <div class="detail-exercise"><span>03</span><b>Shoulder press</b><small>3 sets × 10 reps</small></div>
                <div class="detail-preview-foot"><span>About 40 minutes</span><span>Sample plan</span></div>
              </template>
              <template v-else-if="feature.preview === 'nutrition'">
                <div class="meal-detail-image"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85" alt="Colorful grain bowl with fresh vegetables" loading="lazy" /></div>
                <div class="meal-detail-copy"><span class="mini-label">MEAL ESTIMATE</span><h3>Colorful grain bowl</h3><b>520 <small>kcal (estimated)</small></b><div class="macro-pills"><span>Protein <b>24g</b></span><span>Carbs <b>62g</b></span><span>Fat <b>18g</b></span></div><small>Estimates can vary based on ingredients and portions.</small></div>
              </template>
              <template v-else-if="feature.preview === 'progress'">
                <div class="detail-preview-head"><span><small>YOUR CHECK-INS</small><b>A trend, not a finish line.</b></span><span class="sample-chip">SAMPLE</span></div>
                <div class="detail-chart"><ChartCard /></div>
                <div class="detail-stat-row"><span>Workouts this week <b>4</b></span><span>Time moving <b>3h 20m</b></span></div>
              </template>
              <template v-else>
                <div class="coach-window-head"><span class="coach-avatar">M</span><span><b>MyFitAI Coach</b><small>General fitness guidance</small></span><span class="online-dot"></span></div>
                <div class="chat-bubble">How can I make a rest day feel useful?</div>
                <div class="chat-bubble coach-bubble">A relaxed walk or some gentle mobility might help you unwind. Rest is part of a routine, too — listen to how your body feels.</div>
                <div class="coach-input">Ask a general fitness question… <MessageCircle :size="15" /></div>
                <small class="coach-note"><CircleHelp :size="12" /> Not a substitute for advice from a qualified professional.</small>
              </template>
            </div>
          </article>
        </Motion>
      </div>
      <div class="feature-cta"><div><h3>Ready to find your routine?</h3><p>Start with the plan that fits where you are today.</p></div><Button to="/pricing">Compare plans <ArrowRight :size="16" /></Button></div>
    </div>
  </section>
</template>
