<script setup>
import { ref } from 'vue';
let username = ref("");
let password = ref("");


async function login(){
    const payload = {
        username: username.value,
        password: password.value
    }

    try {
        const response = await fetch("http://localhost:3000/api/login",{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok){
            throw new Error(`Errore del server ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if(data){
            localStorage.setItem("token", data)
            //localStorage.setItem("username", data.username)
        }
            
    } catch (error) {
        console.error("Errore", error)
    }

    
}

</script>


<template>
    <form>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click.prevent="login">Login</button>
    </form>
</template>