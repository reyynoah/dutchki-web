<?php

require_once 'koneksi.php';
// Ambil data dari form
$username = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$password = $_POST['password'] ?? '';

// Siapkan statement SQL
$stmt = $conn->prepare("INSERT INTO dbregis (username, email, phone, password) VALUES (?, ?, ?, ?)");

// Bind parameter
$stmt->bind_param("ssss", $username, $email, $phone, $password);

// Eksekusi dan cek apakah berhasil
if ($stmt->execute()) {
    header("Location: login.php");
    exit();
} else {
    echo "Terjadi kesalahan saat menyimpan data: " . $stmt->error;
}

// Tutup koneksi
$stmt->close();
$conn->close();
?>