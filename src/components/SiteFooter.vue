<script setup>
import { ArrowUpRight, Camera, Dumbbell, Play } from "@lucide/vue";
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-block">
          <RouterLink class="brand" to="/">
            <span class="brand-mark"><Dumbbell :size="20" :stroke-width="2.4" /></span>
            <span>MyFit<span class="brand-ai">AI</span></span>
          </RouterLink>
          <p>Your Goals. Your Plan. Your Progress.</p>
        </div>
        <div class="footer-links">
          <div>
            <span class="footer-label">EXPLORE</span>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/features">Features</RouterLink>
            <RouterLink to="/#how-it-works">How It Works</RouterLink>
            <RouterLink to="/pricing">Pricing</RouterLink>
          </div>
          <div>
            <span class="footer-label">MYFITAI</span>
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </div>
        </div>
        <div class="footer-social">
          <span class="footer-label">FOLLOW ALONG</span>
          <div>
            <a href="https://instagram.com" aria-label="Instagram"><Camera :size="16" /></a>
            <a href="https://youtube.com" aria-label="YouTube"><Play :size="16" /></a>
            <RouterLink to="/contact" aria-label="Contact MyFitAI"><ArrowUpRight :size="16" /></RouterLink>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 MyFitAI. All rights reserved.</span>
        <span>Made by <a href="https://github.com/devakbarjon/" target="_blank" rel="noopener noreferrer">Akbar</a> <i aria-hidden="true">✳</i></span>
      </div>
    </div>
  </footer>
</template>
