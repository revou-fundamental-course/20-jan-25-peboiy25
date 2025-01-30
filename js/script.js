// Ambil elemen form dan elemen hasil
const form = document.getElementById('bmiForm');
const result = document.getElementById('result');

// Tambahkan event listener untuk form submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah halaman di-reload

    // Ambil nilai input dari form
    const weight = parseFloat(document.getElementById('input-berat-badan').value);
    const heightInCm = parseFloat(document.getElementById('input-tinggi-badan').value);
    const age = parseInt(document.getElementById('input-usia').value);
    const gender = document.getElementById('input-gender').value;

    // Validasi input
    if (isNaN(weight) || weight <= 0 || isNaN(heightInCm) || heightInCm <= 0 || isNaN(age) || age <= 0 || !gender) {
        result.innerHTML = '<p style="color: red;">Masukkan semua data yang valid!</p>';
        return;
    }

    // Konversi tinggi badan dari cm ke meter
    const heightInMeters = heightInCm / 100;

    // Hitung nilai BMI
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

    // Tentukan kategori berdasarkan BMI
    let category, explanation;
    if (bmi < 18.5) {
        category = 'Kurus';
        explanation = 'Anda berada dalam kategori kurus. Risiko kesehatan termasuk kekurangan gizi dan masalah kesehatan lainnya.';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
        explanation = 'Berat badan Anda normal. Pertahankan gaya hidup sehat!';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        explanation = 'Anda berada dalam kategori overweight. Risiko kesehatan termasuk diabetes dan penyakit jantung.';
    } else {
        category = 'Obesitas';
        explanation = 'Anda berada dalam kategori obesitas. Risiko kesehatan termasuk diabetes, penyakit jantung, dan masalah lainnya.';
    }

    // Tampilkan hasil BMI di halaman
    result.innerHTML = `
        <h3>Hasil BMI</h3>
        <p>BMI Anda: <strong>${bmi}</strong></p>
        <p>Kategori: <strong>${category}</strong></p>
        <p>Penjelasan: ${explanation}</p>
    `;
});