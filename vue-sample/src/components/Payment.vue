<script setup lang="ts">
// import {ref, reactive} from 'vue'
import {reactive} from 'vue'

// Ref, Reactive：この変数が変わったら、templateに反映してねという関数です
// const itemName1 = ref<string>('Desk')
const itemName2 = 'Bike'

// Reactive is for object
const item1 = reactive({
    name: 'Desk',
    price: 40000
})

// const price1 = 40000
const price2 = 20000

const url1 = 'https://www.amazon.co.jp/ref=nav_logo'

const buy = (itemName: string) => {
    alert('Are you sure to buy ' + itemName + '?')
}

// const input = (event: any) => {
//     console.log('evnet: ', event.target.value)
//     // objectがconstでも中のvalueを変更することが可能
//     item1.name = event.target.value
// }

const inputPrice = (event: any) => {
    console.log('evnet: ', event.target.value)
    // objectがconstでも中のvalueを変更することが可能
    item1.price = event.target.value
}

// v-bind:value="item1.price"を使わないとinputの値は更新されない
// v-model：双方向バインド, v-modelを使うことで簡略に書くことができる
// v-model="変数名" == v-bind:value="変数名" + v-on:input="input"
const clear = () => {
    item1.name = ''
    item1.price = 0
}

const budget = 50000

</script>

<template>
    <div class="container">
        <h1>Payment</h1>
        <input v-model="item1.name"/>
        <!-- @inputも可 -->
        <input v-on:input="inputPrice" v-bind:value="item1.price"/>
        <button v-on:click="clear">Clear</button>
        <div class="payment">
            <label>{{ item1.name }}</label>
            <label>{{ item1.price > budget ? 'too expensive' : item1.price + 'yen'}}</label>
            <!-- <label>{{ item1.price }} yen</label> -->
            <!-- scriptの変数を使うため、v-bindを使用する必要がある -->
            <a v-bind:href="url1">bought at...</a>
            <button v-on:click="buy(item1.name)">Buy</button>
            <!-- <button @click="buy(itemName1)">Buy2</button> -->
        </div>
        <div class="payment">
            <label>{{ itemName2 }}</label>
            <label>{{ price2 }} yen</label>
        </div>
    </div>
</template>

<style scoped>
/* scopedを追加することで他のファイルに影響与えないようになる */
.container {
    /* Flexbox（フレックスボックス）は、要素を横に並べたり、縦に並べたりする為に使用するCSSになります */
    /* https://tatuking.com/flexbox/ */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.payment {
    display: flex;
    /* 要素の揃え位置を指定するプロパティ */
    /* space-between	アイテムの間にスペースを均等に割り付け */
    /* https://webukatu.com/wordpress/blog/18110/ */
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 400px;
    background-color: aliceblue;
    margin-bottom: 8px;
}

input {
    margin-bottom: 8px;
}

label {
    font-size: 20px;
    font-weight: bold;
}
</style>