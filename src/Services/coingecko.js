export default class Coingecko {
    getResource = async (url) => {
        return await fetch(url).then(res => res.json()).catch((res) => {throw new Error(res.status)})
    }

    getChart = (coin, value) => {
        return this.getResource(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${value}&days=14`);
    }

    getPrice = (from, to) => {
        return  this.getResource(`https://api.cryptonator.com/api/ticker/${from}-${to}`)
    }
}