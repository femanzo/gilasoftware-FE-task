<template>
  <div class="bg-white rounded p-4 border" v-if="data">
    <h3 class="mb-2 font-500">Best clients</h3>
    <div class="text-sm" v-for="client in data">
      {{ client.fullName }}
      <div>${{ client.paid }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BestPayingClient } from "../../types";

defineProps<{
  data?: BestPayingClient[];
}>();
</script>
