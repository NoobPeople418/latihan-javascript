function spesifikasiHP() {
  const listHP = [
    { merk: "Samsung", model: "A05", ram: 4, storage: 64, harga: 1499000, is5G: false },
    { merk: "Apple", model: "iPhone 11", ram: 4, storage: 128, harga: 8499000, is5G: false },
    { merk: "Xiaomi", model: "Redmi Note 13 Pro", ram: 8, storage: 256, harga: 3299000, is5G: false },
    { merk: "iQOO", model: "Z9", ram: 8, storage: 256, harga: 4299000, is5G: true },
    { merk: "Samsung", model: "A55", ram: 8, storage: 256, harga: 5999000, is5G: true },
    { merk: "Realme", model: "C67", ram: 8, storage: 128, harga: 2399000, is5G: false },
    { merk: "Tecno", model: "Pova 6 Pro", ram: 8, storage: 256, harga: 2659000, is5G: true },
    { merk: "Poco", model: "F6", ram: 12, storage: 512, harga: 5249000, is5G: true },
    { merk: "Oppo", model: "A60", ram: 8, storage: 128, harga: 2299000, is5G: false },
    { merk: "Infinix", model: "GT 20 Pro", ram: 12, storage: 256, harga: 3845000, is5G: true }
  ];

  // console.log("1.", listHP[0].merk, listHP[0].model, "RAM:", listHP[0].ram, "GB, Harga:", listHP[0].harga);
  // console.log("2.", listHP[1].merk, listHP[1].model, "RAM:", listHP[1].ram, "GB, Harga:", listHP[1].harga);
  // console.log("3.", listHP[2].merk, listHP[2].model, "RAM:", listHP[2].ram, "GB, Harga:", listHP[2].harga);
  // console.log("4.", listHP[3].merk, listHP[3].model, "RAM:", listHP[3].ram, "GB, Harga:", listHP[3].harga);
  // console.log("5.", listHP[4].merk, listHP[4].model, "RAM:", listHP[4].ram, "GB, Harga:", listHP[4].harga);
  // console.log("6.", listHP[5].merk, listHP[5].model, "RAM:", listHP[5].ram, "GB, Harga:", listHP[5].harga);
  // console.log("7.", listHP[6].merk, listHP[6].model, "RAM:", listHP[6].ram, "GB, Harga:", listHP[6].harga);
  // console.log("8.", listHP[7].merk, listHP[7].model, "RAM:", listHP[7].ram, "GB, Harga:", listHP[7].harga);
  // console.log("9.", listHP[8].merk, listHP[8].model, "RAM:", listHP[8].ram, "GB, Harga:", listHP[8].harga);
  // console.log("10.", listHP[9].merk, listHP[9].model, "RAM:", listHP[9].ram, "GB, Harga:", listHP[9].harga);
  //
  return listHP;
}

spesifikasiHP();

const listkar = spesifikasiHP();

listkar.map((data, index) => {
  console.log((index + 1) + ". Merk: " + data.merk + " Model: " + data.model + " RAM: " + data.ram + " GB, Harga: " + data.harga);
});
