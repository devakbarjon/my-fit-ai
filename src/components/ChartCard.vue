<script setup>
import { computed } from "vue";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler);

const props = defineProps({
  type: { type: String, default: "line" },
  compact: { type: Boolean, default: false },
});

const labels = computed(() => (props.type === "bar"
  ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  : ["Week 1", "Week 2", "Week 3", "Week 4"]));

const data = computed(() => ({
  labels: labels.value,
  datasets: [{
    data: props.type === "bar" ? [35, 55, 10, 70, 18, 48, 5] : [64, 64.5, 65, 65.8],
    backgroundColor: props.type === "bar" ? "#a5e65a" : "rgba(165, 230, 90, 0.13)",
    borderColor: "#75a950",
    borderWidth: 2,
    pointRadius: props.type === "bar" ? 0 : 3,
    pointBackgroundColor: "#174d36",
    pointBorderColor: "#ffffff",
    pointBorderWidth: 2,
    borderRadius: props.type === "bar" ? 5 : 0,
    fill: props.type !== "bar",
    tension: 0.38,
  }],
}));

const options = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 650 },
  plugins: { legend: { display: false }, tooltip: { displayColors: false } },
  scales: {
    x: { grid: { display: false }, border: { display: false }, ticks: { color: "#90998f", font: { size: props.compact ? 8 : 10 } } },
    y: {
      display: props.type !== "bar",
      min: 63.5,
      max: 66.5,
      grid: { color: "#edf0eb" },
      border: { display: false, dash: [3, 3] },
      ticks: { color: "#90998f", font: { size: 9 }, maxTicksLimit: 4 },
    },
  },
}));
</script>

<template>
  <div class="chart-canvas">
    <Line v-if="type === 'line'" :data="data" :options="options" />
    <Bar v-else :data="data" :options="options" />
  </div>
</template>
