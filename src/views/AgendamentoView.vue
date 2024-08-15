<template>
    <div id="container">
        <sala-component v-for="(sala, index) in salas" :name="sala" :selections="horarios"
            :key="index"></sala-component>
    </div>
</template>

<script setup lang="ts">

import SalaComponent from '@/components/SalaComponent.vue';

const salas: string[] = ['Laboratório 1', 'Laboratório 2', 'Laboratório 3', 'Laboratório 4', 'Sala Maker']
const horarios: string[] = ['7h30-8h20', '8h20-9h10', '9h10-10h00', '10h-11h05', '11h05-11h55', '11h55-12h45']

</script>

<style scoped></style>