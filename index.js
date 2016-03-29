function investmentValue (invested, changes) {
    return changes.reduce(function(sum, i) {
        return sum * (1 + (i/100));
    }, invested).toFixed(2)
}

module.exports = investmentValue;
