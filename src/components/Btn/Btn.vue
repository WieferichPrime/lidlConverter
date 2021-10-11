<template>
    <button @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
    name: "Btn"
}
</script>

<style scoped>
    button {
        cursor: pointer;
        font-size: 24px;
        background-color: #0476D9;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #F9F9F9;
    }

</style>