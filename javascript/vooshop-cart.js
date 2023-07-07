console.log("vooshop-cart.js")
/*********************************************************************************
 * 
 *      Merch Item Pages
 * 
 *      Javascript for shopping cart Panel and shopping cart Button
 *      and
 *      Javascript for the Info Panel and Price Tag button
 * 
 ***************************************************************************** */
/////////////////////////////////////////////
///               Prices                 ////
/////////////////////////////////////////////
const hoodyFront = 65;
const hoodyFrontBack = 45;
const teeFront = 29;
const teeFrontBack = 35;
const tote = 25;
const artPrintA3 = 65;
const artPrintA2 = 250;
////////////////////////////////////////////////////////////////////////////////////
///           Local Storage                /////////////////////////////////////////
//
//      localStorage is a stringified JSON object
//      vooshopCart get assigned to localStorage
//
//      vooshopCart = JSON Object
//      This JSON Object is an array of key=value pairs {objects}
//      Each Object contains the Key=value pairs describing an item in the vooshop cart
//      
//      so
//      vooshopCart = JSON = [{}, {}, {}, {}]
//
//      artVooshop is the name of the file on disc
//      vooshopCart is the variable name (const Global) used to refer to it in the code 
//
/////////////////////////////////////////////////////////////////////////////////////
const vooshopCart = 'artVooshop'
//let x= 

// localStorage.clear();

var sessionActive = false
function clearLocalStorage(){
    localStorage.clear();
    alert('Local Storage Wiped');

// Will require a method to remove rows from cart if this is to be implemented as a clear cart button
    sessionActive = false

}












function initialiseBasket(){
    console.log('***************** initialiseBasket **************')

    if(localStorage.getItem(vooshopCart) != null){
        //create first instance localStorage 
        populateBasket(vooshopCart)

    }

}









function populateBasket(){

console.log('////////////////////////////////////')
console.log('////////// populatebasket //////////')

    var itemsJson = localStorage.getItem(vooshopCart)
    var items = JSON.parse(itemsJson)

    var row = ''
    var newRowPrice = 0
    var rp =0  // row price
    var rq = 0 // row quantity
    for(var i=0; i < items.length; i++){
        row = items[i]
        console.log('populatebasket : row.thumb', row.thumb)
        console.log('populatebasket : row.description', row.description)
        console.log('populatebasket : row.itemPrice', row.itemPrice)
        console.log('populatebasket : row.quantity', row.quantity)
        console.log('populatebasket : row.rowId', row.rowId)
        
        rp = parseInt(row.itemPrice)
        rq = parseInt(row.quantity)
        newRowPrice = (rp * rq)

        addPurchaseRow(row.thumb, row.description, row.quantity, row.itemPrice, row.rowId)
        incCartTotal(newRowPrice) 

    }

}










