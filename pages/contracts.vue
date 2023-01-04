<script lang="ts" setup>
import type { Contract } from "../types";

definePageMeta({
  middleware: "auth",
});

let selectedProfie = useState("profileId", () => "1");

const { data, refresh } = await useLazyFetch<Contract[]>(
  () => `/api/contracts`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    onRequest: async (context) => {
      context.options.headers = {
        profile_id: selectedProfie.value.toString(),
      };
    },
  }
);

watch(selectedProfie, () => {
  refresh();
});
</script>

<template>
  <div>
    <h1>Contracts <small>(showing in_progress contracts only)</small></h1>
    <div class="flex flex-col gap-2">
      <div v-if="!data || data.length <= 0">
        <div class="p-4 text-center">
          <p class="text-xl m-5">No active contracts found.</p>
        </div>
      </div>
      <div v-for="contract in data" :key="contract.id">
        <Contract :data="contract" />
      </div>
    </div>
  </div>
</template>
