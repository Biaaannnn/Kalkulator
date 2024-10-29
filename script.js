document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heart");

    // Menunggu sampai animasi hati selesai (3 detik)
    heart.addEventListener("animationend", function () {
        document.body.classList.add("heart-disappeared");

        // Memulai animasi partikel hati
        generateParticles();

        // Memulai efek mengetik
        typeMessage("I love you, my sweet heart");
    });

    // Fungsi untuk membuat partikel hati
    function generateParticles() {
        const particlesContainer = document.querySelector(".particles-container");

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle-heart");
            
            // Random posisi dan delay animasi
            particle.style.left = Math.random() * 100 + "vw";
            particle.style.animationDelay = `${Math.random() * 3}s`;
            particle.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            particlesContainer.appendChild(particle);

            // Hapus elemen partikel setelah animasi selesai
            particle.addEventListener("animationend", () => {
                particle.remove();
            });
        }
    }

    // Fungsi untuk efek mengetik
    function typeMessage(text) {
        const messageElement = document.getElementById("typing-message");
        let index = 0;

        function type() {
            if (index < text.length) {
                messageElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Kecepatan mengetik (100ms per karakter)
            } else {
                // Menghapus kursor setelah teks selesai
                messageElement.style.borderRight = "none";
            }
        }

        // Mulai efek mengetik dan tampilkan pesan
        document.querySelector(".message-container").style.opacity = 1;
        type();
    }
});
