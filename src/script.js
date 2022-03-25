const cartContent = document.getElementsByClassName('cart_content')[0];
const buttonTodos = document.getElementById('todos');
const buttonSale = document.getElementById('sale');
const buttonHardware = document.getElementById('hardware');
const buttonSoftware = document.getElementById('software');
const buttonPerifericos = document.getElementById('perifericos');
const searchButton = document.getElementById('search_button');

const cartEmptyMessages = [];
cartEmptyMessages.push(document.getElementsByClassName('cart_emptyMessageTitle')[0]);
cartEmptyMessages.push(document.getElementsByClassName('cart_emptyMessageSubtitle')[0]);

const cartArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function cleanProductList() {
    const grid = document.getElementById('main_grid');
    grid.innerHTML = '';
    createProductList();
}

function createProductList() {
    const mainList = document.getElementById('main_grid');
    const productList = document.createElement('ul');
    productList.classList.add('product_list');
    mainList.appendChild(productList);
}

function cleanCart() {
    cartContent.innerHTML = '';
    const checkoutContent = document.getElementById('subtotal');
    if(checkoutContent !== null)
        checkoutContent.remove();
}

function emptyCartOrNot(){
    let empty = true;
    for(let i = 0; i < cartArray.length; i++){
        if(cartArray[i] !== 0){
            empty = false;
            break;
        }
    }
    if(empty === true){ 
        cleanCart();
        rebuildEmptyCartMessage();
        function rebuildEmptyCartMessage(){
            cartEmptyMessages[0].classList.add('cart_emptyMessageTitle');
            cartEmptyMessages[0].innerText = 'Carrinho vazio';
            cartContent.appendChild(cartEmptyMessages[0]);
            cartEmptyMessages[1].classList.add('cart_emptyMessageSubtitle');
            cartEmptyMessages[1].innerText = 'Adicione itens';
            cartContent.appendChild(cartEmptyMessages[1]);
        }
    }
    else {
        cleanCart();
        createCartElements();
    }
}

function createCartElements(){
    for(let i = 0; i < cartArray.length; i++){ 
        if(cartArray[i] > 0){
            const divCart = document.createElement('div');
            divCart.classList.add(`div-item-cart`);
            divCart.setAttribute('id', `c${i}`);
            cartContent.appendChild(divCart);

            const divImgCart = document.createElement('div');
            divImgCart.classList.add(`div-img-cart`);
            divCart.appendChild(divImgCart);

            const imgCart = document.createElement('img');
            imgCart.classList.add('img-cart');
            imgCart.setAttribute('src', productsData[i].productImg[0]);
            divImgCart.appendChild(imgCart);

            const divTextCart = document.createElement('div');
            divTextCart.classList.add('div-text-cart');
            divCart.appendChild(divTextCart);

            const titItemCart = document.createElement('h2');
            titItemCart.classList.add('item_title');
            titItemCart.innerText = productsData[i].itemTitle;
            divTextCart.appendChild(titItemCart);
            const prcItemCart = document.createElement('p');
            prcItemCart.classList.add('item_price');
            prcItemCart.innerText = `${productsData[i].itemPrice} (x${cartArray[i]}) = R$ ${(productsData[i].itemPrice.slice(3)*1 * cartArray[i]).toFixed(2)}`;
            divTextCart.appendChild(prcItemCart);

            const removeItenBttn = document.createElement('button');
            removeItenBttn.classList.add('remove-button');
            removeItenBttn.innerText = 'Remover produto';
            divTextCart.appendChild(removeItenBttn);

            removeItenBttn.addEventListener('click', removeItemFromCart);
            function removeItemFromCart() {
                cartArray[i] = 0;
                emptyCartOrNot();
            }
        }
    }

    const cartSection = document.getElementById('cart_section');

    const subtotal = document.createElement('div');
    subtotal.setAttribute('id', 'subtotal');
    cartSection.appendChild(subtotal);

    const checkout = document.createElement('div');
    checkout.classList.add('checkout');
    subtotal.append(checkout);

    const checkoutValues = document.createElement('div');
    checkoutValues.classList.add('checkoutValues');
    subtotal.append(checkoutValues);


    const qtdLabel = document.createElement('span');
    qtdLabel.classList.add('qtdLabel');
    qtdLabel.innerText = 'Quantidade:';
    checkout.appendChild(qtdLabel);

    const totalLabel = document.createElement('span');
    totalLabel.classList.add('totalLabel');
    totalLabel.innerText = 'Total:';
    checkout.appendChild(totalLabel);

    const qtdValue = document.createElement('span');
    qtdValue.classList.add('qtdValue');
    let sum = 0;
    for(let i = 0; i < cartArray.length; i++)
        sum += cartArray[i];
    qtdValue.innerText = sum;
    checkoutValues.appendChild(qtdValue);

    const totalPrice = document.createElement('span');
    totalPrice.classList.add('totalPrice');
    let price = 0;
    for(i = 0; i < cartArray.length; i++)
        //price += Math.round((productsData[i].itemPrice.slice(3)*1 * cartArray[i] + Number.EPSILON) * 100) / 100;
        price += productsData[i].itemPrice.slice(3)*1 * cartArray[i];
    totalPrice.innerText = `R$ ${price.toFixed(2)}`;
    checkoutValues.appendChild(totalPrice);
}

