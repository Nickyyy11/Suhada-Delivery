
// ===============================
// SUHADA DELIVERY - SCRIPT.JS
// ===============================


// ===============================
// WHATSAPP
// ===============================

const whatsappNumber = "6287840295950";

// Membuat emoji langsung dari Unicode
const waveEmoji = String.fromCodePoint(0x1F44B);

const whatsappMessage =
    `Halo Kak ${waveEmoji} Saya nemu Suhada Delivery dari website. Mau tanya untuk kirim barang nih, bisa dibantu?`;

const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const whatsappButtons = document.querySelectorAll(
    ".btn-whatsapp, .btn-primary, .btn-cta"
);

whatsappButtons.forEach((button) => {
    button.href = whatsappURL;
});




// 2. COPYRIGHT TAHUN OTOMATIS

const currentYear = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${currentYear} Suhada Delivery. All Rights Reserved.`;
}



// 3. NAVBAR EFFECT SAAT SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});