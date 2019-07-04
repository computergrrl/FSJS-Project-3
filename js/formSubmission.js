
/*************************************************************************
                          SUBMITTING THE FORM
*************************************************************************/
const $registerButton = $('button');

//event listener for submit button
$registerButton.click(function(e){

    //checks at least one checkbox is checked
    if ($('#totalCost').text() === "") {
        e.preventDefault();
        $activities.focus();
        $activitiesWarning.show();

    //Makes sure name field isn't blank
    }  else if($inputName.val() === "") {
       e.preventDefault();
       $inputName.focus();
       $nameWarning.show();

    //Makes sure email field isn't blank
    }  else if($email.val() === "") {
       e.preventDefault();
       $email.focus();
       $emailWarning2.show();

    //makes sure email is formatted correctly
    }  else if(!emailValidate($email.val())) {
       e.preventDefault();
       $email.focus();
       $emailWarning.show();

    }

       /* Following functions check that credit card, zip and CVV fields aren't empty and that all have been formatted correctly */
       else if ($payment.val() === 'credit card') {

            if($ccInput.val() === "") {
              e.preventDefault();
              $ccInput.focus();
              $ccWarning2.show();

          }  else if(!ccValidate($ccInput.val())) {
             e.preventDefault();
             $ccInput.focus();
             $ccWarning.show();

          }  else if($zipInput.val() === "") {
             e.preventDefault();
             $zipInput.focus();
             $zipWarning2.show();

          }  else if(!zipValidate($zipInput.val())) {
             e.preventDefault();
             $zipInput.focus();
             $zipWarning.show();

          }  else if($cvvInput.val() === "") {
             e.preventDefault();
             $cvvInput.focus();
             $cvvWarning2.show();

          }  else if(!cvvValidate($cvvInput.val())) {
             e.preventDefault();
             $cvvInput.focus();
             $cvvWarning.show();

          }
    }

});






//////////////////////
