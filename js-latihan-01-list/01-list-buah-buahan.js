function BuahBuahan() {
  const listBuahBuahan = [
    { nama: "apel" },
    { nama: "mangga" },
    { nama: "pepaya" },
    { nama: "anggur" },
    { nama: "lemon" },
    { nama: "nangka" },
    { nama: "durian" },
    { nama: "salak" },
    { nama: "semangka" },
    { nama: "jeruk" }
  ];

  // console.log("1.", listBuahBuahan[0].nama);
  // console.log("2.", listBuahBuahan[1].nama);
  // console.log("3.", listBuahBuahan[2].nama);
  // console.log("4.", listBuahBuahan[3].nama);
  // console.log("5.", listBuahBuahan[4].nama);
  // console.log("6.", listBuahBuahan[5].nama);
  // console.log("7.", listBuahBuahan[6].nama);
  // console.log("8.", listBuahBuahan[7].nama);
  // console.log("9.", listBuahBuahan[8].nama);
  // console.log("10.", listBuahBuahan[9].nama);
  return listBuahBuahan;
}

BuahBuahan();

const listkar = BuahBuahan();

listkar.map((data, index) => {
  console.log((index + 1) + ". Nama Buah: " + data.nama);
});
