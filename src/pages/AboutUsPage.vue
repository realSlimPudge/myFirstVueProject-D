<template>
    <div
        class="flex items-center justify-center w-screen h-[calc(100vh_-_60px)]"
    >
        <button
            @click="store.$patch({ count: store.count + 1 })"
            class="bg-slate-700 px-10 py-8 rounded-xl text-slate-100 font-semibold text-2xl"
        >
            Clicked {{ store.count }} times!
        </button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
</script>
