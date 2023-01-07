<template>
  <div>
    <small>Message</small>
    <p>
      {{ data.message }} ({{ data.categories.map((c) => c.name).join(",") }})
    </p>
  </div>

  <LogList :data="data.logs" />
</template>

<script setup lang="ts">
import type { Notification } from "../types";
defineProps<{
  data: Notification;
}>();
</script>
