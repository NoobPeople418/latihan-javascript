// https://jsonplaceholder.typicode.com/albums

const apiUrl = "https://jsonplaceholder.typicode.com/albums"

async function typeOne() {
  try {
    const data = await fetch(apiUrl)
    if (!data.ok) throw new Error("gagal ambil data")
    const hasil = await data.json()

    return hasil

  } catch (error) {
    console.error("gagal ambil data dari api")
  }
}

const typeTwo = async () => {
  return fetch(apiUrl).then((data) => data.json())
}

async function main(){
  const method = 1
  if (method == 1) {
    try{
      const datas = await typeOne()
      const akhir = datas.map((data) => {
        console.log("ID User:", data.userId, "ID:", data.id, "Title:", data.title);
        // console.log(data)
      })
      return akhir
    } catch(error){
      console.error("gagal ambil data dari typeOne")
    }
  } else {
    try{
      const datas = await typeTwo()
      const akhir = datas.map((data) => {
        console.log("ID User:", data.userId, "ID:", data.id, "Title:", data.title);
        // console.log(data)
      })
      return akhir
    } catch(error){
      console.error("gagal ambil data dari typeTwo")
    }
  }
}

main()

