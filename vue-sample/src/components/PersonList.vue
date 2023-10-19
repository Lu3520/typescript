<script setup lang="ts">
import { Person } from './Persons.vue';

type Props = {
    persons: Person[]
}

defineProps<Props>()

const emit = defineEmits(['delete-person'])

const onClickDelete = (id: number, name: string) => {
    if (confirm('Are you sure to delete ' + name + '?')) {
        emit('delete-person', id)
    }
}

</script>

<template>
    <li v-for="person in persons" :key="person.id" class="person-list">
        <span class="list-text">name: {{ person.name }}</span>
        <span class="list-text">age: {{ person.age }}</span>
        <button @click="onClickDelete(person.id, person.name)">
            <span>delete</span>
        </button>
    </li>
</template>

<style scoped>
.person-list {
    list-style: none;
    margin-bottom: 12px;
    border-radius: 4px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(228, 201, 133);
    padding: 8px 20px;
    width: 400px;
}

button {
    position: relative;
    bottom: 5px;
    color: white;
    font-weight: bold;
    background-color: #c99a68;
    margin-top: 8px;
    border-radius: 2px;
    border: none;
    font-size: 12px;
    align-items: center;
    align-content: center;
    text-align: center;
}

button:hover {
    background-color: #ac783f;
}
</style>