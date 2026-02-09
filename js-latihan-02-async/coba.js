function satu(){
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((Placeholder) => {
      Placeholder.map((pd) => console.log("id:", pd.userId,"--", "title:", pd.title))
    })
}

function dua(){
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((data) => data.json())
    // .then((Placeholder) => Placeholder.results)
    .then((coba) => {
      coba.results.map((data) => console.log(data.name))
    })
}

async function tiga(){
  const hasil = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!hasil.ok) throw new error("gagal")

  const akhir = await hasil.json()

}

dua()



