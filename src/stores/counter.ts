import { defineStore } from 'pinia'

interface Product {
	id: number
	title: string
	price: number
	quantity?: number
}

interface CounterState {
	count: number
	cart: Product[]
	cartOpen: boolean
}

export const useCounterStore = defineStore('counter', {
	state: (): CounterState => ({ count: 0, cart: [], cartOpen: false }),
	actions: {
		addToCart(product: Product) {
			this.cart.push({ ...product, quantity: 1 })
		},
		openCart() {
			this.cartOpen = true
		},
	},
})
