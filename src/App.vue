<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import CartAside from './components/CartAside.vue'
</script>

<template>
	<div class="bg-slate-950 h-fit w-screen relative">
		<TheHeader />
		<RouterView />
		<CartAside />
	</div>
</template>