function add_cart_item(event) {

    function getSelectionValue(selectClass){
        let selectElement = event.target.parentElement.parentElement.parentElement.parentElement;
        let index = selectElement.querySelector(selectClass).selectedIndex;
        let optionsArray = selectElement.querySelector(selectClass).options;
        let selection = optionsArray[index].value;

        return(selection)
    }
    function getSelectionText(selectClass){
        let selectElement = event.target.parentElement.parentElement.parentElement.parentElement;
        let index = selectElement.querySelector(selectClass).selectedIndex;
        let optionsArray = selectElement.querySelector(selectClass).options;
        let selection = optionsArray[index].text;

        return(selection)
    }
    function getsrcImageURL(selector){
        let newImgElement =  document.getElementById(selector)
        let srcFile = newImgElement.src
        let thumImg = srcFile.replace("full", "500");

        return(thumImg)
    }
    function getTopsRowPrice(){
        let basePrice = document.querySelector('.front-item-price').innerText
        let addons = document.querySelector('.back-item-price').innerText
        let quantity = 1
    
        if(extra == 'No Backprint'){
            addons = 0
        }
    
        b = parseInt(basePrice)
        a = parseInt(addons)
        q = parseInt(quantity)
        let itemRowPrice = calculateRowPrice(b,a,q)
        return(itemRowPrice)

    }
    function getTotesRowPrice(){
        return(tote)
    }

    function getArtprintRowPrice(){
        printType = getSelectionValue(".printSize")
        if(printType == "Large"){
            return(artPrintA2)
        }else{
            return(artPrintA3)
        }
    }

    /**** Get selctions from all Selects */
    /** Create a string comtaining the info */
    /** Add HTML to document  ****/

    var merchType = document.getElementById('merchType').value
    var title = document.title
    var size = "standard"
    var mainCol = "canvas"
    var extra = "no extras"
    var srcImageId = title
    var descObj = {
        'title': title,
        'size': size ,
        'colour': mainCol,
        'extra': extra
    }
    var quantity = 1
    var itemRowPrice = 0

    let productType = ""
    if(merchType == "tee" || merchType == "hoody"){
        productType = "tops"
    }else{
        productType = merchType
    }
    console.log("product type = ", productType)
    switch(productType){
        case "tops":
            size = getSelectionValue(".size")
            mainCol = getSelectionValue(".color")
            extra = getSelectionValue(".back")
            thumImg = getsrcImageURL(mainCol)

            descObj.size = size
            descObj.colour = mainCol
            descObj.extra = "with " + extra + " on the back"
                /**** Calculate Row Price */
            itemRowPrice = getTopsRowPrice()
            
            break
        case "totes":
            /** validate tote selections */
            let totebag = getSelectionValue(".design")
            thumImg = getsrcImageURL(totebag)
            itemRowPrice = getTotesRowPrice()

            break
        case "artprints" : 
            /** validate art-print selections */
            thumImg = getsrcImageURL("printURL")
            descObj.size = getSelectionText(".printSize")
            descObj.colour = "Full Color"
            descObj.extra = "Signed and titled"
            itemRowPrice = getArtprintRowPrice()
 
            break
        default:
            /** default action */
    }

    var messageElement = document.querySelector('.cart-message')
    messageElement.innerText = 'Added to Cart' 

    
   ///////////////////////////////////////////////////////
   //////////////////////////////////////////////////////
   /// Check if item already in the bascket
   ///
   /// loop though items and compare description
   /// If founf then it already in Basket 
   ///    increase number of that item (inc)
   /// else Add new Item
   ///
        











    // *************************************************************************/
    // Open localStorage and add this new item

    

    console.log('*********************************************')
    console.log(' *********  Gather Data *****************')

    // if localStorage exists append new record to end of array
    // else create localStorage and add first record

    var cartItemsJson
    var cartItems = []
    var index 
    var rowId

    if(localStorage.getItem(vooshopCart) === null){
        //create instance of localStorage  with empty array
        var newInstance = []
        var newInstanceJson = JSON.stringify(newInstance) 
        localStorage.setItem(vooshopCart,newInstanceJson)
        index = 0
        //-> console.log('add_cart_items : getItem = Null ')
        //-> console.log('add_cart_items : index = ', index)
    }else{
        cartItemsJson = localStorage.getItem(vooshopCart)
        cartItems = JSON.parse(cartItemsJson)
        index = cartItems.length
        //-> console.log('add_cart_items : getItem = Not Null ')
        //-> console.log('add_cart_items : cartItems =', cartItems)
        //-> console.log('add_cart_items : cartItems length =', cartItems.length)
        //-> console.log('add_cart_items : index = ', index)
    }
    
    rowId = merchType+index

    var newData = {
        "rowId" : rowId,
        "title" : title,
        "thumb" : thumImg,
        "size" : size,
        "colour" : mainCol,
        "extra" : extra,
        "description" : descObj,
        "quantity" : quantity,
        "itemPrice" : itemRowPrice
    }

    //-> console.log('********** After New Data Added *************')
    //-> console.log('cartitems array length = ', cartItems.length)
    //-> console.log('newData = ', newData)
    //-> console.log('cartItemsJson = ', cartItemsJson)

  
    //-> console.log('add_cart_items : merchType = ', merchType, typeof(merchType))
    //-> console.log('add_cart_items : index = ', index, typeof(index))
    //-> console.log('add_cart_items : rowId = ', rowId)




    cartItems.push(newData)
    cartItemsJson = JSON.stringify(cartItems)
    localStorage.setItem(vooshopCart, cartItemsJson)



    //-> cartItemsJson = localStorage.getItem(vooshopCart)
    //-> cartItems = JSON.parse(cartItemsJson)
    //-> console.log('add_cart_items : cartitems = ', cartItems)
 
    addPurchaseRow(thumImg, descObj, quantity, itemRowPrice, rowId)
    incCartTotal(itemRowPrice)


    // *********************************************************//
    // *********  Update Mysql *********************************//

}

































