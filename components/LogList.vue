<template>
  <div>
    <h4 class="font-500 text-sm">Logs:</h4>
    <div v-for="log in data">
      <Log :data="log" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Log } from "../types";

defineProps<{
  data: Log[];
}>();
</script>
