<script setup lang="ts">

</script>

<template>
    <div class="container">
        <h1>最近の支出</h1>
        <div class="payment">
            <label>カレーライス</label>
            <label>400円</label>
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
}

label {
    font-size: 20px;
    font-weight: bold;
}
</style>