function inc(event) {
    console.log('**********************************')
    console.log('************   inc   *************')
    console.log('**********************************')
       
    var purchaseRowElement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
    var numElement = purchaseRowElement.querySelector('.num');
    console.log("purchase row => ", numElement)
    number = numElement.innerText
    number = parseInt(number);
    number++;
    numElement.innerText = number;

    /*** Update Local Storage  ****/

    var cartItemsJson = localStorage.getItem(vooshopCart)
    var cartItems = JSON.parse(cartItemsJson)

    var purchaseRowElement = event.target.parentElement.parentElement.parentElement.parentElement
    var target_Element = purchaseRowElement.getElementsByClassName('uniqueRowIdentifier')[0]
    var target = purchaseRowElement.getElementsByClassName('uniqueRowIdentifier')[0].innerText

    console.log('inc : purchaseRowElement = ', purchaseRowElement)
    console.log('inc : target Element = ', target_Element)
    console.log('inc : target  = ', target)
    console.log('inc : cartItems  = ', cartItems)
    console.log('**********************************')
    // loop through all abjects in the array in the cartItems
    // Check rowId to see if it is the target
    // Then this will locate item whose quantity we need to increase
    var seeker = 0
    for(var i=0; cartItems[i].rowId != target; i++){
        seeker++;
        console.log('****************************')
        console.log('inc : seeker = ', seeker)
        console.log('inc : cartItems[i].rowId = ', cartItems[i].rowId)
        console.log('inc : cartItems[i].quantity = ', cartItems[i].quantity)
    }
    
    cartItems[seeker].quantity++

    cartItemsJson = JSON.stringify(cartItems)
    localStorage.setItem(vooshopCart, cartItemsJson)
  
    console.log('inc : cartItems[seeker].rowId = ', cartItems[seeker].rowId)
    console.log('inc : cartItems[seeker].quantity = ', cartItems[seeker].quantity)


    updateBasketPrices(purchaseRowElement,number,'add')
  }













  function dec(event) {
    console.log('****************************************')
    console.log('************   decrement   *************')
    console.log('****************************************')

    var numItemsElement = event.target.parentElement.parentElement.parentElement.parentElement.querySelector('.num')
    var numItems = parseInt(numItemsElement.innerText)

    var itemRowClicked = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
    console.log("itemRowClicked => ",itemRowClicked)
    updateBasketPrices(itemRowClicked, numItems,'minus')



    /*** Update Local Storage  ****/
  
    var cartItemsJson = localStorage.getItem(vooshopCart)
    var cartItems = JSON.parse(cartItemsJson)

    var purchaseRowElement = event.target.parentElement.parentElement.parentElement.parentElement
    var target_Element = purchaseRowElement.querySelector('.uniqueRowIdentifier')
    var target = purchaseRowElement.querySelector('.uniqueRowIdentifier').innerText

    console.log('inc : purchaseRowElement = ', purchaseRowElement)
    console.log('inc : target Element = ', target_Element)
    console.log('inc : target  = ', target)
    console.log('inc : cartItems  = ', cartItems)
    console.log('**********************************')
    // loop through all abjects in the array in the cartItems
    // Check rowId to see if it is the target
    // Then this will locate item whose quantity we need to increase
    var seeker = 0
    for(var i=0; cartItems[i].rowId != target; i++){
        seeker++;
        console.log('inc : seeker = ', seeker)
        console.log('inc : cartItems[i].rowId = ', cartItems[i].rowId)
        console.log('inc : cartItems[i].quantity = ', cartItems[i].quantity)
    }
    

    if(numItems > 1){
        numItems--;
        numItemsElement.innerText = numItems;
        cartItems[seeker].quantity--
    }
    

    cartItemsJson = JSON.stringify(cartItems)
    localStorage.setItem(vooshopCart, cartItemsJson)
  
    console.log('inc : cartItems[seeker].rowId = ', cartItems[seeker].rowId)
    console.log('inc : cartItems[seeker].quantity = ', cartItems[seeker].quantity)
  }















  function remove_item(event) {
    console.log('**********************************')
    console.log('********   remove_items  *********')
    console.log('**********************************')

       
    var numItemsElement = event.target.parentElement.parentElement.parentElement.parentElement.querySelector('.num')
    var numItems = parseInt(numItemsElement.innerText)

    console.log("numE => ", numItems)
    console.log('remove_item: numItemsElement = ', numItemsElement)

    var itemRowClicked = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
    console.log("itemRowClicked => ",itemRowClicked)
    updateBasketPrices(itemRowClicked, numItems,'remove')


    itemRowClicked.remove()


   /*** Update Local Storage  ****/

   var cartItemsJson = localStorage.getItem(vooshopCart)
   var cartItems = JSON.parse(cartItemsJson)

   var purchaseRowElement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
   console.log("purchase row => ", event.target)
   var target_Element = purchaseRowElement.querySelector('.uniqueRowIdentifier')
   var target = purchaseRowElement.querySelector('.uniqueRowIdentifier').innerText

   console.log('inc : purchaseRowElement = ', purchaseRowElement)
   console.log('inc : target Element = ', target_Element)
   console.log('inc : target  = ', target)
   console.log('inc : cartItems  = ', cartItems)
   console.log('**********************************')
   // loop through all abjects in the array in the cartItems
   // Check rowId to see if it is the target
   // Then this will locate item whose quantity we need to increase
   var seeker = 0
   for(var i=0; cartItems[i].rowId != target; i++){
       seeker++;
       console.log('inc : seeker = ', seeker)
       console.log('inc : cartItems[i].rowId = ', cartItems[i].rowId)
       console.log('inc : cartItems[i].quantity = ', cartItems[i].quantity)
   }
   
   cartItems.splice(seeker,1)

   cartItemsJson = JSON.stringify(cartItems)
   localStorage.setItem(vooshopCart, cartItemsJson)

  }

  





















