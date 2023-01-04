<template>
  <div class="flex font-menu">
    <aside class="flex flex-col w-xs px-4 py-2">
      <div class="flex justify-between mt-5 items-center">
        <Logo class="w-17 h-10" />
        <button
          @click="handleProfileChangeClick"
          class="rounded-full bg-teal-300 text-xs p-1 w-6 h-6 active:teal-600"
        >
          {{ loggedProfileId }}
        </button>
      </div>
      <div class="text-xs text-gray-400 font-normal leading-4">
        <div class="capitalize">{{ profile.type }}</div>
        <div class="lowercase">{{ profile.firstName }}@deel.com</div>
      </div>

      <nav class="mt-3 text-gray-900 text-xs">
        <MenuItem href="/" title="Home" />
        <MenuItem href="/contracts" title="Contracts" />
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

const loggedProfileId = useState("profileId", () => "1");
const profile = useState("profile", () => "");

const handleProfileChangeClick = async () => {
  let profileId = Number(loggedProfileId.value);
  if (profileId >= 6) profileId = 1;
  else profileId++;
  loggedProfileId.value = profileId.toString();

  const { data } = await useFetch("/api/profiles/me", {
    headers: {
      profile_id: loggedProfileId.value,
    },
  });

  profile.value = data.value;
};
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
