<template>
	<div
		class="w-[30vw] bg-slate-700 h-[calc(100vh_-_100px)] rounded-l-2xl fixed top-[60px] ease duration-300 flex flex-col justify-between py-8"
		:class="{
			'left-full opacity-0': !store.cartOpen,
			'left-[calc(100%_-_30vw)] opacity-100': store.cartOpen,
		}"
	>
		<div>
			<h2 class="text-center text-white font-semibold text-3xl mt-5">
				Корзина
			</h2>
			<div class="flex flex-col gap-y-4 w-4/5 mx-auto mt-12">
				<CartItem
					v-for="product in products"
					:key="product.id"
					:product="product"
				/>
			</div>
		</div>
		<div class="text-center text-3xl text-white">
			In total: <span class="text-green-300">{{ total() }} $</span>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import CartItem from './CartItem.vue'

const store = useCounterStore()

function total() {
	return store.cart.reduce((acc, cur) => acc + cur.price, 0)
}

const products = store.cart
</script>
