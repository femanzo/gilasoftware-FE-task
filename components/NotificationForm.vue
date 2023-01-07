<template>
  <div class="border rounded-lg bg-white p-6 text-sm">
    <h2 class="font-600 mb-2">Notification Form</h2>
    <p class="text-slate-400 mb-2">
      Send a notification to all users subscribed to the selected categories.
    </p>
    <form v-if="sending === false">
      <textarea
        required
        v-model="message"
        placeholder="Notification Message"
        class="w-full border rounded p-2"
      />
      <div class="flex gap-2 justify-between items-center p-2">
        <div class="flex gap-1">
          <input
            type="checkbox"
            id="movies"
            value="Movies"
            v-model="categories"
          />
          <label for="movies">Movies</label>
        </div>
        <div class="flex gap-1">
          <input
            type="checkbox"
            id="finance"
            value="Finance"
            v-model="categories"
          />
          <label for="finance">Finance</label>
        </div>
        <div class="flex gap-1">
          <input
            type="checkbox"
            id="sports"
            value="Sports"
            v-model="categories"
          />
          <label for="sports">Sports</label>
        </div>

        <button
          :disabled="categories.length === 0 || message.length === 0"
          type="button"
          :class="{
            enabled: categories.length > 0 && message.length > 0,
            disabled: categories.length === 0 || message.length === 0,
          }"
          @click="sendNotification"
          class="px-2 py-1 rounded"
        >
          Send
        </button>
      </div>
    </form>
    <div v-else class="text-slate-400">
      <p>sending notification...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sending = ref(false);
const message = useState("message", () => "");
const categories = useState("categories", () => []);

const emit = defineEmits(["sent"]);

const sendNotification = async () => {
  sending.value = true;

  const { data } = await useFetch("/api/admin/notification/send", {
    method: "POST",
    body: JSON.stringify({
      message: message.value,
      categories: categories.value,
    }),
  });

  if (data && data.value) {
    message.value = "";
    categories.value = [];
  }

  setTimeout(() => {
    sending.value = false;
    emit("sent");
  }, 800);
};
</script>

<style>
.disabled {
  background-color: #f0f0f0 !important;
}
.enabled {
  background-color: #f8cb8f !important;
}
</style>
