<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const inputDescription = ref<string>('')

const emit = defineEmits(['post-tweet'])
const postTweet = () => {
    // 子どものコンポーネントから親のコンポーネントに伝播
    emit('post-tweet', inputDescription.value)
    inputDescription.value = ''
    console.log(inputDescription.value)
}

</script>

<template>
    <div class="form-container">
        <input v-model="inputDescription" />
        <button class="save-button" @click="postTweet">post</button>
    </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 400px;
  margin-bottom: 12px;
  border-radius: 4px;
}

.save-button {
    color: white;
    font-weight: bold;
    background-color: #68c9c9;
    margin-top: 8px;
    border-radius: 2px;
    border: none;
    width: auto;
    height: auto;
}

.save-button:hover {
    background-color: #37bdbd;
}

</style>