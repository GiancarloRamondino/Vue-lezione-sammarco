<script setup>
import { ref } from 'vue';
let username = ref("");
let password = ref("");

// async function login(){
//     const payload = {
//         username: username,
//         password: password
//     }
//     try {
//         const response = fetch("http://localhost:8080", 
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(payload)
//         })

//         if (!response.ok) {
//             throw new Error(`Errore del server: ${response.status}`);
//         }

//         // 4. Leggiamo i dati inviati dal server (es. un token JWT)
//         const data = await response.json();

//         if (data.token) {
//             // 5. Salviamo il token nel localStorage
//             localStorage.setItem("user_token", data.token);
            
//             // Opzionale: puoi salvare anche altre info non sensibili, come il nome utente
//             localStorage.setItem("username", payload.username);

//             alert("Login effettuato con successo!");
//             // Qui puoi reindirizzare l'utente (es. router.push('/dashboard'))
//         } else {
//             alert("Login fallito: token non ricevuto.");
//         }

//     } catch (error) {
//         console.error("Errore durante il login:", error);
//         alert("Si è verificato un errore durante l'accesso. Riprova.");
//     }
// }

async function login(){
    const response = await fetch("http://localhost:8080");
    console.log(response);
}

</script>


<template>
    <form>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click.prevent="login">Login</button>
    </form>
</template>