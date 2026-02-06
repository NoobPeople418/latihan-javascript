function genreMusik() {
  const listGenre = [
    { nama: "baroque" },
    { nama: "pop" },
    { nama: "romantic" },
    { nama: "rock" },
    { nama: "opera" },
    { nama: "jazz" },
    { nama: "symphony" },
    { nama: "hip hop" },
    { nama: "modern classical" },
    { nama: "dangdut" }
  ];

  // console.log("1.", listGenre[0].nama);
  // console.log("2.", listGenre[1].nama);
  // console.log("3.", listGenre[2].nama);
  // console.log("4.", listGenre[3].nama);
  // console.log("5.", listGenre[4].nama);
  // console.log("6.", listGenre[5].nama);
  // console.log("7.", listGenre[6].nama);
  // console.log("8.", listGenre[7].nama);
  // console.log("9.", listGenre[8].nama);
  // console.log("10.", listGenre[9].nama);

  return listGenre;
}

genreMusik();

const listkar = genreMusik();

listkar.map((data, index) => {
  console.log((index + 1) + ". Nama Genre: " + data.nama);
});
