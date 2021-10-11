<template>
    <div class="chart__item">
        <h3>{{this.from}} / {{this.to}}</h3>
        <line-chart :chartData="chartData" :options="options"></line-chart>
    </div>
</template>

<script>

import LineChart from "@/components/LineChart/LineChart";
export default {
    name: 'ChartItem',
    components: {LineChart},
    props: {
        chartData: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        },
        from: {
            type: String,
            default: '0'
        },
        to: {
            type: String,
            default: '0'
        },
    },
}
</script>

<style scoped>
    .chart__item {
        background-color: #0476D9;
        border-radius: 5px;
        padding: 20px;
        width: 450px;
    }
</style>