import { ref } from 'vue'

type Todo = {
    id: number,
    title: string,
}

const defaultTodos = [{id: 0, title: 'first'}, {id: 1, title: 'seconde'}]
// export const todos = ref<Todo[]>(defaultTodos)
// export const addTodo = (title: string) => {
//     const newTodo: Todo = {
//         id: Math.random(),
//         title,
//     }
//     todos.value.push(newTodo)
// }

//もっと簡易の書き方、todosだけをimportするだけでtodosとaddTodo()を受け取ることができるようになる。
export const todos = (() => {
    const todos = ref<Todo[]>(defaultTodos)
    
    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Math.random(),
            title,            
        }
        todos.value.push(newTodo)
    }

    return { todos, addTodo }

})()