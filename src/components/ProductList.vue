<script setup>
let showOnlyAvailable = true;
const products = [
    { id: 1, nome: "Scarpe Nike Air", prezzo: 150, inStock: true },
    { id: 2, nome: "Maglietta Adidas", prezzo: 45, inStock: true },
    { id: 3, nome: "Jeans Levi's", prezzo: 85, inStock: false },
    { id: 4, nome: "Orologio Casio", prezzo: 60, inStock: true },
    { id: 5, nome: "Zaino Eastpak", prezzo: 70, inStock: true },
    { id: 6, nome: "Cuffie Sony", prezzo: 120, inStock: false },
    { id: 7, nome: "Occhiali Ray-Ban", prezzo: 130, inStock: true },
    { id: 8, nome: "Portafoglio Pelle", prezzo: 40, inStock: true },
    { id: 9, nome: "Giacca Invernale", prezzo: 180, inStock: false },
    { id: 10, nome: "Smartphone Xiaomi", prezzo: 299, inStock: true }
];
</script>

<template>
    <div
      v-for="product in products"
      :key="product.id"
    >
    <div
        v-if="!showOnlyAvailable || product.inStock"
        class="product-div"
    >
        <div v-if="!showOnlyAvailable || product.inStock">
            <p>{{ product.nome }}</p>
            <p>{{ product.prezzo }}</p>
            <p class="blue" v-if="product.inStock">Disponibile</p>
            <p class="red" v-else>Esaurito</p>
        </div>

    </div>

    </div>
</template>

<style scoped>
    .product-div{
        margin-bottom: 20px;
        background-color: aquamarine;
        border-radius: 15px;
        border: 1px red solid;
        padding: 10px;
    }
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }
</style>