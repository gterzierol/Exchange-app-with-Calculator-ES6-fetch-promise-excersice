let number = "";
let FirstNumber = "";
let islem = "";
let ans = "";

//Klavye Eventleri
// document.addEventListener("keydown", keydown)




// On tuşunun çalışması için
function buttonOn() {
    document.getElementById("screen").value = "0";
}
// Off tşunun çalışması için
function buttonOff() {
    number = "";
    document.getElementById("screen").value = "";
}
// C(clear) tuşunun çalışması için
function ClearAll() {
    number = "";
    document.getElementById("screen").value = "0";
}

// Sadece son sayıyı silmek için
function revButton() {
    numberRev = number.toString();
    numberRev = number.substring(0, number.length - 1)
    number = Number(numberRev);
    document.getElementById("screen").value = number;
}
// Nokta İşareti için
function dot() {
    number = number + ".";
    document.getElementById("screen").value = number;
}
// Çıkarma işareti için
function subtraction() 
{
    FirstNumber = Number(number);
    number = "";
    islem = "-";
}
//Toplama İşareti için
function collection() 
{
    FirstNumber = Number(number);
    number = "";
    islem = "+";
}
//Çarpma işlemi için
function multiplication() 
{
    FirstNumber = Number(number);
    number = "";
    islem = "x";
}
//Bölme işlemi için
function division() 
{
    FirstNumber = Number(number);
    number = "";
    islem = "/";
}

// Sayıları yazabilmek için
function writeNum(x) 
{
    number = number + x;
    document.getElementById("screen").value = number;
}

function equal() 
{
    FirstNumber = Number(FirstNumber);
    number = Number(number);

    if (islem === "+") 
    {
        ans = FirstNumber + number;
        document.getElementById("screen").value = ans;
    } else if (islem === "-") {
        ans = FirstNumber - number;
        document.getElementById("screen").value = ans;
    } else if (islem === "x") {
        ans = FirstNumber * number;
        document.getElementById("screen").value = ans;
    } else if (islem === "/") {
        ans = FirstNumber / number;
        document.getElementById("screen").value = ans;
    }
    number = ans;
}