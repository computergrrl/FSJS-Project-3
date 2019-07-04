/********************************************************************
                        PAYMENT INFO SECTION
*********************************************************************/

//input variables
const $cardDiv = $('#credit-card')
const $cardInfo = $('#credit-card label');
const $ccInput = $('#cc-num');
const $zipInput = $('#zip');
const $cvvInput = $('#cvv')
const $payment = $('#payment');
const $pTags = $('div p');


//hide the paypal and bitcoin options by default
$pTags.eq(1).hide();
$pTags.eq(2).hide();

  //event listener for when payment option is changed
  $payment.on('change' , function(){

    //if paypal is selected show paypal info and hide bitcoin and credit card options
    const $paymentMethod = $('#payment option:selected').val();
    if($paymentMethod === 'paypal') {
       $cardDiv.hide();
       $pTags.eq(2).hide();
       $pTags.eq(1).show();

      //if bitcoin selected, show bitcoin info and hide paypal and credit card options
    } else if($paymentMethod === 'bitcoin') {
       $cardDiv.hide();
       $pTags.eq(1).hide();
       $pTags.eq(2).show();

       //if credit card selectd hide the bitcoin and paypal options
    }  else {
        $pTags.eq(1).hide();
        $pTags.eq(2).hide();
        $cardDiv.show();
    }

  });

/************************
THE WARNING VARIABLES
*************************/
const $ccWarning = $('<span class="tooltip"> <b>Numbers only</b> Must be 13-16 digits </span>');
const $ccWarning2 = $('<span class="tooltip"> <b>*Can not be blank*</span>');
const $zipWarning = $('<span class="tooltip"> Must be 5 digits <b>Numbers only</b></span>');
const $zipWarning2 = $('<span class="tooltip"> <b>*Can not be blank*</span>');
const $cvvWarning = $('<span class="tooltip"> Can only be 3 digits<b>Numbers only</b></span>');
const $cvvWarning2 = $('<span class="tooltip"> <b>*Can not be blank*</span>');




//append all of the warnings but hide them initially
$ccInput.prev().append($ccWarning);
$ccWarning.hide();
$ccInput.prev().append($ccWarning2);
$ccWarning2.hide();
$zipInput.prev().append($zipWarning);
$zipWarning.hide();
$zipInput.prev().append($zipWarning2);
$zipWarning2.hide();
$cvvInput.prev().append($cvvWarning);
$cvvWarning.hide();
$cvvInput.prev().append($cvvWarning2);
$cvvWarning2.hide();

/****************************************************************
                    VALIDATION FUNCTIONS
*****************************************************************/

//function for validating whether credit card is numbers only 13-16 digits
function ccValidate(cardNumber) {
    return /^\d{13,16}$/.test(cardNumber);
}

//function for validating zip code is numbers only - 5 digits
function zipValidate(zip) {
    return /^\d{5}$/.test(zip);
}

//function for validating zip code is numbers only - 5 digits
function cvvValidate(cvv) {
    return /^\d{3}$/.test(cvv);
}

/*  function to check validations whenever a change is detected in input field  */
function validateInput(validationFunction, warning, warning2, value, input){

      //hide the *Required* warning if it's not already
      warning2.hide();

      /*if value doesn't match the reg expression test from whatever validator function is passed in then show the warning message */
      if(!validationFunction(value) && value !== "")  {
      warning.show();
      input.css("borderColor" , "red");

      //hide the warning message if value entered either matches criteria or if the field is blank or delet
    }  else if(validationFunction(value) || value === "") {
        warning.hide();
        input.css("borderColor" , "transparent");
    }


}

/* Function to remind users that field is required if they move away from that input and haven't yet met validation criteria  */
function checkIsEmpty(warning, value){

         if(value === "") {
           warning.show();
           return true;
         } else{
            return false;
         }
    }

/*********************
CREDIT CARD VALIDATION
**********************/

//event listener for credit card field
$ccInput.on("change keyup focus" , function () {

      //assign a variable to credit card input field value
      const $cardValue = $ccInput.val();

      //calling 1st validation function
      validateInput(ccValidate, $ccWarning, $ccWarning2, $cardValue, $ccInput);

});


$ccInput.on("blur" , function() {
      //assign variable to credit card input field value
      const $cardValue = $ccInput.val();

      //call 2nd validation function
      checkIsEmpty($ccWarning2, $cardValue);

});


/*********************
ZIP CODE VALIDATION
**********************/

//event listener for credit card field
$zipInput.on("change keyup" , function () {

      //assign a variable to credit card input field value
      const $zipValue = $zipInput.val();

      //calling 1st validation function
      validateInput(zipValidate, $zipWarning, $zipWarning2, $zipValue, $zipInput);

});

$zipInput.on("blur" , function() {
      // //assign variable to credit card input field value
      // const $zipValue = $ccInput.val();

      //call 2nd validation function
      checkIsEmpty($zipWarning2, $zipInput.val());

});


/*********************
CCV CODE VALIDATION
**********************/

//event listener for credit card field
$cvvInput.on("change keyup" , function () {

      //assign a variable to credit card input field value
      const $cvvValue = $cvvInput.val();

      //calling 1st validation function
      validateInput(cvvValidate, $cvvWarning, $cvvWarning2, $cvvValue, $cvvInput);

});

$cvvInput.on("blur" , function() {

      //call 2nd validation function
      checkIsEmpty($cvvWarning2, $cvvInput.val());

});
