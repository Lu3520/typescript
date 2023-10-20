<script setup lang="ts">
import { ref } from 'vue';

const isActiveButton = ref<string>('')
const onClick = (buttonType: string) => {
    isActiveButton.value = buttonType
}

</script>

<template>
    <ul>
        <li>
            <button :class="{active: isActiveButton === 'bad'}" @click="onClick('bad')" type="button">Bad</button>
        </li>
        <li>
            <button :class="{active: isActiveButton === 'Average'}" @click="onClick('Average')" type="button">Average</button>
        </li>
        <li>
            <button :class="{active: isActiveButton === 'Great'}" @click="onClick('Great')" type="button">Great</button>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    margin: 0.5rem, 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid gray;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    size: 50px;
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.active {
    color: rgb(216, 88, 110);
}
</style>