/* Swicth Main WIndow ScrollBArs and Greyout ON/Off */
function toggleMainwindow(){
    let overlay = document.getElementById("overlay")
    let mainWindowScrollbars = document.body

    overlay.classList.toggle('overlay-active')
    mainWindowScrollbars.classList.toggle("lock-mainwindow-scrollbars")
}











/****************************************************** */
/*
/*      When the Customer Details panel is opened it 
/*      does not automatically lock scrollbars and darken background
/*      as this will already be in effect
/*
/*      when closing it therfore needs to reverse the states
/*      to revert back to the default state
/*
/*************************************************************/
function closePanel(e){
    let panel = e.target.parentElement.parentElement

    if(panel.classList.contains("customerDetails-soft-panel")){
        /* Close button on Customer Details Clicked so no need to reverse the toggling */
    }else{
        check_if_customer_details_panel_is_open() /* reverse toggle states */
    }
    panel.classList.toggle("soft-load")
    toggleMainwindow()
}









/******************************************************************** */
/*
/*      merch-info-panel -  Slide out Panel
/*      used by Tee Shirts Page and Hoodys Pages
/*
/*      trigered by Event Listener  vooshopCartBar  
/*      on Main vooshop shopping cart bar
/*
/*      
/*
/********************************************************************** */
  function openMerchInfoPanel(){
    /*
    if(Vooshop panel is open){
        close Vooshop panel
        and set backround to its normal state
    }
     */
let vooshopPanel = document.querySelector(".shoppingCart-soft-panel")
let vooshopPanelOpen = false
if(vooshopPanel.classList.contains("soft-load") == true){
    vooshopPanelOpen = true
}
if(vooshopPanelOpen){
    vooshopPanel.classList.toggle("soft-load")
    toggleMainwindow()
}

check_if_customer_details_panel_is_open()


/* load Merch Info Panel */
panel = document.querySelector(".merch-soft-panel")
panel.classList.toggle("soft-load");
/* Grey Out the Main Window and Switch off Scrolling */
toggleMainwindow()

/* add eventListener for close button */
var closeBtn = panel.querySelector(".close-button")
closeBtn.addEventListener("click", closePanel)


};
//var merchInfoButton = document.querySelector("#merch-info-btn")
//merchInfoButton.addEventListener("click", openMerchInfoPanel)















































