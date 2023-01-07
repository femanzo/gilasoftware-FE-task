<template>
  <div class="">
    <h3 class="my-2 font-500">Notification Logs:</h3>
    <div class="grid p-1 divided-y rounded gap-2">
      <div v-for="notification in data" class="p-2 border">
        <Notification :data="notification" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Notification } from "../types";

defineProps<{
  data: Notification[];
}>();
</script>
