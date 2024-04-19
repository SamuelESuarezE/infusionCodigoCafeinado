import {getAllProductBill} from "./component/shopBillCamper.js"

let myBill = document.querySelector("#myBill")
let data = await getAllProductBill()
let row = ""

data.forEach((val, id) => {
    val.products.forEach(product => {
        row += `
            <tr>
            <td>${product.description}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td>${product.total}</td> 
            </tr>
            `
    })
});
myBill.innerHTML = row

{/* <tr>
<td>Incluye versión desktop y mobile</td>
<td>2</td>
<td>100 €</td>
<td>200 €</td>
</tr> */}