/******************************************************************** */
/*
/*      shoppingCart-soft-panel -  Slide out Panel
/*
/*      trigered by Event Listener  vooshopCartBar  
/*      on Main vooshop shopping cart bar
/*
/*      Triggerd by clicking on the Shopping Trolley icon
/*      On the main vooshop bar
/*
/********************************************************************** */
function open_cart() {
  

        /*
        /*  if(merchInfoPanel panel is open){
        /*      close merchInfoPanel panel
        /*      and set backround to its normal state
        /*  }
        */
        let merchInfoPanel = document.querySelector(".merch-soft-panel")
        let merchInfoPanelOpen = false
        if(merchInfoPanel.classList.contains("soft-load") == true){
            merchInfoPanelOpen = true
        }
        if(merchInfoPanelOpen){
            merchInfoPanel.classList.toggle("soft-load")
            toggleMainwindow()
        }


        check_if_customer_details_panel_is_open()


        /* load Vooshop Cart */
        let panel = document.querySelector(".shoppingCart-soft-panel")
        panel.classList.toggle("soft-load")
        toggleMainwindow()

        /* add eventListener for close button */
        var closeBtn = panel.querySelector(".close-button")
        closeBtn.addEventListener("click", closePanel)


        // Initialise Shopping Cart
        // Look for the localStorage session
        // if available load localStorage
        // else create localStorage session
        if(sessionActive == false){
                sessionActive = true

                // plugin shopping cart form EventListeners

                let cartForm = document.querySelector(".shoppingCart-soft-panel")
                console.log("********* cart form => ", cartForm)

                //cart add merch button Plus Sign
                let addItemBtn = document.querySelector("#add-item")
                addItemBtn.addEventListener("click", add_cart_item)

                //cart checkout button
                let cartCheckoutBtn =  document.querySelector("#cartCheckoutBtn")
                cartCheckoutBtn.addEventListener("click", getCustomerDetails)


                var incNumButtons = document.getElementsByClassName('plus')
                for (var i = 0; i < incNumButtons.length; i++) {
                    var incNumBtn = incNumButtons[i]
                    incNumBtn.addEventListener('click', inc)
                }

                var decNumButtons = document.getElementsByClassName('minus')
                for (var i = 0; i < decNumButtons.length; i++) {
                    var decNumBtn = decNumButtons[i]
                    decNumBtn.addEventListener('click', dec)
                }

                var wasteBasketButtons = document.getElementsByClassName('btn-danger')
                for (var i = 0; i < wasteBasketButtons.length; i++) {
                    var wasteBasketBtn = wasteBasketButtons[i]
                    wasteBasketBtn.addEventListener('click', remove_item)
                }

                let defaultItem = panel.querySelector(".dropdown-header")
                let title = document.title
                defaultItem.innerText = title

                // load basket from Local.storage()
                initialiseBasket()
        }



}
//var openCartBtn = document.querySelector('#openCartBtn')
//openCartBtn.addEventListener('click', open_cart) // Vooshop Panel Cart Btn



