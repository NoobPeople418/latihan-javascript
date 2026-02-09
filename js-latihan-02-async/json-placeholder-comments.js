// https://jsonplaceholder.typicode.com/comments
const apiUrl = "https://jsonplaceholder.typicode.com/comments"

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
  const method = 2
  if (method == 1) {
    try{
      const datas = await typeOne()
      const akhir = datas.map((data) => {
        console.log("ID Post:", data.postId, "ID:", data.id, "Nama:", data.name, "Email:", data.email, "Body:", data.body)
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
        console.log("ID Post:", data.postId, "ID:", data.id, "Nama:", data.name, "Email:", data.email, "Body:", data.body)
        // console.log(data)
      })
      return akhir
    } catch(error){
      console.error("gagal ambil data dari typeTwo")
    }
  }
}

main()

