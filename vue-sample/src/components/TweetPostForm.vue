<script setup lang="ts">
import { ref } from 'vue'

const tweets = ref([{ id: 0, description: 'Hello World'}, { id: 1, description: 'this is the second'}])
const inputDescription = ref<string>('')

const postTweet = () => {
    if(inputDescription.value == '') return
    const tweet = { id: tweets.value.length + 1, description: inputDescription.value }
    console.log('inputDescription', inputDescription)
    tweets.value.push(tweet)
    inputDescription.value = ''
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