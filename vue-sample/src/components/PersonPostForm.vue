<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
const inputName = ref<string>('')
const inputAge = ref<number>(0)

const emit = defineEmits(['register'])

const register = () => {
    const person = { id: Math.random(), name: inputName.value, age: inputAge.value }
    console.log(person)
    emit('register', person)
}

const nameLengthLimit = 5
const isValidName = computed(() => {
    if (inputName.value.length >= nameLengthLimit) {
       return false
    } else {
        return true
    }
})

const color = computed(() => {
    return isValidName.value ? 'white' : 'rgb(244, 194, 190)'
})

</script>

<template>
    <div class="form-container">
        <div class="input-container">
            <div class="input-column">
                <span>name:</span>
                <input class="input-name" v-model="inputName"/>
            </div>
            <span class="error-text" v-show="!isValidName">{{ nameLengthLimit }} characters or less</span>
            <div class="input-column">
                <span>age:</span>
                <input class="input" v-model="inputAge" type="number"/>
            </div>
        </div>
        <div>
            <button :disabled="!isValidName" @click="register" class="register-button">register</button>
        </div>
    </div>
</template>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 241, 226);
    padding: 24px 0;
    width: 500px;
    margin-bottom: 12px;
    border-radius: 4px;
}

span {
    font-size: 20px;
    font-weight: bold;
}

.error-text {
    font-size: 10px;
    position: relative;
    bottom: 3px;
}

.input-column {
    widows: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

input {
    width: 150px;
}

.input-name {
    /* scriptの変数を使用する方法 */
    background-color: v-bind(color);
}

.input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 20px;
}

.register-button {
    position: relative;
    top: 15px;
}

button {
    color: white;
    font-weight: bold;
    background-color: #68c9c9;
    margin-top: 8px;
    border-radius: 2px;
    border: none;
    width: auto;
    height: auto;
}
button:hover {
    background-color: #37bdbd;
}
</style>