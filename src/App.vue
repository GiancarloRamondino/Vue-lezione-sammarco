<script setup>
import { ref } from 'vue';
// const users = ref([
//     {
//         id: 1,
//         cognome: 'Sammarco',
//         nome: 'Ignazio',
//         eta: 54,
//         email: 'netsamma@gmail.com'
//     },
//     {
//         id: 2,
//         cognome: 'Rossi',
//         nome: 'Mario',
//         eta: 30,
//         email: 'mario.rossi@gmail.com'
//     },
//     {
//         id: 3,
//         cognome: 'Bianchi',
//         nome: 'Luigi',
//         eta: 25,
//         email: 'luigi.bianchi@gmail.com'
//     },
//     {
//         id: 4,
//         cognome: 'Verdi',
//         nome: 'Giovanni',
//         eta: 35,
//         email: 'giovanni.verdi@gmail.com'
//     },
//     {
//         id: 5,
//         cognome: 'Ferrari',
//         nome: 'Marco',
//         eta: 28,
//         email: 'marco.ferrari@gmail.com'
//     },
//     {
//         id: 6,
//         cognome: 'Esposito',
//         nome: 'Antonio',
//         eta: 45,
//         email: 'antonio.esposito@gmail.com'
//     },
//     {
//         id: 7,
//         cognome: 'Romano',
//         nome: 'Andrea',
//         eta: 32,
//         email: 'andrea.romano@gmail.com'
//     },
//     {
//         id: 8,
//         cognome: 'Rizzo',
//         nome: 'Francesco',
//         eta: 29,
//         email: 'francesco.rizzo@gmail.com'
//     },
//     {
//         id: 9,
//         cognome: 'Gallo',
//         nome: 'Salvatore',
//         eta: 41,
//         email: 'salvatore.gallo@gmail.com'
//     },
//     {
//         id: 10,
//         cognome: 'Costa',
//         nome: 'Alessio',
//         eta: 26,
//         email: 'alessio.costa@gmail.com'
//     }
// ]);

// const addUser = (user) => {
//     const nextId = users.value.length > 0
//         ? Math.max(...users.value.map((item) => item.id)) + 1
//         : 1;

//     users.value.push({
//         id: nextId,
//         ...user
//     });
// };
</script>

<template>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
    /* main{
        background-color: aliceblue;
    } */
</style>
