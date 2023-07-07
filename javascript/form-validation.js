

function validate_enquiry_form(){
    let enquiry_form = document.getElementById("general_enquiry_form")
    let firstname = enquiry_form.querySelector("#firstname").value
    let lastname = enquiry_form.querySelector("#lastname").value 
    console.log("lastname ", lastname)
    let email = enquiry_form.querySelector("#email").value
    let message = enquiry_form.querySelector("#message").value

    let error = ""
    let error_status =  false

    if (firstname == "" || null){
      error_status = true
      error =  error + ", Your First Name, "
    }

    if (lastname == "" || null){
      error_status = true
      error =  error + ", Your Last Name, "
    }

    if (email == "" || null){
      error_status = true
      error =  error + ", Your email address, "
    }

    if (message == "" || null){
      error_status = true
      error =  error + ", Your enquiry message, "
    }


    if(error_status == true){
      error = "Please Enter Your: " + error
      errorElement = enquiry_form.querySelector(".enquiry-error-box")
      errorElement.innerText = error
      errorElement.classList.toggle("error-on")
      return false
    }else{
        return true
    }
}