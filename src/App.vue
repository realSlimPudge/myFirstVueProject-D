<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
    <div class="bg-slate-950 h-fit w-screen">
        <TheHeader />
        <RouterView />
    </div>
</template>
