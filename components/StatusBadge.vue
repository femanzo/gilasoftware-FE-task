<template>
  <div
    class="flex px-2 rounded h-5 text-xs text-white justify-center items-center whitespace-nowrap"
    :class="{
      'bg-green-500': name === 'sent',
      'bg-yellow-500': name === 'sending',
      'bg-red-500': name === 'failed',
    }"
  >
    {{ name.replace("_", " ") }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
