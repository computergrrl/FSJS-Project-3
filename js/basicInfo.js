/******************************************************************
                      BASIC INFO SECTION
********************************************************************/

//variables used for this section
const $inputName = $('#name');
const $nameLabel = $inputName.prev();
const $nameWarning = $('<span class="tooltip"><b>Name field can not be blank</b></span>');
const $jobRole = $('#other-title');
const $email = $('#mail');
const $emailLabel = $email.prev();
const $emailWarning = $('<span class="tooltip"><b> Email must be in the format: name@provider.com</b></span>');
const $emailWarning2 = $('<span class="tooltip"><b> Email field can not be blank</b></span>');

//append name warning message but hide it initially
$nameLabel.append($nameWarning);
$nameWarning.hide();


$inputName.on("change keyup" , function () {

      //if name field warning is displayed remove it if a not null value is entered
      if($inputName.val() !== "") {
        $nameWarning.hide();
      }

});


//append email warnings but hide them initially
$emailLabel.append($emailWarning);
$emailWarning.hide();
$emailLabel.append($emailWarning2);
$emailWarning2.hide();

//function to validate correct email format
function emailValidate(email) {
  //return /[^@]+@[a-z]+\.[a-z]+/i.test(email);

return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

/*********************
EMAIL VALIDATION
*********************/

//event listener for change in email input
$email.on("change keyup" , function () {

      //assign a variable to credit card input field value
      const $emailValue = $email.val();

      //calling 1st validation function
      validateInput(emailValidate, $emailWarning, $emailWarning2, $emailValue, $email);

      if($emailValue !== "") {
        $emailWarning2.hide();
      }

});

//hide other job Role input field
$jobRole.hide();


//auto focus on name field upon page load
$inputName.focus();

const $jobTitle = $('#title');

//event listener to add text box if "other" is selected in dropdown menu
$jobTitle.on('change' , function(){

          //set a variable to the value of option selected in from dropdown
          const $selected = $('#title option:selected').val();

          //if "other" is selected then show hidden field
          if ($selected === 'other') {

          $jobRole.show();

         //if any other option is selected hide the extra text field
      }  else {
          $jobRole.hide();
      }

});
