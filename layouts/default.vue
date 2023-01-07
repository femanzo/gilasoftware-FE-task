<template>
  <div class="flex font-menu">
    <aside class="flex flex-col w-xs px-4 py-2">
      <div class="flex justify-between mt-5 items-center">
        <Logo />
      </div>

      <nav class="mt-3 text-gray-900 text-xs">
        <MenuItem href="/" title="Home" />
      </nav>
    </aside>
    <div
      class="main-content dark:bg-dark bg-light w-full min-h-screen px-18 py-10 font-inter"
    >
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import "@unocss/reset/tailwind.css";
</script>

<style lang="postcss" global>
.main-content {
  background-color: #f4f3f6;
}

.menu-item {
  margin-top: 16px;
  box-sizing: border-box;
  fill: none;
  font-weight: 500;
  color: #01090f;
  padding: 6px 8px;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  transition: background-color 0.2s;
  font-size: 12px;
  line-height: 16px;
}

.menu-item:hover {
  background-color: #fafafa;
}

.menu-item-active div {
  background-color: #f4f3f6;
}
</style>
