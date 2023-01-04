<template>
  <div class="p-2 bg-white border rounded-lg text-sm antialiased">
    <div class="flex items-start justify-between">
      <div id="contract-info">
        <div class="font-600 text-slate-900 text-xs">Contract Description</div>
        <div id="contract-description" class="font-200 py-2">
          {{ data.terms }}
        </div>

        <div id="contractor-info">
          <div class="font-400 text-xs">Contractor</div>
          <div class="font-300">
            {{ `${data.contractor.firstName} ${data.contractor.lastName}` }}
          </div>
        </div>

        <div id="client-info">
          <div class="font-400 text-xs">Client</div>
          <div class="font-300">
            {{ `${data.client.firstName} ${data.client.lastName}` }}
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-end gap-1">
        <StatusBadge :name="data.status"></StatusBadge>
        <div class="flex flex-col items-end">
          <small
            >Created at
            {{ new Date(data.createdAt).toLocaleString() }}
          </small>
          <small
            >Last update
            {{ new Date(data.updatedAt).toLocaleString() }}
          </small>
        </div>
      </div>
    </div>
    <hr class="my-2" />
    <div class="flex flex-col gap-2">
      <div v-for="job in data.jobs" :key="job.id">
        <Job :data="job" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Contract } from "../types";

defineProps<{
  data: Contract;
}>();
</script>
