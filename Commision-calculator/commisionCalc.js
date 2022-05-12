// const getDealPrice = require('./getRandomDeal');
function solve() {
    function clickHandler(e) {
        e.preventDefault();
        let cents = {
            '0.01': 0,
            '0.02': 0,
            '0.03': 0,
            '0.04': 0,
            '0.05': 0,
            '0.06': 0,
            '0.07': 0,
            '0.08': 0,
            '0.09': 0,
            '0.10': 0,
            '0.11': 0,
            '0.12': 0,
            '0.13': 0,
            '0.14': 0,
            '0.15': 0,
            '0.16': 0,
            '0.17': 0,
        }

        let balance = document.getElementById('balance');
        const min = Number(balance.value) * 100 * 0.1;
        const max = (Number(balance.value) * 100 * 0.5) + 1;

        function getDealPrice(min, max) {
            return (Math.random() * (max - min) + min) / 100;
        }


        for (let i = 0; i < 1000000; i++) {
            let deal = (getDealPrice(min, max) * 0.0026).toFixed(2);
            if (deal < 0.01) {
                deal = 0.01
            }
            cents[deal]++;

        }
        function parse(arr, total) {
            let ul = document.getElementById('output');
            arr.map(e => {
                let li = document.createElement('li');
                li.textContent = `${e[0]} -> ${(e[1] / total * 100).toFixed(2)}%`;
                ul.appendChild(li);
            });
        }
        
        let total = Object.values(cents).reduce((a, b) => a + b);
        parse(Object.entries(cents).filter(e => e[1] != 0), total)
    }
    let btn = document.getElementById('btn');
    btn.addEventListener('click', clickHandler)
}

document.addEventListener('DOMContentLoaded', solve)