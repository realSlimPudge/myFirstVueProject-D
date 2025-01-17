<template>
	<div class="w-[250px] h-[350px] rounded-[12px] bg-slate-800 p-4">
		<p class="text-slate-200 text-center h-[60px] text-xl">
			{{ product.title }}
		</p>
		<div class="flex w-[200px] h-[200px] mx-auto overflow-x-auto space-x-2">
			<img
				class="w-full h-full object-cover flex-shrink-0"
				v-for="image in product.images"
				:src="image"
				:alt="product.title"
			/>
		</div>
		<div class="w-fit mx-auto mt-4">
			<button
				class="text-slate-200 bg-slate-900 py-1 px-3 rounded-md hover:bg-slate-700 ease duration-200"
				@click="store.addToCart(product)"
			>
				Buy {{ product.price }} $
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const { addToCart } = store

defineProps({
	product: {
		type: Object,
		required: true,
	},
})
</script>
