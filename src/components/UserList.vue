<template>
    <div>
        <h1>Lista Utenti</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cognome</th>
                    <th>Nome</th>
                    <th>Età</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.cognome }}</td>
                    <td>{{ user.nome }}</td>
                    <td>{{ user.eta }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
    <br>
</template>


<script setup>

const { users } = defineProps({
    users: {
        type: Array,
        required: true
    }
});

</script>