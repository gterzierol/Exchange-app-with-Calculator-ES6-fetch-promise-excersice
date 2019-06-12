class Currency {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
        this.url = "https://api.exchangeratesapi.io/latest?base=";

        this.amount = null;
    }

    exchange() {

        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstSelect)
                .then(response => response.json())
                .then(data => {
                    const birim = data.rates[this.secondSelect]
                    const amount2 = Number(this.amount);

                    let total = birim * amount2;

                    resolve(total)


                })
                .catch(err => reject(err));

        });

    }
    changeAmount(amount) {
        this.amount = amount;

    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstSelect = newFirstCurrency;

    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondSelect = newSecondCurrency;
    }
}