function addtoCartEvent(productArray){
    for(let i = 0; i < productArray.length; i++){
        const addToCartButton = document.getElementById(`${productArray[i].productId}`);
        addToCartButton.addEventListener('click', addToCartArray);
        function addToCartArray(){
            cartArray[addToCartButton.id]++;
            emptyCartOrNot();
        }
    }
}

function createProducts(productArray){
    const searchBox = document.getElementById('search_box');
    searchBox.value = '';

    const productList = document.getElementsByClassName('product_list')[0];

    for(let i = 0; i < productArray.length; i++){
        const singleProduct = document.createElement('li');
        singleProduct.classList.add('product');
        productList.appendChild(singleProduct);
    
        const divImg = document.createElement('div');
        divImg.classList.add('card_img');
        singleProduct.appendChild(divImg);

        const productImg = document.createElement('img');
        productImg.setAttribute('src', productArray[i].productImg[0]);
        productImg.setAttribute('alt', productArray[i].productImg[1]);
        divImg.appendChild(productImg);

        const divContent = document.createElement('div');
        divContent.classList.add('card_content');
        singleProduct.appendChild(divContent);

        const tagContainer = document.createElement('div');
        tagContainer.classList.add('tag_container');
        for(let j = 0; j < productArray[i].tagContainer.length; j++) {
            const tag = document.createElement('span');
            tag.innerText = productArray[i].tagContainer[j];
            tagContainer.appendChild(tag);

            if(tag.innerText === 'SALE'){
                tag.classList.add('sale_tag');
            }
            else{
                tag.classList.add('item_category');
                break;
            }
        }
        divContent.appendChild(tagContainer);

        const itemTitle = document.createElement('h2');
        itemTitle.classList.add('item_title');
        itemTitle.innerText = productArray[i].itemTitle;
        divContent.appendChild(itemTitle);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item_description');
        itemDescription.innerText = productArray[i].itemDescription;
        divContent.appendChild(itemDescription);

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('item_price');
        itemPrice.innerText = productArray[i].itemPrice;
        divContent.appendChild(itemPrice);

        const itemAddToCart = document.createElement('a');
        itemAddToCart.classList.add('item_addToCart');
        itemAddToCart.setAttribute('id', productArray[i].productId);
        itemAddToCart.innerText = 'Adicionar ao carrinho';
        divContent.appendChild(itemAddToCart);

    }  
    addtoCartEvent(productArray);
}

function checkTag(str) {
    const newArr = [];
    for(let i = 0; i < productsData.length; i++) {
        if(productsData[i].tagContainer[0] === str || productsData[i].tagContainer[1] === str)
            newArr.push(productsData[i]);
    }
    return newArr;
}

function tagSelector(button){
    cleanProductList();
    let tagArray = checkTag(button.innerText);
    createProducts(tagArray);
}

buttonTodos.addEventListener('click', tagTodos);
function tagTodos(){
    cleanProductList();
    createProducts(productsData);
}

buttonSale.addEventListener('click', tagSaleFilter);
function tagSaleFilter(){
    tagSelector(buttonSale);
}

buttonHardware.addEventListener('click', tagHardwareFilter);
function tagHardwareFilter(){
    tagSelector(buttonHardware);
}

buttonSoftware.addEventListener('click', tagSoftwareFilter);
function tagSoftwareFilter(){
    tagSelector(buttonSoftware);
}

buttonPerifericos.addEventListener('click', tagPerifericosFilter);
function tagPerifericosFilter(){
    tagSelector(buttonPerifericos);
}

searchButton.addEventListener('click', searchProduct);
function searchProduct(){
    const inputText = document.getElementById('search_box').value;
    const finalArr = [];
    for(let i = 0; i < productsData.length; i++)
        if (productsData[i].itemTitle.toLowerCase().includes(inputText.toLowerCase()))
            finalArr.push(productsData[i]);
    cleanProductList();
    if(finalArr.length === 0){
        alert('Nenhum resultado foi encontrado');
        createProducts(productsData);
        return;
    }
    createProducts(finalArr);
}

cleanProductList();
createProducts(productsData);



    











