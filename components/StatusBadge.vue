<template>
  <div
    class="flex px-2 rounded h-5 text-xs text-white justify-center items-center whitespace-nowrap"
    :class="{
      'bg-green-500': name === 'terminated' || name === 'paid',
      'bg-yellow-500': name === 'in_progress',
      'bg-blue-500': name === 'new',
      'bg-red-500': name === 'pending',
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
