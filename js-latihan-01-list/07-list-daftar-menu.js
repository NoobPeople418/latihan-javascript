function daftarMenu() {
  const listMenu = [
    { menu: "Ayam Bakar", kategori: "Makanan", harga: 25000, rating: 4.8, stok: 15 },
    { menu: "Es Teh Manis", kategori: "Minuman", harga: 5000, rating: 4.5, stok: 50 },
    { menu: "Nasi Goreng Spesial", kategori: "Makanan", harga: 20000, rating: 4.7, stok: 20 },
    { menu: "Kopi Susu Gula Aren", kategori: "Minuman", harga: 18000, rating: 4.9, stok: 30 },
    { menu: "Sate Kambing", kategori: "Makanan", harga: 45000, rating: 4.6, stok: 10 },
    { menu: "Jus Alpukat", kategori: "Minuman", harga: 15000, rating: 4.4, stok: 12 },
    { menu: "Mie Ayam Pangsit", kategori: "Makanan", harga: 15000, rating: 4.5, stok: 25 },
    { menu: "Soda Gembira", kategori: "Minuman", harga: 12000, rating: 4.3, stok: 15 },
    { menu: "Gado-Gado", kategori: "Makanan", harga: 18000, rating: 4.7, stok: 18 },
    { menu: "Wedang Jahe", kategori: "Minuman", harga: 8000, rating: 4.8, stok: 40 }
  ];

  // console.log("1.", listMenu[0].menu, "(" + listMenu[0].kategori + ")", "- Harga:", listMenu[0].harga, "- Rating:", listMenu[0].rating);
  // console.log("2.", listMenu[1].menu, "(" + listMenu[1].kategori + ")", "- Harga:", listMenu[1].harga, "- Rating:", listMenu[1].rating);
  // console.log("3.", listMenu[2].menu, "(" + listMenu[2].kategori + ")", "- Harga:", listMenu[2].harga, "- Rating:", listMenu[2].rating);
  // console.log("4.", listMenu[3].menu, "(" + listMenu[3].kategori + ")", "- Harga:", listMenu[3].harga, "- Rating:", listMenu[3].rating);
  // console.log("5.", listMenu[4].menu, "(" + listMenu[4].kategori + ")", "- Harga:", listMenu[4].harga, "- Rating:", listMenu[4].rating);
  // console.log("6.", listMenu[5].menu, "(" + listMenu[5].kategori + ")", "- Harga:", listMenu[5].harga, "- Rating:", listMenu[5].rating);
  // console.log("7.", listMenu[6].menu, "(" + listMenu[6].kategori + ")", "- Harga:", listMenu[6].harga, "- Rating:", listMenu[6].rating);
  // console.log("8.", listMenu[7].menu, "(" + listMenu[7].kategori + ")", "- Harga:", listMenu[7].harga, "- Rating:", listMenu[7].rating);
  // console.log("9.", listMenu[8].menu, "(" + listMenu[8].kategori + ")", "- Harga:", listMenu[8].harga, "- Rating:", listMenu[8].rating);
  // console.log("10.", listMenu[9].menu, "(" + listMenu[9].kategori + ")", "- Harga:", listMenu[9].harga, "- Rating:", listMenu[9].rating);

  return listMenu;
}

daftarMenu();

const listkar = daftarMenu();

listkar.map((data, index) => {
  console.log((index + 1) + ". Menu: " + data.menu + " (" + data.kategori + ") Harga: " + data.harga + " Rating: " + data.rating);
});
