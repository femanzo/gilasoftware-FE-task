<template>
  <div class="grid divide-y">
    <div v-for="user in data">
      <User :data="user" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from "../types";

defineProps<{
  data: User[];
}>();
</script>
