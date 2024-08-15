<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>{{ name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(selection, index) in selections" :key="index">
                    <td>{{ selection }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    name: {
        required: true,
        type: String
    },
    selections: {
        required: true,
        type: Array<String>
    }
})

</script>

<style scoped></style>