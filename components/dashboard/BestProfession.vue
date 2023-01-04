<template>
  <div
    class="bg-white rounded p-4 border items-center justify-between flex"
    v-if="data"
  >
    <h3 class="mb-2 font-500">Best Profession</h3>

    <div class="flex flex-col items-center justify-center">
      <div>{{ data.profession }}</div>
      <div class="text-2xl">${{ data.totalEarnings }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BestProfession } from "../../types";

defineProps<{
  data: BestProfession;
}>();
</script>
