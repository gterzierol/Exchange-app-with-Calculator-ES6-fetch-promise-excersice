class UI {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
        

        this.ilkSecim = document.getElementById("firstChoose");
        this.ikinciSecim = document.getElementById("secondChoose");
        this.sonuc = document.getElementById("Result");
    }



    ilkDegisen() {
        this.ilkSecim.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }

    ikinciDegisen() {
        this.ikinciSecim.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
    }

    displayResult(result){
        this.sonuc.value = result;
    };
}