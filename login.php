<?php

require_once 'koneksi.php';
// Ambil data dari form
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Siapkan statement SQL
$stmt = $conn->prepare("INSERT INTO dblogin (email, password) VALUES (?, ?)");

// Bind parameter
$stmt->bind_param("ss", $email, $password);

// Eksekusi dan cek apakah berhasil
if ($stmt->execute()) {
    header("Location: ");
    exit();
} else {
    echo "Terjadi kesalahan saat menyimpan data: " . $stmt->error;
}

// Tutup koneksi
$stmt->close();
$conn->close();
?>