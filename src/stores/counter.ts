import { defineStore } from "pinia";

interface Product {
    id: number;
    title: string;
    price: number;
    quantity?: number;
}

interface CounterState {
    count: number;
    cart: Product[];
}

export const useCounterStore = defineStore("counter", {
    state: (): CounterState => ({ count: 0, cart: [] }),
    actions: {
        addToCart(product: Product) {
            this.cart.push({ ...product, quantity: 1 });
        },
    },
});
