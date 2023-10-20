<script setup lang="ts">
import { inject } from 'vue'
import { todoKey } from '../useTodo';

const state = inject(todoKey)
if(!state) {
  throw new Error('state is undefined')
}

// 型が識別できないという問題はInjectionKeyで解決できる
const { todos, addTodo: _addTodo } = state

// injectすることで値を受け取ることができる
// const todos = inject('todos')

// const _addTodo = inject('addTodo')
const addTodo = (title: string) => {
  _addTodo(title)
}

</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >{{ todo.title }}</li>
    </ul>
    <button @click="addTodo('add!')">Add</button>
  </div>
</template>

<style scoped>
</style>