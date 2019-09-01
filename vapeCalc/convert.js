function nicotineConvert() {
    let strength = Number(document.getElementById("nicotine").value);
    let milliliters = Number(document.getElementById("milliliters").value);
    let bottleValue = document.getElementsByName("bottleValue");

    let flavor = milliliters * (3.0 / 100);
    let nicotine = milliliters / 72 * strength;
    let flavorPrice = flavor * 2.1;
    let basePrice = (milliliters - flavor) * 0.09;
    let nicotinePrice = 0.9 * nicotine;
    let totalPrice = nicotinePrice + basePrice + flavorPrice;

    for (let i = 0; i < bottleValue.length; i++) {
        if (bottleValue[i].checked) {
            totalPrice += Number(bottleValue[i].value);
            break;
        }
    }

    totalPrice *= 1.2;
    document.getElementById("price").value = totalPrice.toFixed(2);
}