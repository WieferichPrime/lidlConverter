<template>
    <div class="chart__list">
        <div class="charts__wrapper">
            <ChartItem
                v-for="chart in charts"
                :chartData="chart.chartData" :options="chart.options"
                :key=charts.indexOf(chart)
                :from="chart.from"
                :to="chart.to"
            ></ChartItem>
        </div>
    </div>
</template>

<script>
import Coingecko from "@/Services/coingecko";
import ChartItem from "@/components/ChartItem/ChartItem";

export default {
    name: "ChartList",
    components: {ChartItem},
    data() {
        return {
            coingecko: new Coingecko(),
            charts: []
        }
    },
    mounted() {
        this.getChart('bitcoin', 'usd');
        this.getChart('ethereum', 'usd');
    },
    methods: {
        async getChart(from, to) {
            await this.coingecko.getChart(from, to).then(({prices}) => {
                this.charts.push({
                    from:from,
                    to: to,
                    chartData: {
                        labels: prices.map( (price, i) => i),
                        datasets: [
                            {
                                label: 'Price',
                                data: prices.map( price => price[1].toFixed(2)),
                                borderColor: '#fff',
                                pointBackgroundColor: '#fff',
                                pointRadius: 0
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                display: true,
                                ticks: {
                                    fontColor: '#fff'
                                },
                                gridLines: {
                                    display: false
                                }
                            }],
                            xAxes: [{
                                display: false,
                                gridLines: {
                                    display: false
                                }
                            }]
                        },
                        responsive: true,
                        maintainAspectRatio: false
                    }
                })
            });
        }
    },
}
</script>

<style scoped>
    .charts__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>