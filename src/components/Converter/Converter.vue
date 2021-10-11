<template>
    <div class="converter">
        <div class="converter__content">
            <form
                class="converter__item"
                v-for="currency in currencies"
                :key="currency.id"
            >
                <InputValue v-model="currency.value" @input="active=currency; currency.value = $event; onInputChange()"></InputValue>
                <SelectValue
                    :selectedValue ='currency.selected'
                    @change="currency.selected = $event.value;currency.description = $event.id;onInputChange()"></SelectValue>
            </form>
        </div>
    </div>
</template>

<script>
import SelectValue from "@/components/SelectValue/SelectValue";
import InputValue from "@/components/InputValue/InputValue";
import Coingecko from "@/Services/coingecko";
export default {
    name: "Converter",
    components: {InputValue, SelectValue},
    data() {
        return {
            coinGecko: new Coingecko(),
            currencies: [
                {
                    id : 0,
                    value: '',
                    selected : 'btc',
                    description: 'bitcoin'
                },
                {
                    id : 1,
                    value: '',
                    selected : 'usd',
                    description: 'usd'
                }
            ],
            active: {}
        }
    },
    methods: {
         onInputChange() {
            this.currencies.forEach( currency => {
                if (this.active.selected !== currency.selected) {
                    //this.coinGecko.getPrice(current.selected, currency.selected).then( res => currency.value = String(res[current.selected][currency.selected] * current.value));
                    this.coinGecko.getPrice(this.active.selected, currency.selected).then( res => currency.value = String(res.ticker.price * this.active.value));
                } else {
                     currency.value = this.active.value;
                }
            });
        }
    },

}
</script>

<style scoped>
    .converter__item {
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .converter {
        padding: 15px;
    }
    .converter__content {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }
</style>