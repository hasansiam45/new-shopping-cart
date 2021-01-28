document.getElementById('casePlus').addEventListener('click', function () {
    handleProductChange('case', true);
})


document.getElementById('caseMinus').addEventListener('click', function () {
    handleProductChange('case', false);
})


document.getElementById('phonePlus').addEventListener('click', function () {
    handleProductChange('phone', true);

})

document.getElementById('phoneMinus').addEventListener('click', function () {
    handleProductChange('phone', false);

})



// function for calculate phone and case price 
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + 'Quantity');
    const productCount = parseInt(productInput.value);
    let newProduct = productCount;
    if (isIncrease == false && productCount > 0) {
        newProduct = productCount - 1;
    }
    if (isIncrease == true) {
        newProduct = productCount + 1;
    }

    productInput.value = newProduct;
    let productPrice = 0;
    let subtotal = 0;
    let total = 0;
    if (product == 'case') {
        productPrice = newProduct * 59;

    }
    if (product == 'phone') {
        productPrice = newProduct * 1219;
    }
    document.getElementById(product + 'Price').innerText = productPrice;
    calculateTotal();
}


// function for calculate total
function calculateTotal() {
    const phoneInput = document.getElementById('phoneQuantity').value;
    const phoneAmount = parseInt(phoneInput);
    const caseInput = document.getElementById('caseQuantity').value;
    const caseAmount = parseInt(caseInput);

    const subtotal = (phoneAmount * 1219) + (caseAmount * 59);
    const tax = (subtotal * 3) / 100;
    const total = subtotal + tax;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}




document.getElementById('caseQuantity').addEventListener('change', function () {
    const caseAmount = document.getElementById('caseQuantity').value;
    const caseAmountNumber = parseInt(caseAmount);
    const casePrice = caseAmountNumber * 59;
    if (casePrice >= 0) {
        document.getElementById('casePrice').innerText = casePrice;
        const phoneInput = document.getElementById('phonePrice').innerText;
        const phonePrice = parseInt(phoneInput);

        const subtotal = casePrice + phonePrice;
        document.getElementById('subtotal').innerText = subtotal;

        const tax = (subtotal * 3) / 100;
        document.getElementById('tax').innerText = tax;

        const total = subtotal + tax;
        document.getElementById('total').innerText = total;


    }



})
document.getElementById('phoneQuantity').addEventListener('change', function () {
    const phoneAmount = document.getElementById('phoneQuantity').value;
    const phoneAmountNumber = parseInt(phoneAmount);
    const phonePrice = phoneAmountNumber * 1219;
    if (phonePrice >= 0) {
        document.getElementById('phonePrice').innerText = phonePrice;
        const caseInput = document.getElementById('casePrice').innerText;
        const casePrice = parseInt(caseInput);

        const subtotal = casePrice + phonePrice;
        document.getElementById('subtotal').innerText = subtotal;

        const tax = (subtotal * 3) / 100;
        document.getElementById('tax').innerText = tax;

        const total = subtotal + tax;
        document.getElementById('total').innerText = total;
    }



})