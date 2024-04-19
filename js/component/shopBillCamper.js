export const getAllProductBill = async()=> {
    let connection = await fetch("http://localhost:5600/camper")
    let data = await connection.json()
    return data
}