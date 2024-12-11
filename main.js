const khodamList = [
    'Macan pemarah',
    'Buaya sunda',
    'Beruang sunda',
    'Harimau birahi',
    'Tutup odol',
    'Tutup panci',
    'Kaleng kejepit',
    'Kanebo kering',
    'Kapal karam',
    'Gergaji mesin',
    'Nyi blorong',
    'Jin rawa rontek',
    'Kucing Israel',
    'Capung gila',
];

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * khodamList.length);
    return khodamList[randomIndex];
}

function cekKhodam() {
    const name = getRandomName();
    const resultDiv = document.getElementById('result');

    // Logika untuk menentukan hasil
    if (name) {
        resultDiv.innerHTML = `Selamat nama khodam kamu adalah ${name} .`;
    } else {
        resultDiv.innerHTML = 'kamu tidak punya khodam.';
    }
}