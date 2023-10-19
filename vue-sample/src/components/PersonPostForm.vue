<script setup lang="ts">
</script>

<template>
    <div class="form-container">
        <div class="input-container">
            <div class="input-column">
                <span>name:</span>
                <input class="input" />
            </div>
            <div class="input-column">
                <span>age:</span>
                <input class="input" />
            </div>
        </div>
        <button class="register-button">register</button>
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

.input-column {
    widows: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

input {
    width: 150px;
}

.input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 20px;
}
</style>