<script setup lang="ts">
import { Person } from './Persons.vue';

type Props = {
    person: Person[]
}

defineProps()

</script>

<template>
    <li v-for="person in person" :key="person.id" class="person-list">
        <span>name: {{ person.name }}</span>
        <span>age: {{ person.age }}</span>
        <button>
            <span>delete</span>
        </button>
    </li>
</template>

<style scoped>
</style>