<template>
    <div
        class="w-screen h-fit min-h-[calc(100vh_-_60px)] flex flex-col justify-center items-center py-5"
    >
        <h2
            v-if="products.length"
            class="text-[32px] text-slate-100 font-semibold my-5"
        >
            Products:
        </h2>
        <div
            v-if="products.length"
            class="w-fit h-fit grid grid-cols-4 gap-y-10 gap-x-12"
        >
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
        <div
            v-else
            class="animate-spin border-b-4 border-l-4 border-b-slate-300 border-l-slate-300 border-t-transparent border-t-4 border-r-transparent border-r-4 w-[50px] h-[50px] rounded-[50%]"
        ></div>
    </div>
</template>

<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import { onMounted, ref, watchEffect } from "vue";

interface Products {
    id: number;
    images: Array<string>;
    title: string;
    description: string;
    price: number;
}

const products = ref<Products[]>([]);

watchEffect(() => {
    console.log(products);
});

function getData() {
    fetch("https://dummyjson.com/products")
        .then((resp) => resp.json())
        .then((json) => {
            console.log(json.products);
            products.value = json.products;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

onMounted(getData);
</script>
