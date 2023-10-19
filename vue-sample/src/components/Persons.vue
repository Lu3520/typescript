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

const register = (name: string, age: number) => {
    if (name == '') return
    if (typeof age != 'number') {
        alert('please insert number in age')
        return
    }
}

</script>

<template>
    <div class="container">
        <h1>title</h1>
        <PersonPostForm />
        <div class="list-container">
            <ul>
                <PersonList />
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