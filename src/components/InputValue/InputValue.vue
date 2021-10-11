<template>
    <input :value="value" placeholder="enter a value" @input = "$emit('input', $event.target.value)">
</template>

<script>
export default {
    name: "InputValue",
    props: {
        value: {
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped>
    input {
        border: none;
        outline: none;
        width: 200px;
        font-size: 24px;
        color: #011526;
    }
</style>