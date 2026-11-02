<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const props = defineProps({
  variant: { type: String, default: "default" },
  size: { type: String, default: "default" },
  href: { type: String, default: undefined },
  to: { type: [String, Object], default: undefined },
  type: { type: String, default: "button" },
  class: { type: String, default: "" },
});

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-forest text-white hover:bg-[#123d2c]",
        outline: "border border-[#d7ddd5] bg-transparent text-ink hover:border-forest hover:text-forest",
        lime: "bg-lime text-[#123d2c] hover:bg-[#b6ef73]",
        ghost: "text-forest hover:bg-[#eff5e9]",
      },
      size: {
        default: "min-h-12 px-5 py-3",
        sm: "min-h-10 px-4 py-2 text-xs",
        lg: "min-h-14 px-6 py-4",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

const component = computed(() => (props.to ? RouterLink : props.href ? "a" : "button"));
const buttonClass = computed(() => cn(buttonVariants({ variant: props.variant, size: props.size }), props.class));
</script>

<template>
  <component :is="component" :to="to" :href="href" :type="component === 'button' ? type : undefined" :class="buttonClass">
    <slot />
  </component>
</template>
