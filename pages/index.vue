<script lang="ts" setup>
import type { Profile, BestPayingClient, BestProfession } from "../types";

definePageMeta({
  middleware: "auth",
});

let profile = useState<Profile>("profile");

const bestPayingClients = ref<BestPayingClient[]>();
let bestProfession = ref<BestProfession>();

onMounted(() => {
  updateBestPayingClients();
  updateBestProfession();
});

const updateBestPayingClients = async () => {
  const { data } = await useFetch<BestPayingClient[]>(
    `/api/admin/best-clients?start=2020-01-11&end=2032-08-12`
  );

  if (data && data.value) {
    bestPayingClients.value = data.value;
  }
};

const updateBestProfession = async () => {
  const { data } = await useFetch<BestProfession>(
    `/api/admin/best-profession?start=2020-01-11&end=2032-08-12`
  );

  if (data && data.value) {
    bestProfession.value = data.value;
  }
};

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};
</script>

<template>
  <div>
    <h1 class="text-3xl font-sans">
      {{ getGreeting() }}, {{ profile && profile.firstName }}!
    </h1>

    <div class="grid grid-cols-2 gap-4">
      <div class="border rounded-lg bg-white p-6 mt-10 text-sm">
        <h2 class="font-600">Hello,</h2>
        <p>
          please click on the
          <span class="rounded-full bg-teal-300 px-2 text-xs p-1 w-6 h-6"
            >teal</span
          >
          circle to switch the <i>profile_id</i> and simulate a different user.
        </p>
      </div>
      <div
        class="border flex justify-between rounded-lg bg-white p-6 mt-10 text-sm"
      >
        <div class="font-600">Balance</div>
        <div>${{ profile.balance }}</div>
      </div>

      <Dashboard-BestPayingClients :data="bestPayingClients" />
      <Dashboard-BestProfession :data="bestProfession" />
    </div>
  </div>
</template>
