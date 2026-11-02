<script setup>
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Dumbbell, Flame, Heart, Sparkles } from "@lucide/vue";
import { Motion } from "motion-v";
import Button from "../components/ui/Button.vue";
import ChartCard from "../components/ChartCard.vue";

const goals = [
  {
    number: "01 / YOUR STARTING POINT",
    title: "Lose weight",
    description: "Build healthier habits, track nutrition, and work toward your target weight.",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete training in a bright, modern gym",
  },
  {
    number: "02 / GET STRONGER",
    title: "Build muscle",
    description: "Follow structured workouts and nutrition plans designed to support muscle growth.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    alt: "Strength athlete lifting weights during a workout",
  },
  {
    number: "03 / KEEP YOUR RHYTHM",
    title: "Stay fit",
    description: "Maintain an active lifestyle with balanced workouts and steady progress tracking.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    alt: "Runner enjoying an outdoor run on a tree-lined path",
  },
];

const features = [
  { icon: Dumbbell, title: "AI workout plans", description: "Training ideas shaped around your goals, fitness level, and the equipment you have." },
  { icon: Flame, title: "Smart food tracking", description: "Log a meal with a photo and review an AI-assisted estimate of its nutrition." },
  { icon: ArrowDownRight, title: "Progress tracking", description: "Keep workouts, weight check-ins, and nutrition notes together over time." },
  { icon: Heart, title: "Personal AI coach", description: "Get practical fitness guidance and ideas to help plan your next session." },
];

const steps = [
  ["01", "Create your profile", "Share a few basics like your height, weight, and fitness level."],
  ["02", "Choose your goal", "Tell MyFitAI what you are working toward and what works for you."],
  ["03", "Get your plan", "Explore a suggested routine that can adapt as your needs change."],
  ["04", "Track your progress", "Log your activity and keep an eye on the habits you are building."],
];
</script>

