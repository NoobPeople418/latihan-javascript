function daftarKaryawan() {
  const listKaryawan = [
    { nama: "Reza", posisi: "Chief Information Officer (CIO)", gaji: 45000000, tahunMasuk: 2018 },
    { nama: "Lutfi", posisi: "Cloud Infrastructure Architect", gaji: 25000000, tahunMasuk: 2020 },
    { nama: "Fania", posisi: "Cybersecurity Analyst", gaji: 14000000, tahunMasuk: 2022 },
    { nama: "Dika", posisi: "Solutions Architect", gaji: 22000000, tahunMasuk: 2019 },
    { nama: "Amel", posisi: "Database Administrator", gaji: 12500000, tahunMasuk: 2021 },
    { nama: "Bagas", posisi: "Network Engineer", gaji: 10500000, tahunMasuk: 2023 },
    { nama: "Indra", posisi: "Site Reliability Engineer", gaji: 18000000, tahunMasuk: 2021 },
    { nama: "Sari", posisi: "IT Project Manager", gaji: 16500000, tahunMasuk: 2020 },
    { nama: "Yudi", posisi: "Systems Analyst", gaji: 11000000, tahunMasuk: 2022 },
    { nama: "Maya", posisi: "IT Support Specialist", gaji: 7500000, tahunMasuk: 2023 }
  ];

  // console.log("1.", listKaryawan[0].nama, "bekerja sebagai", listKaryawan[0].posisi, "gaji", listKaryawan[0].gaji, "tahun masuk", listKaryawan[0].tahunMasuk);
  // console.log("2.", listKaryawan[1].nama, "bekerja sebagai", listKaryawan[1].posisi, "gaji", listKaryawan[1].gaji, "tahun masuk", listKaryawan[1].tahunMasuk);
  // console.log("3.", listKaryawan[2].nama, "bekerja sebagai", listKaryawan[2].posisi, "gaji", listKaryawan[2].gaji, "tahun masuk", listKaryawan[2].tahunMasuk);
  // console.log("4.", listKaryawan[3].nama, "bekerja sebagai", listKaryawan[3].posisi, "gaji", listKaryawan[3].gaji, "tahun masuk", listKaryawan[3].tahunMasuk);
  // console.log("5.", listKaryawan[4].nama, "bekerja sebagai", listKaryawan[4].posisi, "gaji", listKaryawan[4].gaji, "tahun masuk", listKaryawan[4].tahunMasuk);
  // console.log("6.", listKaryawan[5].nama, "bekerja sebagai", listKaryawan[5].posisi, "gaji", listKaryawan[5].gaji, "tahun masuk", listKaryawan[5].tahunMasuk);
  // console.log("7.", listKaryawan[6].nama, "bekerja sebagai", listKaryawan[6].posisi, "gaji", listKaryawan[6].gaji, "tahun masuk", listKaryawan[6].tahunMasuk);
  // console.log("8.", listKaryawan[7].nama, "bekerja sebagai", listKaryawan[7].posisi, "gaji", listKaryawan[7].gaji, "tahun masuk", listKaryawan[7].tahunMasuk);
  // console.log("9.", listKaryawan[8].nama, "bekerja sebagai", listKaryawan[8].posisi, "gaji", listKaryawan[8].gaji, "tahun masuk", listKaryawan[8].tahunMasuk);
  // console.log("10.", listKaryawan[9].nama, "bekerja sebagai", listKaryawan[9].posisi, "gaji", listKaryawan[9].gaji, "tahun masuk", listKaryawan[9].tahunMasuk);

  return listKaryawan;
}

const listkar = daftarKaryawan();

listkar.map((data, index) => {
  console.log((index + 1) + ". Nama: " + data.nama + ", Posisi: " + data.posisi + ", Gaji: " + data.gaji + ", Tahun Masuk: " + data.tahunMasuk);
});
