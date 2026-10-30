
// JAVASCRIPT WEBSITE UMKM MIE ASOK

// Fungsi pemesanan WhatsApp
function pesan() {
    let nomor = "6281234567890";

    let pesan = "Halo Mie Asok! Saya ingin memesan makanan.";

    let url = "https://wa.me/" + nomor +
              "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}

// Notifikasi selamat datang
window.addEventListener("load", function() {
    console.log("Website UMKM Mie Asok berhasil dibuka!");
});

// Efek klik tombol
const tombol = document.querySelectorAll("button");

tombol.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Tombol berhasil diklik!");
    });
});

// Fungsi menampilkan pesan produk
function infoProduk(namaProduk, harga) {
    alert(
        "Produk: " + namaProduk +
        "\nHarga: Rp" + harga +
        "\nSilakan pesan melalui WhatsApp!"
    );
}

// Fungsi tahun otomatis pada footer
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>Copyright &copy; ${new Date().getFullYear()} UMKM Mie Asok</p>
        <p>Website Promosi Produk Lokal</p>
    `;
}

