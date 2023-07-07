function addPurchaseRow(thumb, descObj, quantity, price,rowId) {

    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-purchase')

    var subTotal = 0
    subTotal = price * quantity 

  desc="a tee shirt colour blue with asome stuff written on the back that costs al oot of money"

    var cartItemsList= document.querySelector('.shopping-cart-list')
    var cartRowContents = `
  <div class="cart-purchase">
      <div class="uniqueRowIdentifier">${rowId}</div>

      <div class="cart-row">

          <div class="cart-item">
               <img class="cart-item-image" 
                 src="${thumb}"
                 width="100"
                 height="100">
          </div>
  
          <div class="cart-item-description">
            ${descObj.title}<br>
            ${descObj.extra}<br>
            Color: ${descObj.colour} <br>
            Size: ${descObj.size} <br>
            Price: &pound;<span class = 'rowItemPrice'>${price}</span>
          </div>

      </div>



    <div class="cart-row cart-subtotal">
  
      <div class="incdec-box">
        <button type="button" class="minus"><img src="/images/icons/shop/down.svg"></button>
        <span class="num"> ${quantity} </span>
        <button type="button" class="plus"><img src="/images/icons/shop/up.svg" alt=""></button>
      </div>


      <div class="subtotal-price-wastebin">

            <div class="subtotal-display">
                 Subtotal: &pound
                 <span class="rowSubtotal">${subTotal}<span>
            </div>
  
            <div class="flexbox-item wastebin-icon ">
              <button class="btn-danger" type="button">
                   <img src="/images/icons/shop/wastebasket.svg" alt="delete item">
               </button>
            </div>

      </div>
    </div>
  </div>
        `
    cartRow.innerHTML = cartRowContents
    cartItemsList.insertAdjacentElement("afterbegin",cartRow)
    
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', remove_item)
    cartRow.getElementsByClassName('plus')[0].addEventListener('click', inc)
    cartRow.getElementsByClassName('minus')[0].addEventListener('click', dec)

}

