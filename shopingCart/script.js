let products = ["j-1.png", "j-2.jpeg", "j-3.jpeg", "j-4.jpeg"];
let productName = ["Air-Jordan Retro-6", "Air-Jordan Retro-5", "Air-Jordan Retro-4", "Air-Jordan Retro-3"];
let price = [5000, 8000, 10000, 7000];
let count = 0;

let mainContainer = document.createElement('div');
mainContainer.setAttribute("class", "mainContainer");



let cartContainer = document.createElement('div');
cartContainer.setAttribute("class", "Cart");
let p = document.createElement("h2");
p.innerText = "Cart";
cartContainer.style.border = "3px solid black";
cartContainer.style.borderRadius = "5px";
cartContainer.style.width = "25%";
cartContainer.style.textAlign = "center";


let total = document.createElement("p");
total.innerText = "Total Amount: "
total.setAttribute("id", "add")
total.style.marginBottom = "5px";





mainContainer.appendChild(cartContainer);
cartContainer.appendChild(p);
p.appendChild(total)

for (let index = 0; index < 4; index++) {

    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.style.boxShadow = " 0 4px 8px 0 rgba(0,0,0,0.2)";
    card.style.maxWidth = "500px";
    card.style.height = "350px";
    card.style.textAlign = "center";

    let imge = document.createElement("img");
    imge.setAttribute("class", "image")
    imge.src = products[index];
    imge.style.height = "200px"
    imge.style.width = "200px"

    let productNames = document.createElement("h4");
    productNames.setAttribute("class", "productName")
    productNames.innerText = productName[index];

    let priceOfProduct = document.createElement("p");
    priceOfProduct.setAttribute("class", "price");
    priceOfProduct.style.color = ("grey");
    priceOfProduct.innerText = "₹" + price[index];

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart"
    btn.style.border = "none";
    btn.style.outline = "0";
    btn.style.padding = "12px";
    btn.style.width = "100%";
    btn.style.color = "white";
    btn.style.backgroundColor = "#000";
    mainContainer.appendChild(card);
    card.appendChild(imge);
    card.appendChild(productNames);
    card.appendChild(priceOfProduct);
    card.appendChild(btn);


    btn.addEventListener('click', () => {
        let cartsContainer = document.createElement("div");

        let bord = document.createElement("card")
        bord.style.boxShadow = " 0 4px 8px 0 rgba(0,0,0,0.2)";
        bord.style.maxWidth = "300px";
        bord.style.height = "300px";
        bord.style.textAlign = "center";

        let img = document.createElement('img');
        img.src = products[index];
        img.style.width = "100px"
        img.style.height = "100px"


        let name = document.createElement('p');
        name.innerText = "Name :" + productName[index]
        name.style.textAlign = "center";

        let Price = document.createElement('p')
        Price.innerText = "Price :" + "₹" + price[index];

        let btn = document.createElement('button');
        btn.innerText = "remove";
        btn.setAttribute("id", "Rbtn")
        btn.style.border = "none"
        btn.style.backgroundColor = "red"
        btn.style.color = "white"
        btn.style.padding = "5px"

        btn.addEventListener('click', () => {
            document.getElementById("Rbtn").disabled = false;
            bord.style.display = "none"
        });
        btn.innerText = "Remove";





        document.getElementById("add").innerText = "Total Amount:" + "₹" + (count = count + price[index]);









        cartContainer.appendChild(cartsContainer);
        cartContainer.appendChild(bord);
        bord.appendChild(img);
        bord.append(name);
        name.append(Price);
        name.append(btn)







    })

}
document.body.appendChild(mainContainer);

