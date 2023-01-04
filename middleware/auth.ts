export default defineNuxtRouteMiddleware(async (to, from) => {
  let selectedProfie = useState("profileId", () => "1");
  let profile = useState("profile");

  const { data, refresh } = await useLazyFetch(() => `/api/profiles/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    onRequest: async (context) => {
      context.options.headers = {
        profile_id: selectedProfie.value
          ? selectedProfie.value.toString()
          : "1",
      };
    },
  });

  profile.value = data.value;
});
