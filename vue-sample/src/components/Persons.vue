<script setup lang="ts">
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';
import { Ref, ref } from 'vue';

export type Person = {
    id: number,
    name: string,
    age: number,
}

// typeの書き方＋定義方法
const persons: Ref<Person[]> = ref([{id: 0, name: 'John', age: 24}, {id:1, name: 'mike', age: 27}])

const register = (person: Person) => {
    if (person.name == '') return
    if (person.age < 1) {
        alert('please insert a number larger than 0')
        return
    }
    persons.value.push(person)
}

const deletePerson = (id :number) => {
    persons.value = persons.value.filter(t => t.id !== id)
}

</script>

<template>
    <div class="container">
        <h1>title</h1>
        <PersonPostForm @register="register"/>
        <div class="list-container">
            <ul>
                <PersonList :persons="persons" @delete-person="deletePerson"/>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>