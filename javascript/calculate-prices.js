

// Calculate Subtotal


//  Update Total and Subtotal.




// Function called whenever an event is clicked on a purchse row
// increase, decrease quantity or delete item
function updateBasketPrices (itemRow, quantity, operator){

   /********* Update Grand Total and Subtotal********* */ 
   /*************************************************** */
   var totalElement = document.querySelector('.cart-total-price')
   var oldTotal = parseInt(totalElement.innerText)

   var numItems = quantity

   var cartPurchaseElement = itemRow
   var rowPriceElement = cartPurchaseElement.querySelector('.rowItemPrice')
   var rowPrice = parseInt(rowPriceElement.innerText)

   var rowSubtotalElement = cartPurchaseElement.querySelector('.rowSubtotal')
   var rowSubtotalPrice = parseInt(rowPriceElement.innerText) * numItems


    var oldTotal = parseInt(totalElement.innerText)
    var newTotal = oldTotal // This comes into play when the minus operation is not possible

    switch(operator) {
        case 'add':
          // add to total 
            newTotal = oldTotal + rowPrice
          break;

        case 'minus':
          // subtract from total
          if(numItems > 1){
                newTotal = oldTotal - rowPrice
                rowSubtotalPrice = rowSubtotalPrice - rowPrice
          }
          break;

        case 'remove':
            newTotal = oldTotal - rowSubtotalPrice
            break;
        default:
      }

    totalElement.innerText =  newTotal
    rowSubtotalElement.innerText = rowSubtotalPrice

}


function incCartTotal(price) {
  var totalPriceElement = document.querySelector('.cart-total-price')
  var total = parseInt(totalPriceElement.innerText)
  total = parseInt(price) + Math.round(total * 100) / 100

  totalPriceElement.innerText = total
}


function calculateRowPrice(base, addons, quantity){
  var rowPrice = (base + addons) * quantity
  return(rowPrice)
}












