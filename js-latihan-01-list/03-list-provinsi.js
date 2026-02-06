function provinsi() {
  const listProvinsi = [
    { nama: "jawa barat" },
    { nama: "kalimantan" },
    { nama: "sumatera utara" },
    { nama: "sulawesi selatan" },
    { nama: "bali" },
    { nama: "papua" },
    { nama: "banten" },
    { nama: "daerah istimewa yogyakarta" },
    { nama: "nusa tenggara timur" },
    { nama: "maluku" }
  ];

  // console.log("1.", listProvinsi[0].nama);
  // console.log("2.", listProvinsi[1].nama);
  // console.log("3.", listProvinsi[2].nama);
  // console.log("4.", listProvinsi[3].nama);
  // console.log("5.", listProvinsi[4].nama);
  // console.log("6.", listProvinsi[5].nama);
  // console.log("7.", listProvinsi[6].nama);
  // console.log("8.", listProvinsi[7].nama);
  // console.log("9.", listProvinsi[8].nama);
  // console.log("10.", listProvinsi[9].nama);
  //
  return listProvinsi;
}

provinsi();

const listkar = provinsi();

listkar.map((data, index) => {
  console.log((index + 1) + ". Nama Provinsi: " + data.nama);
});
