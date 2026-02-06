function dataCuacaKota() {
  const listDataCuacaKota = [
    { namaKota: "Karanganyar", suhu: 25, kondisi: "mendung" },
    { namaKota: "Surakarta", suhu: 31, kondisi: "cerah" },
    { namaKota: "Banten", suhu: 29, kondisi: "cerah berawan" },
    { namaKota: "Klaten", suhu: 27, kondisi: "cerah" },
    { namaKota: "Bandung", suhu: 21, kondisi: "Hujan" },
    { namaKota: "tegal", suhu: 26, kondisi: "cerah berawan" },
    { namaKota: "Depok", suhu: 32, kondisi: "cerah" },
    { namaKota: "Semarang", suhu: 33, kondisi: "cerah" },
    { namaKota: "Sukoharjo", suhu: 21, kondisi: "cerah berawan" },
    { namaKota: "Wonogiri", suhu: 30, kondisi: "cerah" }
  ];

  // console.log("1. Kota:", listDataCuacaKota[0].namaKota, "Suhu:", listDataCuacaKota[0].suhu, "Kondisi:", listDataCuacaKota[0].kondisi);
  // console.log("2. Kota:", listDataCuacaKota[1].namaKota, "Suhu:", listDataCuacaKota[1].suhu, "Kondisi:", listDataCuacaKota[1].kondisi);
  // console.log("3. Kota:", listDataCuacaKota[2].namaKota, "Suhu:", listDataCuacaKota[2].suhu, "Kondisi:", listDataCuacaKota[2].kondisi);
  // console.log("4. Kota:", listDataCuacaKota[3].namaKota, "Suhu:", listDataCuacaKota[3].suhu, "Kondisi:", listDataCuacaKota[3].kondisi);
  // console.log("5. Kota:", listDataCuacaKota[4].namaKota, "Suhu:", listDataCuacaKota[4].suhu, "Kondisi:", listDataCuacaKota[4].kondisi);
  // console.log("6. Kota:", listDataCuacaKota[5].namaKota, "Suhu:", listDataCuacaKota[5].suhu, "Kondisi:", listDataCuacaKota[5].kondisi);
  // console.log("7. Kota:", listDataCuacaKota[6].namaKota, "Suhu:", listDataCuacaKota[6].suhu, "Kondisi:", listDataCuacaKota[6].kondisi);
  // console.log("8. Kota:", listDataCuacaKota[7].namaKota, "Suhu:", listDataCuacaKota[7].suhu, "Kondisi:", listDataCuacaKota[7].kondisi);
  // console.log("9. Kota:", listDataCuacaKota[8].namaKota, "Suhu:", listDataCuacaKota[8].suhu, "Kondisi:", listDataCuacaKota[8].kondisi);
  // console.log("10. Kota:", listDataCuacaKota[9].namaKota, "Suhu:", listDataCuacaKota[9].suhu, "Kondisi:", listDataCuacaKota[9].kondisi);

  return listDataCuacaKota;
}

dataCuacaKota();

const listkar = dataCuacaKota();

listkar.map((data, index) => {
  console.log((index + 1) + ". Kota: " + data.namaKota + " Suhu: " + data.suhu + " Kondisi: " + data.kondisi);
});
