const axios = require('axios');

async function getExchangeRate() {
    let days = new Date();
    const dates = new Array(7).fill(0).map(() => {
        days.setDate(days.getDate() - 1);
        return `${days.getDate()}.${days.getMonth()}.${days.getFullYear()}`;
    });
    let requests = [];
    for (let date of dates) {
        requests.push(axios.get('https://api.privatbank.ua/p24api/exchange_rates?json&date=' + date))
    }
    const exchangeRates = (await Promise.all(requests)).map(res => res.data);
    return exchangeRates;
}

getExchangeRate();
