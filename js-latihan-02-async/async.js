const ambildata = async () => {
  try {
    const respon = await fetch("https://pokeapi.co/api/v2/pokemon/")
    if (!respon.ok) throw new Error("gagal gan")
    const hasil = await respon.json()

    return hasil.results
  } catch (error) {
    console.error("error ambil data")
    return []
  }
}

async function hasil() {
  // const container = document.getElementById("pokemn")
  try {
    const hasil = await ambildata();
    const bang = hasil.map((data) => {
      console.log("Nama:", data.name)
    })
    // console.log(hasil)
    return bang

  } catch (error) {
    console.log("gagal")
  }
}

hasil()


