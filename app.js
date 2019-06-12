// elementleri seçme
const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstSelected");
const secondSelect = document.querySelector("#secondSelected");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);
eventListeners();

function eventListeners() {
    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.ilkDegisen();
    };
    secondSelect.onchange = function () {
        currency.changeSecondCurrency(firstSelect.options[secondSelect.selectedIndex].textContent);
        ui.ikinciDegisen();
    };
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value);

    currency.exchange()
        .then(result => {
            ui.displayResult(result);
            
        })
        .catch(err => console.log(err));
        
};