// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = price.innerText * quantity.value;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = subtotalPrice;

  return subtotalPrice;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  let totalSum = 0;

  // ITERATION 2
   let productsList = document.getElementsByClassName('product');
   
   for (let i = 0; i < productsList.length; i++) {
    let product = productsList[i];

    totalSum += updateSubtotal(product);
   }

  // ITERATION 3
  let greatTotal = document.querySelector('#total-value span');
  greatTotal.innerText = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target
    );
  //... your code goes here

  const targetProduct = event.srcElement.parentNode.parentNode;
  const targetParent = targetProduct.parentNode
  const productSubtotal = targetProduct.querySelector('.subtotal span');

  targetParent.removeChild(targetProduct);

  let greatTotal = document.querySelector('#total-value span');

  greatTotal.innerText -= productSubtotal.innerText;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.new-product--name');
  const productPrice = document.querySelector('.new-product--price');
  //productPrice = parseInt(productPrice.value);

  if (productName.value === '' || productPrice.value === 0) {
    alert('preencha todos os valores :)')
    return;
  }

  const cartTable = document.getElementsByTagName('tbody')[0];

  const newRow = document.createElement('tr');
  newRow.setAttribute('class', 'product');
  
  newRow.innerHTML += `
    <td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  cartTable.appendChild(newRow);
  addEventLastBtn(newRow);
  productName.value = '';
  productPrice.value = 0;

}

function addEventLastBtn (lastRow) {
  console.log(lastRow)
  //const lastRow = document.getElementsByClassName('product').lastChild;
  const btnRemove = lastRow.querySelector('.btn-remove');
  btnRemove.addEventListener('click', removeProduct);
  return;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});
