<script setup lang="ts">

const itemName1 = 'Desk'
const itemName2 = 'Bike'

const price1 = 40000
const price2 = 20000

const url1 = 'https://www.amazon.co.jp/ref=nav_logo'

const buy = (itemName: string) => {
    alert('Are you sure to buy ' + itemName + '?')
}

const input = (event: any) => {
    console.log('evnet: ', event.target.value)
}

</script>

<template>
    <div class="container">
        <h1>Payment</h1>
        <input v-on:input="input" />
        <!-- @inputも可 -->
        <div class="payment">
            <label>{{ itemName1 }}</label>
            <label>{{ price1 }} yen</label>
            <!-- scriptの変数を使うため、v-bindを使用する必要がある -->
            <a v-bind:href="url1">bought at...</a>
            <button v-on:click="buy(itemName1)">Buy</button>
            <button @click="buy(itemName1)">Buy2</button>
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

label {
    font-size: 20px;
    font-weight: bold;
}
</style>