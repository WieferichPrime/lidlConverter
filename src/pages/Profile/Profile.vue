<template>
    <div class="profile">

        <div class="profile__value">
            <div class="value__wrapper">
                <InputValue v-model="currentValue" @input="currentValue = $event"></InputValue>
                <SelectValue
                    :selectedValue ='selected'
                    @change="selected = $event.value;"
                ></SelectValue>
            </div>
            <div class="btns__wrapper">
                <Btn @click="add">Add</Btn>
                <Btn @click="remove">Remove</Btn>
            </div>
        </div>

        <div class="balance">
            <div class="balance__table">
                <h3>Your balance: {{total.toFixed(2)}}$</h3>
                <div class="balance__item" v-for="value in balance" :key="value.id">
                    <div class="balance__item_currency">{{value.id}}</div>
                    <div class="balance__item_value">{{value.count}}</div>
                </div>
            </div>
            <div class="balance__chart">
                <PieChart :chartData="pieData" :options="pieOptions"></PieChart>
            </div>
        </div>
    </div>
</template>

<script>
import InputValue from "../../components/InputValue/InputValue";
import SelectValue from "../../components/SelectValue/SelectValue";
import PieChart from "../../components/PieChart/PieChart";
import Btn from "../../components/Btn/Btn";
import Coingecko from "@/Services/coingecko";
export default {
    name: "Profile",
    components: {Btn, PieChart, SelectValue, InputValue},
    data() {
        return {
            coinGecko: new Coingecko(),
            balance: [
                {
                    id : 'btc',
                    count: 0,
                    usd: null
                },
                {
                    id : 'eth',
                    count: 0,
                    usd: null
                },
                {
                    id : 'usd',
                    count: 0,
                    usd: 1
                },
            ],
            pieData : null,
            pieOptions: {
                borderWidth: "10px",
                hoverBackgroundColor: "red",
                hoverBorderWidth: "10px",
                title: {
                    display: true,
                    text: 'Balance',
                    fontSize: 24,
                    fontColor: '#f9f9f9'
                },
                legend: {
                    labels: {
                        fontSize: 24,
                        fontColor: '#f9f9f9'
                    }
                },
                responsive: true
            },
            selected: '',
            currentValue: '',
            total: 0
        }
    },
    mounted() {
        this.balance.forEach( value => {
            if (value.id !== 'usd') {
                this.coinGecko.getPrice(value.id,'usd').then(res => value.usd = res.ticker.price);
            }
        })
        this.updatePie();
    },
    methods: {
        add() {
            this.balance.forEach(val => {
                if (val.id === this.selected && !Number.isNaN(Number(this.currentValue)) ) {
                    val.count += Number(this.currentValue);
                }
            });
            this.updatePie();
        },
        remove() {
            this.balance.forEach(val => {
                if (val.id === this.selected && !Number.isNaN(Number(this.currentValue))) {
                    val.count -= Number(this.currentValue);
                    if (val.count < 0 ) val.count = 0;
                }
            });
            this.updatePie();
        },
        updatePie() {
            this.total = this.balance.map(val => val.count * val.usd).reduce((a, b) => a+b);
            this.pieData = {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: this.balance.map(val => val.id),
                datasets: [
                    {
                        label: "Balance",
                        backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        data: this.balance.map(val => val.count * val.usd)
                    }
               ]
            }
        }
    },

}
</script>

<style scoped>
    .profile {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        min-height: 1000px;
    }
    .profile__value {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .value__wrapper {
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .balance {
        margin-top: 40px;
        align-self: stretch;
        display: flex;
        justify-content: space-between;
    }

    .balance__table {
        font-size: 26px;
        margin-top: 20px;
        display: table;
    }

    .balance h3 {
        margin-bottom: 20px;
    }

    .balance__item {
        display: table-row;
        text-align: left;
    }

    .balance__item_currency, .balance__item_value {
        padding:10px;
        display: table-cell;
        border-bottom: 2px solid #F9F9F9;
    }

    .btns__wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .btns__wrapper button:nth-child(2) {
        background-color: tomato;
    }
</style>