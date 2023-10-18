<script setup lang="ts">
// 親Propsを使うためのライブラリ
import { defineProps, defineEmits } from 'vue';

// type定義
type Tweet = {
    id: number;
    description: string;
}

type Props = {
    tweets: Tweet[]
}

// Propsを受け取ることを宣言
defineProps<Props>()

const emit = defineEmits(['delete-tweet'])
const deleteTweet = (id: number) => {
    emit('delete-tweet', id)
}

</script>

<template>
    <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
        <span>{{ tweet.description }}</span>
        <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
    </li>
</template>

<style scoped>

.tweet-container {
    position: relative;;
    right: 20px;
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

.delete-button {
    position: relative;
    bottom: 5px;
    color: white;
    font-weight: bold;
    background-color: #c99a68;
    margin-top: 8px;
    border-radius: 2px;
    border: none;
    width: auto;
    height: 25px;
    font-size: 12px;
    align-items: center;
    align-content: center;
    text-align: center;
}

.delete-button:hover {
    background-color: #ac783f;
}

</style>