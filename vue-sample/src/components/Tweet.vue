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
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
        <input v-model="inputDescription" />
        <button class="save-button" @click="postTweet">post</button>
    </div>
    <div class="tweet-container">
        <ul>
            <!-- keyを使う理由 -->
            <!-- https://reffect.co.jp/vue/v-bind-key-understand-by-developer-tool/#v-bindkey-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88 -->
            <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
                <span>{{ tweet.description }}</span>
            </li>
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

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 500px;
  margin-bottom: 12px;
  border-radius: 4px;
}

.tweet-list{
    margin-bottom: 12px;
    border-radius: 4px;
    display: flex;
    list-style: none;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    background-color: rgb(204, 219, 233);
    padding: 8px, 20px;
    width: 400px;
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
</style>