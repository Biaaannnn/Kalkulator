// JavaScript untuk logika kalkulator
function appendDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

// Modifikasi fungsi calculateResult agar hasilnya selalu "hi pretty girl"
function calculateResult() {
    document.getElementById("display").value = "i miss you, my sweetie girl";
}
