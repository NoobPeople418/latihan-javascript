function pekerjaan() {
  const listPekerjaan = [
    { nama: "guru" },
    { nama: "dokter" },
    { nama: "hakim" },
    { nama: "musisi" },
    { nama: "pilot" },
    { nama: "sopir" },
    { nama: "masinis" },
    { nama: "petani" },
    { nama: "nelayan" },
    { nama: "Software Developer" }
  ];

  // console.log("1.", listPekerjaan[0].nama);
  // console.log("2.", listPekerjaan[1].nama);
  // console.log("3.", listPekerjaan[2].nama);
  // console.log("4.", listPekerjaan[3].nama);
  // console.log("5.", listPekerjaan[4].nama);
  // console.log("6.", listPekerjaan[5].nama);
  // console.log("7.", listPekerjaan[6].nama);
  // console.log("8.", listPekerjaan[7].nama);
  // console.log("9.", listPekerjaan[8].nama);
  // console.log("10.", listPekerjaan[9].nama);
  //
  return listPekerjaan;
}

pekerjaan();

const listkar = pekerjaan();

listkar.map((data, index) => {
  console.log((index + 1) + ". Nama Pekerjaan: " + data.nama);
});
