// JavaScript untuk logika kalkulator
function appendDisplay(value) {
    const display = document.getElementById("display");
    
    // Mengatur +/- untuk mengubah tanda angka
    if (value === '±') {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
        return;
    }
    
    // Menambahkan nilai ke display
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

// Mengatur agar hasil selalu menampilkan "miss you my sweety girl"
function calculateResult() {
    document.getElementById("display").value = "miss you my sweety girl";
}
