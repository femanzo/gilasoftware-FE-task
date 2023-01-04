<template>
  <nuxt-link :to="href" active-class="menu-item-active">
    <div class="flex items-center gap-2 menu-item p-px">
      <Icons-NavIcons :name="href" />
      <div>{{ title }}</div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  href: string;
}>();
</script>
