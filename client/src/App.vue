<script setup>
import { ref } from "vue";
const isLoading = ref(false);
const handleSendMessage = (e) => {
  console.log(e);
  isLoading.value = true;
};
</script>

<template>
  <div class="sm:w-[640px] mx-auto grid place-items-center min-h-screen">
    <div
      class="bg-slate-800 border border-yellow-500 rounded-xl m-16 p-10 shadow-xl shadow-stone-900"
    >
      <h1 class="logo">जल्प</h1>
      <form class="mt-5 text-center" @submit.prevent="handleSendMessage">
        <textarea
          type="text"
          class="w-full border-2 border-slate-600 bg-transparent py-3 px-5 rounded-lg mb-5 focus:border-yellow-500 outline-none"
          placeholder="write your message"
        />
        <button type="submit" class="btn" :disabled="isLoading">send</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Gradient text */
h1.logo {
  background: linear-gradient(#f08821, #ffda56);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
