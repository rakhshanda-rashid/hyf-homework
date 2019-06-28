console.log('Script loaded');

const products = getAvailableProducts();  
const input = document.querySelector('input');



//forming element with the className
function elementWithClassName(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = text;
    return element;
};
// creat list inside ul
function creatListsInsideUl(product) {
    const ul = document.createElement("ul");
        ul.appendChild(elementWithClassName('li', 'name', product.name)); 
        ul.appendChild(elementWithClassName('li', 'price', product.price));
        ul.appendChild(elementWithClassName('li', 'rating', product.rating));
        ul.appendChild(creatUlShipping(product.shipsTo));
     return ul ;     
};
// creat a ul for shipTo and creat lists shipsTo
function creatUlShipping(shipsTo) {
    const ul = document.createElement("ul");
        for (const item of shipsTo ){
            ul.appendChild(elementWithClassName('li', ' ', item));    
        }
    return ul;    
};
function creatUlShippingCart(productList){
    const ul = document.querySelector("section.cart > ul");
    for (const product of productList)  {
        const li = document.createElement("li");
        li.appendChild(creatListsInsideUl(product)) ;
        ul.appendChild(li);
    }
};
const ul = document.querySelector("section.products > ul");
const span = document.createElement('span.total'); 
// creat list of product object with attributies name, price, rating and shipsTo and renders 
function renderProducts (productList){
    productList.sort();
    let total = 0;
    const ul = document.querySelector("section.products > ul");
    const span = document.createElement('span.total'); 
    for (const product of productList)  {    
        const li = document.createElement("li");      
        li.appendChild(creatListsInsideUl(product)) ; 
        const btn = document.createElement('button');
        const cancelBtn = document.createElement('button')
        span.innerHTML = total;   
        ul.appendChild(li);
        ul.appendChild(btn);
        btn.innerHTML = 'Add to Cart'; 
        cancelBtn.innerHTML = 'Delet'
        const cart = document.querySelector('section.cart > ul');
        const listCart = document.createElement('li');
        const divCart = document.querySelector('div.total')
        btn.addEventListener('click',function(){
            clearList(listCart);
            total += product.price;
            listCart.innerHTML = `
                <li>
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price}</div>
                </li>
            `;
            listCart.appendChild(cancelBtn);
            span.innerHTML = total;
            divCart.appendChild(span);
            cart.appendChild(listCart);                
        });
        cancelBtn.addEventListener('click',function(e){
            total -= product.price; 
            span.innerHTML = total;           
            clearList(listCart);
            this.remove(li.childNodes);
            this.remove(ul.childNodes);
        })     
    }
};
function clearList(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
const sortOption = {
    Name: 'name',
    Expensive: 'expensive',
    Cheap: 'cheap'
};
input.addEventListener('input',function(){ 
    clearList(ul); 
    const productsToRender = availableProducts.filter(function(product){
        productName =  product.name.toLowerCase();
        inptutValue =  input.value.toLowerCase();
        if(productName === inptutValue)     
            return true;                    
    });           
renderProducts(productsToRender);
});
//-------------------------------- showing products that ships to country----------------------------------------
const countrySelected = document.querySelector(".country > select");
function matchCountryName()
{

    const countryNameToLowerCase=countrySelected.value;
    const productSearchForThisCountry=products.filter(product => {
        return product.shipsTo.some(country => {
            return country.toLowerCase() === countryNameToLowerCase.toLowerCase();
            
           });
        });
        clearList(ul);
    renderProducts(productSearchForThisCountry);
}
countrySelected.addEventListener("change",matchCountryName);



//-----------------------------------sort the products---------------------------------------
//select query for select tag of .sort class 
const sortProducts = document.querySelector("div.sort select ");
//Add event on selection of sorting option
sortProducts.addEventListener("change",sortingOfProducts);



function sortingOfProducts() {
    if (sortProducts.value === "cheap") {
        const cheapPrice=products.sort((currentProduct, nextProduct) => nextProduct.price - currentProduct.price);
        renderProducts(cheapPrice);
    }
    if (sortProducts.value === "expensive") {
        const expensivePrice = products.sort((currentProduct, nextProduct) => nextProduct.price - currentProduct.price);
        renderProducts(expensivePrice);
      }
      if (sortProducts.value === "name") {
        const sortName = products.sort((currentProduct, nextProduct) => (currentProduct.name > nextProduct.name ? 1 : -1));
        renderProducts(sortName);
      }
    }
    renderProducts(products);
    

/* Price Analytics: 
A function is available to you called sendPricesToServer.
You need to call this function with two arguments:*/

// 1. An array of the prices of the products. What array method can we use here? 

const pricesOfProducts=[2000,3000,4000,5000,6000,6500];
function random_item(items)
{
  
return pricesOfProducts[Math.floor(Math.random()*items.length)];
     
}

/* A callback function with a parameter. The parameter will be the confirmation text sent from the server. 
The callback function will be called when the data has been sent to the server.
 Console.log out the response from the server.*/ 
let callback = a => {
 console.log('Prices of products being sent');
}

sendPricesToServer(random_item(pricesOfProducts), callback);
    










