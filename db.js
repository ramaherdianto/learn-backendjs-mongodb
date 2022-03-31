// FIle ini digunakan untuk menghubungkan ke database mongodb

// deklarasi menggunakan mongoose / memanggil package mongoose
const mongoose = require("mongoose");

// Setting koneksi mongodb pada port 27017 (port default MongoDB) dengan database db_buku
mongoose.connect("mongodb://localhost:27017/db_buku");

// Menghubungkan MongoDB dengan setting sesuai poin2. Bila berhasil (open) akan menampilkan "Koneksi database berhasil pada terminal"
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi database gagal. ."));

db.once("open", () => {
  console.log("Koneksi database berhasil!");
});
