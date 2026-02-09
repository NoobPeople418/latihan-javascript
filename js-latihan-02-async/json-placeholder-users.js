// https://jsonplaceholder.typicode.com/users
const apiUrl = "https://jsonplaceholder.typicode.com/users"

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
        console.log("ID:", data.id, "Name:", data.name, "Username:", data.username, "Email:", data.email, "Address:", `${data.address.street}, ${data.address.city}`, "Geo:", `${data.address.geo.lat}, ${data.address.geo.lng}`, "Phone:", data.phone, "Website:", data.website, "Company:", data.company.name);
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
        console.log("ID:", data.id, "Name:", data.name, "Username:", data.username, "Email:", data.email, "Address:", `${data.address.street}, ${data.address.city}`, "Geo:", `${data.address.geo.lat}, ${data.address.geo.lng}`, "Phone:", data.phone, "Website:", data.website, "Company:", data.company.name);
        // console.log(data)
      })
      return akhir
    } catch(error){
      console.error("gagal ambil data dari typeTwo")
    }
  }
}

main()

