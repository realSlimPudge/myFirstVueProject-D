<template>
	<div
		class="bg-slate-500 w-full py-4 h-fit rounded-lg flex items-center justify-between px-5 ease duration-300 hover:ml-4"
	>
		<h3 class="text-white text-xl w-1/2">{{ product.title }}</h3>
		<span class="text-x text-white">{{ product.price }} $</span>
	</div>
</template>
<script setup lang="ts">
defineProps({
	product: {
		type: Object,
		requred: true,
	},
})
</script>
