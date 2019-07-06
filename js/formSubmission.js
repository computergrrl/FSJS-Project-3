
/*************************************************************************
                          SUBMITTING THE FORM
*************************************************************************/
const $registerButton = $('button');

//event listener for submit button
$registerButton.click(function(e){

    //checks at least one checkbox is checked
    if (
    $('#totalCost').text() === "" ||
    $inputName.val() === "" ||
    $email.val() === "" ||
    !emailValidate($email.val())) {
        e.preventDefault();

          if($('#totalCost').text() === "") {
          $activitiesWarning.show();

    //Makes sure name field isn't blank
          }   if($inputName.val() === "") {
              $nameWarning.show();

    //Makes sure email field isn't blank
          }  if($email.val() === "") {
             $emailWarning2.show();

    //makes sure email is formatted correctly
          }  if(!emailValidate($email.val())) {
             $emailWarning.show();
          }
    }

       /* Following functions check that credit card, zip and CVV fields aren't empty and that all have been formatted correctly */
        if ($payment.val() === 'credit card') {

            if($ccInput.val() === "") {
              $ccWarning2.show();

          } if(!ccValidate($ccInput.val())) {
             $ccWarning.show();

          }  if($zipInput.val() === "") {
             $zipWarning2.show();

          }  if(!zipValidate($zipInput.val())) {
             $zipWarning.show();

          }  if($cvvInput.val() === "") {
             $cvvWarning2.show();

          }  if(!cvvValidate($cvvInput.val())) {
             $cvvWarning.show();

          }
    }

});






//////////////////////
