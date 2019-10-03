const axios = require('axios');

async function getExchangeRate() {
    let days = new Date();
    const dates = new Array(7).fill(0).map(() => {
        days.setDate(days.getDate() - 1);
        return `${days.getDate()}.${days.getMonth()}.${days.getFullYear()}`;
    });
    let requests = [];
    let exchangeRates = [];
    try {
        for (let date of dates) {
            requests.push(axios.get('https://api.privatbank.ua/p24api/exchange_rates?json&date=' + date))
        }
        exchangeRates = (await Promise.all(requests)).map(res => res.data);
    } catch (e) {
        throw e;
    }
    return exchangeRates;
}

getExchangeRate().then(res => console.log(res)).catch(err => console.log(err.message));
