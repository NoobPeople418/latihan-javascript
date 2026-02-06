function sayuran() {
  const listSayuran = [
    { nama: "bayam" },
    { nama: "kangkung" },
    { nama: "wortel" },
    { nama: "sawi" },
    { nama: "brokoli" },
    { nama: "kubis" },
    { nama: "terong" },
    { nama: "buncis" },
    { nama: "labu siam" },
    { nama: "seledri" }
  ];

  // console.log("1.", listSayuran[0].nama);
  // console.log("2.", listSayuran[1].nama);
  // console.log("3.", listSayuran[2].nama);
  // console.log("4.", listSayuran[3].nama);
  // console.log("5.", listSayuran[4].nama);
  // console.log("6.", listSayuran[5].nama);
  // console.log("7.", listSayuran[6].nama);
  // console.log("8.", listSayuran[7].nama);
  // console.log("9.", listSayuran[8].nama);
  // console.log("10.", listSayuran[9].nama);
  //
  return listSayuran;
}

sayuran();

const listkar = sayuran();

listkar.map((data, index) => {
  console.log((index + 1) + ". Nama Sayuran: " + data.nama);
});