<template>
  <section class="hero section-space" id="home">
    <div class="container">
      <div class="hero-browser">
        <div class="browser-bar" aria-hidden="true">
          <span class="browser-dot dot-red"></span><span class="browser-dot dot-yellow"></span><span class="browser-dot dot-green"></span>
          <span class="browser-address">myfitai.app</span>
        </div>
        <div class="hero-content">
          <div class="hero-copy">
            <span class="eyebrow"><span class="eyebrow-dot"></span>Your personal AI fitness trainer</span>
            <h1>Your Fitness.<br />Your Goals.<br /><span>Your AI Coach.</span></h1>
            <p class="hero-description">Personalized workout plans, smart nutrition tracking, and progress monitoring — everything you need to improve your fitness in one app.</p>
            <div class="hero-buttons">
              <Button to="/pricing">Get Started <ArrowUpRight :size="16" /></Button>
              <Button to="/features" variant="outline"><Sparkles :size="15" /> Explore Features</Button>
            </div>
            <p class="hero-note"><span class="note-check"><Check :size="11" /></span> One app. Your entire fitness journey.</p>
          </div>
          <div class="hero-visual">
            <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
            <span class="orbit-dot orbit-dot-top"></span><span class="orbit-dot orbit-dot-bottom"></span>
            <div class="hero-dashboard">
              <div class="dash-top">
                <span class="brand dash-brand"><span class="brand-mark"><Dumbbell :size="15" /></span><span>MyFit<span class="brand-ai">AI</span></span></span>
                <span class="sample-chip">SAMPLE PREVIEW</span><span class="avatar">M</span>
              </div>
              <div class="dash-welcome">
                <div><p class="mini-label">YOUR FITNESS SNAPSHOT</p><h2>Your day, in balance.</h2></div>
                <span class="streak-chip"><Sparkles :size="10" /> Your pace</span>
              </div>
              <div class="hero-stat-grid">
                <article class="mini-card">
                  <div class="card-heading"><span>Current weight</span><ArrowUpRight :size="13" /></div>
                  <strong>65.8 <small>kg</small></strong><span class="stat-caption">Sample check-in</span>
                  <div class="hero-sparkline"><ChartCard type="line" compact /></div>
                </article>
                <article class="mini-card">
                  <div class="card-heading"><span>Daily calories</span><Flame :size="13" class="lime-icon" /></div>
                  <strong>1,650 <small>/ 2,400</small></strong>
                  <div class="calorie-track"><span></span></div><span class="stat-caption">750 kcal remaining</span>
                </article>
              </div>
              <article class="mini-card workout-card">
                <div class="workout-thumb"><Dumbbell :size="22" /></div>
                <div class="workout-info"><span class="mini-label">SUGGESTED WORKOUT</span><strong>Upper Body</strong><span>6 exercises · about 40 min</span></div>
                <ArrowRight :size="16" class="workout-arrow" />
              </article>
              <div class="dash-bottom"><span>WEEKLY ACTIVITY</span><span>Sample activity preview</span></div>
              <p class="sample-disclaimer">Illustrative sample data</p>
            </div>
            <div class="hero-float float-left"><span class="float-icon"><Check :size="15" /></span><span><b>Plan made for you</b><small>Built around your goals</small></span></div>
            <div class="hero-float float-right"><span class="float-icon float-icon-lime"><ArrowUpRight :size="15" /></span><span><b>Progress, at a glance</b><small>Your journey, your pace</small></span></div>
          </div>
        </div>
      </div>
      <div class="hero-bottomline"><span>FITNESS THAT FITS YOUR LIFE</span><span>Move with intention <b>·</b> Build with consistency <b>·</b> Progress at your pace</span></div>
    </div>
  </section>

  <section class="goals-section section-space" id="goals">
    <div class="container">
      <div class="section-heading heading-row"><div><span class="eyebrow">A PLAN THAT FEELS LIKE YOURS</span><h2>Start with your goal.</h2></div><p>Everyone has different fitness goals. MyFitAI helps you create a plan that matches yours.</p></div>
      <div class="goal-grid">
        <Motion v-for="(goal, index) in goals" :key="goal.title" :initial="{ opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.38, delay: index * 0.08 }">
          <RouterLink class="goal-card" to="/features">
            <img :src="goal.image" :alt="goal.alt" loading="lazy" />
            <span class="goal-number">{{ goal.number }}</span>
            <div class="goal-copy"><div><h3>{{ goal.title }}</h3><p>{{ goal.description }}</p></div><span class="round-arrow"><ArrowUpRight :size="17" /></span></div>
          </RouterLink>
        </Motion>
      </div>
    </div>
  </section>

  <section class="features-section section-space" id="features">
    <div class="container">
      <div class="section-heading centered-heading"><span class="eyebrow">YOUR ROUTINE, CONNECTED</span><h2>Everything you need<br class="desktop-break" /> to reach your goals.</h2><p>Your workouts, nutrition, and progress — all connected in one place.</p></div>
      <div class="feature-grid home-feature-grid">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon"><component :is="feature.icon" :size="21" /></div>
          <h3>{{ feature.title }}</h3><p>{{ feature.description }}</p>
          <div class="feature-preview feature-preview-simple"><span class="preview-dot"></span><span>{{ feature.title === "Smart food tracking" ? "Meal estimate · 520 kcal" : feature.title === "Progress tracking" ? "Weekly check-in · 65.8 kg" : feature.title === "Personal AI coach" ? "A plan that works for you" : "Today's plan · Upper body" }}</span><ArrowUpRight :size="14" /></div>
        </article>
      </div>
      <div class="section-link"><RouterLink to="/features">Explore all features <ArrowRight :size="16" /></RouterLink></div>
    </div>
  </section>

  <section class="steps-section section-space" id="how-it-works">
    <div class="container">
      <div class="section-heading centered-heading"><span class="eyebrow">A FEW SIMPLE STEPS</span><h2>Getting started is simple.</h2><p>Create your profile and let MyFitAI help you build a fitness routine.</p></div>
      <div class="steps-grid">
        <article v-for="step in steps" :key="step[0]" class="step-card"><span class="step-index">{{ step[0] }}</span><span v-if="step[0] !== '04'" class="step-line"></span><h3>{{ step[1] }}</h3><p>{{ step[2] }}</p></article>
      </div>
    </div>
  </section>

  <section class="dashboard-section section-space">
    <div class="container">
      <div class="section-heading centered-heading dashboard-heading"><span class="eyebrow">A CLEARER VIEW OF YOUR ROUTINE</span><h2>Your progress, all in one place.</h2><p>Sample stats and charts show how your workouts and check-ins can come together.</p></div>
      <div class="home-dashboard">
        <article class="overview-card"><div class="overview-heading"><span>Weight progress</span><span class="sample-chip">SAMPLE</span></div><div class="weight-big">65.8 <small>kg</small></div><p class="overview-sub">64.0 kg at week 1 · Illustrative data</p><div class="large-chart"><ChartCard /></div></article>
        <article class="overview-card weekly-overview"><div class="overview-heading"><span>Weekly activity</span><span class="sample-chip">SAMPLE</span></div><p class="overview-sub">Activity minutes, Monday to Sunday</p><div class="large-chart"><ChartCard type="bar" /></div></article>
        <article class="home-nutrition-card"><div><span class="mini-label">DAILY NUTRITION</span><h3>Fuel your routine.</h3><p>Keep an eye on your intake without losing sight of the bigger picture.</p></div><div class="nutrition-summary"><div><span>Calories</span><b>1,650 <small>/ 2,400 kcal</small></b><div class="nutrition-progress"><span></span></div></div><div><span>Protein</span><b>110 g</b></div><div><span>Carbs</span><b>180 g</b></div><div><span>Fat</span><b>55 g</b></div></div></article>
      </div>
      <p class="dashboard-disclaimer">All figures and charts are illustrative sample data for the MyFitAI product concept.</p>
    </div>
  </section>

  <section class="home-pricing-section section-space">
    <div class="container home-pricing-inner">
      <div><span class="eyebrow">START WHERE YOU ARE</span><h2>Room to grow,<br />at your own pace.</h2><p>Try the essentials for free, then add more personalized support when you're ready.</p><Button to="/pricing" variant="outline">Compare plans <ArrowRight :size="16" /></Button></div>
      <div class="home-price-options"><div><span>FREE</span><strong>$0 <small>/ month</small></strong><p>A simple place to start.</p></div><div><span>PREMIUM</span><strong>$9.99 <small>/ month</small></strong><p>More ways to personalize.</p></div></div>
    </div>
  </section>

  <section class="cta-section section-space">
    <div class="container cta-inner"><span class="cta-orbit"></span><div><span class="eyebrow cta-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to transform<br />your fitness?</h2><p>Start working toward your goals with MyFitAI. Build better habits, stay consistent, and track your progress.</p></div><Button to="/pricing" variant="lime" size="lg" class="cta-button">Get Started Today <ArrowUpRight :size="17" /></Button></div>
  </section>
</template>
