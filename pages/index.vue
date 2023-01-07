<script lang="ts" setup>
import type { User, Log, Notification } from "../types";

let users = useState<User[]>("users");
let notifications = useState<Notification[]>("notifications");

onMounted(() => {
  getUsers();
  getNotifications();
});

const getUsers = async () => {
  const { data } = await useFetch<User[]>(`/api/admin/users`);

  if (data && data.value) {
    users.value = data.value;
  }
};

const getNotifications = async () => {
  const { data } = await useFetch<Notification[]>(
    `/api/admin/notification/logs`
  );

  if (data && data.value) {
    notifications.value = data.value;
  }
};
</script>

<template>
  <div>
    <h1 class="text-3xl font-sans">Notification System</h1>

    <div class="grid grid-cols-2 gap-4 mb-10">
      <NotificationForm @sent="getNotifications" />
      <UserList v-if="users" :data="users" />
    </div>

    <button
      class="border p-1 rounded bg-blue-500 text-white text-xs"
      @click="getNotifications"
    >
      Update Logs
    </button>
    <NotificationList v-if="notifications" :data="notifications" />
  </div>
</template>
