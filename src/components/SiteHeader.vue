<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { ArrowUpRight, Dumbbell, Menu, X } from "@lucide/vue";
import Button from "./ui/Button.vue";

const route = useRoute();
const menuOpen = ref(false);
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Pricing", to: "/pricing" },
];

watch(() => route.fullPath, () => {
  menuOpen.value = false;
});
</script>

<template>
  <header class="site-header">
    <nav class="nav-shell container" aria-label="Main navigation">
      <RouterLink class="brand" to="/" aria-label="MyFitAI home">
        <span class="brand-mark"><Dumbbell :size="21" :stroke-width="2.4" /></span>
        <span>MyFit<span class="brand-ai">AI</span></span>
      </RouterLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="20" />
        <Menu v-else :size="20" />
      </button>
      <div id="primary-menu" class="nav-menu" :class="{ open: menuOpen }">
        <div class="nav-links">
          <RouterLink v-for="link in navLinks" :key="link.label" :to="link.to">{{ link.label }}</RouterLink>
        </div>
        <div class="nav-actions">
          <RouterLink class="login-link" to="/contact">Contact</RouterLink>
          <Button to="/pricing" size="sm" class="button-small">
            Get Started <ArrowUpRight :size="14" />
          </Button>
        </div>
      </div>
    </nav>
  </header>
</template>