function check_if_customer_details_panel_is_open(){
    /* If cutomer details panel open */
    /* open cart panel */
    /* else If customer details panel is not open */
    /* open cart panel and toggle background */
    /* Grey Out the Main Window and Switch off Scrolling */
    /*                                                  */
    /* This essentially reverses the toggle states
    /* It is to prevent the background on/off getting out of sync */
    /* Due to the Customer Details Panel being left Open */
    let custDetailsPanel = document.querySelector(".customerDetails-soft-panel")
    let custDetailsOpen = false;
    if( custDetailsPanel.classList.contains("soft-load") == true){
        custDetailsOpen = true
    }
    if(custDetailsOpen){
        toggleMainwindow()
    }
}




















/******************************************************************** */
/*
/*      go_Checkout - called by the checkout button 
/*      on customer details slide panel
/*
/*      Triggerd by clicking on the Shopping Trolley Submit
/*      In the Shopping Cart 
/*
/********************************************************************** */
function go_checkout() {
    console.log('go_checkout : ')

    /* Validate Personal Details and Shipping Address */
    /* Triggered By Cart Slde Panel Checkout Button 
        the following fields cannot have null values
        firstname
        lastname
        email
        houseNumber
        street
        city
        Country
        Postcode
        if (all required field != null)
            formValid == true
        else
            formValid == false
        if(formValid == true)
            submit form to server processing. php, api etc
            return true
        else
            place error message in message box
            return false
    */
   let errors = ""
   let errorType = ""
   let requiredInputs = document.getElementsByClassName("required")

   listlen = requiredInputs.length;
   for(i=0; i<listlen; i++){
        if(requiredInputs[i].value == ""){
            errorType = requiredInputs[i].dataset.descriptor
            errors = errors + "<span>" + errorType + " </span>"
            
        }else{
            console.log("input not null", requiredInputs[i].innerText)
        }
   }
   console.log("erorrs => " + errors)
   
   if(errors ==  ""){
        let customer_order = "\n Customer Order \n--------------------------\n"
        let order_block = document.getElementById("order-block")
        let cartItems = [];
        let cartItemsJson;
        cartItemsJson = localStorage.getItem(vooshopCart)
        cartItems = JSON.parse(cartItemsJson)
        let desc = ""
        for (var item of cartItems){

            desc = item.description
            item_description =  "\nTitle :" + desc.title + 
                                "\nSize : " + desc.size +
                                "\nColour : " + desc.colour +
                                "\nExtra : " + desc.extra 
                                "\n\n"
            customer_order = customer_order + "\nItem : " + item_description
        }
        order_block.value = customer_order
        return true
       
   }else{
        let errorMessage = "<div class='required-info'>Please fill in the following fields</div>"
        errorMessage = errorMessage + errors
        let messageElement = document.querySelector(".cart-error-message")
        messageElement.classList.toggle("error")
        messageElement.innerHTML = errorMessage
        console.log("messageElement = ", messageElement)
        return false
   }

}

/******************************************************************** */
/*
/*      customerDetails-soft-panel -  Slide out Panel
/*
/*      trigered by Event Listener  *** in open_cart function  
/*      on Main vooshop shopping cart bar
/*
/*      Triggerd by clicking on the Shopping Trolley icon
/*      Inside the  vooshop shopping cart
/*
/********************************************************************** */
function getCustomerDetails(){

    /* This can only be triggered from inside the shopping cart
    /* close shopping cart */
    let vooshopCart = document.querySelector(".shoppingCart-soft-panel")
    vooshopCart.classList.toggle("soft-load")

    /* open getCustomerDetails soft panel */
    let panel = document.querySelector(".customerDetails-soft-panel")
    panel.classList.toggle("soft-load")

    /* add eventListener for close button */
    var closeBtn = panel.querySelector(".close-button")
    closeBtn.addEventListener("click", closePanel)

    // Shopping cart Checkout button is a submit, so 
    // that triggers the form submission functionality when clicked
    // triggers go_checkout()
    
}































