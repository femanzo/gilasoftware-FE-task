<template>
  <Icons-HomeIcon class="nav-icon" v-if="name === '/'" />
  <Icons-ContractsIcon class="nav-icon" v-else-if="name === '/contracts'" />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="postcss">
.nav-icon {
  width: 24px;
  height: 24px;
}
</style>
