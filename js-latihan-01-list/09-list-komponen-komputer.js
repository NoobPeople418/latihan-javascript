function komponenKomputer() {
  const listKomponenKomputer = [
    { partName: "Ryzen 7 9800X3D", brand: "AMD", powerDraw: 120, price: 8770000 },
    { partName: "Ryzen 9 9950X", brand: "AMD", powerDraw: 170, price: 12800000 },
    { partName: "Ryzen 7 9700X", brand: "AMD", powerDraw: 65, price: 5815000 },
    { partName: "Core i9-14900KS", brand: "Intel", powerDraw: 150, price: 12311000 },
    { partName: "Core Ultra 9 285K", brand: "Intel", powerDraw: 125, price: 11500000 },
    { partName: "RTX 5090", brand: "Nvidia", powerDraw: 575, price: 40000000 },
    { partName: "RTX 5080", brand: "Nvidia", powerDraw: 360, price: 24000000 },
    { partName: "RTX 5070", brand: "Nvidia", powerDraw: 250, price: 8800000 },
    { partName: "RTX 5060", brand: "Nvidia", powerDraw: 150, price: 5999999 },
    { partName: "RX 9070 XT", brand: "AMD", powerDraw: 304, price: 9900000 }
  ];

  // console.log("1. Merk:", listKomponenKomputer[0].brand, "Model:", listKomponenKomputer[0].partName, "Daya:", listKomponenKomputer[0].powerDraw, "Watt Harga: Rp", listKomponenKomputer[0].price);
  // console.log("2. Merk:", listKomponenKomputer[1].brand, "Model:", listKomponenKomputer[1].partName, "Daya:", listKomponenKomputer[1].powerDraw, "Watt Harga: Rp", listKomponenKomputer[1].price);
  // console.log("3. Merk:", listKomponenKomputer[2].brand, "Model:", listKomponenKomputer[2].partName, "Daya:", listKomponenKomputer[2].powerDraw, "Watt Harga: Rp", listKomponenKomputer[2].price);
  // console.log("4. Merk:", listKomponenKomputer[3].brand, "Model:", listKomponenKomputer[3].partName, "Daya:", listKomponenKomputer[3].powerDraw, "Watt Harga: Rp", listKomponenKomputer[3].price);
  // console.log("5. Merk:", listKomponenKomputer[4].brand, "Model:", listKomponenKomputer[4].partName, "Daya:", listKomponenKomputer[4].powerDraw, "Watt Harga: Rp", listKomponenKomputer[4].price);
  // console.log("6. Merk:", listKomponenKomputer[5].brand, "Model:", listKomponenKomputer[5].partName, "Daya:", listKomponenKomputer[5].powerDraw, "Watt Harga: Rp", listKomponenKomputer[5].price);
  // console.log("7. Merk:", listKomponenKomputer[6].brand, "Model:", listKomponenKomputer[6].partName, "Daya:", listKomponenKomputer[6].powerDraw, "Watt Harga: Rp", listKomponenKomputer[6].price);
  // console.log("8. Merk:", listKomponenKomputer[7].brand, "Model:", listKomponenKomputer[7].partName, "Daya:", listKomponenKomputer[7].powerDraw, "Watt Harga: Rp", listKomponenKomputer[7].price);
  // console.log("9. Merk:", listKomponenKomputer[8].brand, "Model:", listKomponenKomputer[8].partName, "Daya:", listKomponenKomputer[8].powerDraw, "Watt Harga: Rp", listKomponenKomputer[8].price);
  // console.log("10. Merk:", listKomponenKomputer[9].brand, "Model:", listKomponenKomputer[9].partName, "Daya:", listKomponenKomputer[9].powerDraw, "Watt Harga: Rp", listKomponenKomputer[9].price);

  return listKomponenKomputer;
}

komponenKomputer();

const listkar = komponenKomputer();

listkar.map((data, index) => {
  console.log((index + 1) + ". Merek: " + data.brand + " Model: " + data.partName + " Daya: " + data.powerDraw + " Watt Harga: Rp " + data.price);
});
