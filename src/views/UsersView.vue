<script setup>
import UserForm from '@/components/UserForm.vue';
import UsersList from '@/components/UsersList.vue';
import { ref } from 'vue';

const users = ref([
    { id: 1, cognome:"Sammarco", nome:"Ignazio", eta: 54, email:"netsamma@gmail.com" },
    { id: 2, cognome:"Rossi", nome:"Mario", eta: 30, email:"mario.rossi@gmail.com" },
    { id: 3, cognome:"Bianchi", nome:"Luigi", eta: 25, email:"luigi.bianchi@gmail.com" },
    { id: 4, cognome:"Verdi", nome:"Giovanni", eta: 35, email:"giovanni.verdi@gmail.com" },
    { id: 5, cognome:"Ferrari", nome:"Marco", eta: 28, email:"marco.ferrari@gmail.com" },
    { id: 6, cognome:"Esposito", nome:"Antonio", eta: 45, email:"antonio.esposito@gmail.com" },
    { id: 7, cognome:"Romano", nome:"Andrea", eta: 32, email:"andrea.romano@gmail.com" },
    { id: 8, cognome:"Rizzo", nome:"Francesco", eta: 29, email:"francesco.rizzo@gmail.com" },
    { id: 9, cognome:"Gallo", nome:"Salvatore", eta: 41, email:"salvatore.gallo@gmail.com" },
    { id: 10, cognome:"Costa", nome:"Alessio", eta: 26, email:"alessio.costa@gmail.com" }
])

function addUser(data){

    // console.log({id:1, ...data});
    // Genera un ID univoco incrementale basato sull'ultimo elemento
    const nextId = users.value.length > 0 ? Math.max(...users.value.map(u => u.id)) + 1 : 1;
    
    // Aggiunge il nuovo utente creato dal form all'array reattivo
    users.value.push({
        id: nextId,
        ...data
    });
}
</script>

<template>
    <!-- CORREZIONE: L'evento viene ascoltato qui, dove viene effettivamente emesso -->
    <UserForm @add-user="addUser"></UserForm>
    
    <!-- La lista deve solo ricevere i dati aggiornati -->
    <UsersList :users="users"></UsersList>
</template>
