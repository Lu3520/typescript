<script setup lang="ts">
import { ref } from 'vue'
import TweetPostForm from './TweetPostForm.vue';
import TweetList from './TweetList.vue';

const tweets = ref([{ id: 0, description: 'Hello World'}, { id: 1, description: 'this is the second'}])

const postTweet = (description: string) => {
    if(description == '') return
    // keyの名前とvalueの名前が一緒であれば：を省略できる
    const tweet = { id: tweets.value.length + 1, description }
    tweets.value.push(tweet)
}

const deleteTweet = (id: number) => {
    tweets.value = tweets.value.filter(t => t.id !== id)
}

</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <!-- post-tweetのvalueは引数として受け取る -->
    <TweetPostForm @post-tweet="postTweet"/>
    <!-- <div class="form-container">
        <input v-model="inputDescription" />
        <button class="save-button" @click="postTweet">post</button>
    </div> -->
    <div class="tweet-container">
        <!-- v-ifの切替のコストはv-showより高いがv-elseが使える -->
        <!-- <p v-if="tweets.length <= 0">No tweets have been added</p> -->
        <p v-show="tweets.length <= 0">No tweets have been added</p>
        <ul>
            <!-- keyを使う理由 -->
            <!-- https://reffect.co.jp/vue/v-bind-key-understand-by-developer-tool/#v-bindkey-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88 -->
            <!-- <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
                <span>{{ tweet.description }}</span>
                <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
            </li> -->
            <!-- PropsをTweetListに送る -->
            <!-- <TweetList :tweets="tweets" @delete-tweet="deleteTweet"/> -->
            <!-- 関数をpropsで伝播することもできるがVue公式の推進の書き方ではない -->
            <TweetList :tweets="tweets" :delete-tweet="deleteTweet"/>
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

/* .form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 500px;
  margin-bottom: 12px;
  border-radius: 4px;
} */

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

/* .save-button {
    color: white;
    font-weight: bold;
    background-color: #68c9c9;
    margin-top: 8px;
    border-radius: 2px;
    border: none;
    width: auto;
    height: auto;
} */

/* .delete-button {
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
} */

</style>