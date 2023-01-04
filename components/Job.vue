<template>
  <div class="bg-slate-100 p-2 rounded">
    <div class="flex justify-between">
      <div class="basis-4/5">
        <div class="font-800 text-slate-600 text-xs">Job Description</div>
        <div>{{ data.description }}</div>
      </div>
      <div
        id="payment-status"
        class="flex flex-col items-end justify-center gap-2 basis-1/5"
      >
        <div class="basis-1/3 w-full flex flex-col justify-end items-end">
          <div v-if="data.paid" class="flex flex-col gap-1">
            <StatusBadge name="paid"></StatusBadge>
            <small>{{ new Date(data.paymentDate).toLocaleString() }}</small>
          </div>
          <div v-else class="flex flex-col gap-2">
            <StatusBadge name="pending"></StatusBadge>
          </div>
          <div class="font-600 text-xl">${{ data.price }}</div>
        </div>
        <button
          @click="() => handlePayment(data.id)"
          v-if="!data.paid && profile.type === 'client'"
          class="underline text-xs"
        >
          pay now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Job, Profile } from "../types";
const props = defineProps<{
  data: Job;
}>();

let profile = useState<Profile>("profile");

const handlePayment = async (id: string) => {
  // optimistic update
  props.data.paid = true;

  try {
    const { data } = await useFetch(`/api/jobs/${id}/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        profile_id: profile.value.id,
      },
    });
  } catch (err) {
    console.log(err);
    props.data.paid = false;
  }
};
</script>
