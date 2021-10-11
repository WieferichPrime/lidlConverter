<template>
    <select v-model="selected" @change="onChange">
        <option v-for="option in options" :key="option.id" :value="option.value">{{option.text}}</option>
    </select>
</template>

<script>
export default {
    name: "SelectValue",
    props: {
        selectedValue: {
            type: String,
            default: 'usd'
        },
    },
    data() {
        return {
            selected : this.selectedValue,
            options: [
                { text: 'BTC', value: 'btc' , id: 'bitcoin'},
                { text: 'ETH', value: 'eth' , id: "ethereum"},
                { text: 'USD', value: 'usd' , id: "usd"}
            ]
        }
    },
    methods: {
        onChange(event) {
            const from = this.options.find(option => option.value === event.target.value).id;
            this.$emit('change', { value: event.target.value.toLowerCase(), id: from});
        }
    },

}
</script>

<style scoped>
    select {
        border: none;
        outline: none;
        font-size: 30px;
        color: #011526;
    }
    option {
        font-size: 30px;
        color: #011526;
        border-radius: 15px;
    }
</style>