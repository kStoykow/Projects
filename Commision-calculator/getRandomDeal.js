function randomNumInRange(min, max) {
    return (Math.random() * (max - min) + min) / 100;
}

module.exports = randomNumInRange;