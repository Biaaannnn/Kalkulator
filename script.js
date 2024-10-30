const floatingText = document.getElementById("floatingText");

// Mulai animasi saat halaman dimuat
floatingText.classList.add("floating");

// Toggle animasi mengambang saat teks di-klik
floatingText.addEventListener("click", () => {
  floatingText.classList.toggle("floating");
});
