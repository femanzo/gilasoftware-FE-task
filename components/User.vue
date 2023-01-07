<template>
  <div class="p-1 text-sm my-2">
    <div class="font-500">{{ data.name }}</div>

    <div class="bg-slate-900 p-2 rounded text-white mb-2">
      <p>Subscriptions</p>
      <div class="flex gap-2 p-2">
        <label>
          <input type="checkbox" value="Movies" v-model="subscriptions" />
          Movies</label
        >

        <label>
          <input type="checkbox" value="Finance" v-model="subscriptions" />
          Finance</label
        >

        <label>
          <input type="checkbox" value="Sports" v-model="subscriptions" />
          Sports</label
        >
      </div>
    </div>

    <div class="bg-slate-900 p-2 rounded text-white">
      <p>Channels</p>
      <div class="flex gap-2 p-2">
        <label>
          <input type="checkbox" value="sms" v-model="channels" />
          SMS</label
        >

        <label>
          <input type="checkbox" value="email" v-model="channels" />
          E-mail</label
        >

        <label>
          <input type="checkbox" value="push" v-model="channels" />
          Push Notification</label
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from "../types";

const props = defineProps<{
  data: User;
}>();

const subscriptions = ref(props.data.subscribed.map((s) => s.name));
const channels = ref(props.data.channels.map((s) => s.name));

watch([subscriptions, channels], async () => {
  await useFetch("/api/user", {
    method: "PATCH",
    body: JSON.stringify({
      userId: props.data.id,
      categories: subscriptions.value,
      channels: channels.value,
    }),
  });
});
</script>
