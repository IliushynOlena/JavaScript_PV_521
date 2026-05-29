// document.write("<h2>Hello world!</h2>");



const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('createBtn');
const deleteBtn = document.getElementById('delete-btn');


let products = [];

createBtn.innerHTML = "Create New Product";

tableBody.innerHTML = "";

deleteBtn.onclick =()=>{
    products = [];
    tableBody.innerHTML = "";
}
createBtn.onclick = () => {
    console.log("On Click with JS");
    const newProduct = getProductFromForm();
    products.push(newProduct);
    //console.log(`${newProduct.name} ${newProduct.description} ${newProduct.price}`)
    if (!newProduct.name || !newProduct.description || !newProduct.price) {
        alert("Error");
    }
    else {
         addProductToTable(newProduct);
    }

    function addProductToTable(newProduct) {
        //add content to the table
        tableBody.innerHTML += `<tr class="table-dark">
                        <th scope="row">${newProduct.id}</th>
                        <td>${newProduct.name}</td>
                        <td>${newProduct.description}</td>
                        <td>${newProduct.price} grn</td>
                      </tr>`;
    }
}



function getProductFromForm() {
    const nameInput = document.getElementById('nameProductInput');
    const descInput = document.getElementById('descInput');
    const priceInput = document.getElementById('priceInput');
    return {
        id: products.length+1,
        name: nameInput.value,
        description: descInput.value,
        price: +priceInput.value
    }
}

const themeButton = document.getElementById('theme-btn');
const nav = document.getElementById('navbar');
const navCol1 = document.getElementById('navbarColor01');

themeButton.onclick = () =>{
    console.log("My button clicked");

   if (themeButton.innerHTML === "Primary Theme") {
        themeButton.innerHTML = "Light Theme";
       
        nav.classList.remove("bg-primary");
        nav.classList.add("bg-light");
       
        nav.setAttribute("data-bs-theme", "light");
       
    } else {
        themeButton.innerHTML = "Primary Theme";
       
        nav.classList.remove("bg-light");
        nav.classList.add("bg-primary");
       
        nav.setAttribute("data-bs-theme", "dark");
    }
 
        
   
}
