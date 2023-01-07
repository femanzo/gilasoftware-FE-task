<template>
  <div class="bg-slate-100 p-1 text-sm rounded">
    <div class="grid justify-items-stretch border p-1 bg-light-100 rounded">
      <div>{{ data.user.name }} ({{ data.channelName }})</div>
      <div>{{ new Date(data.updatedAt).toLocaleString() }}</div>
      <div v-if="data.error" class="text-red-600">
        {{ data.error }}
      </div>
      <div class="w-20 justify-self-end">
        <StatusBadge :name="data.status" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Log } from "../types";
defineProps<{
  data: Log;
}>();
</script>
