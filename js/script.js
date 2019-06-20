
/***************************Job Role Section***************************/

const $inputName = $('#name');
const $jobRole = $('#other-title');



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

/***********************T-Shirt Info Section ****************************/

const $shirtTheme = $('#design');
const $shirtColors = $('#colors-js-puns option');


//event listener to detect change in the dropdown menu
$shirtTheme.on('change' , function(){


          //set a variable to the value of option selected in from dropdown
          const $theme = $('#design option:selected').val();

              if($theme === 'js puns') {
                  //show the first 3 and hide the last 3

                  $shirtColors.eq(3).hide();
                  $shirtColors.eq(4).hide();
                  $shirtColors.eq(5).hide();



              } else if($theme === 'heart js') {


                    //show the last 3 and hide the first 3
                    $shirtColors.eq(0).hide();
                    $shirtColors.eq(1).hide();
                    $shirtColors.eq(2).hide();


              }  else {

                     $shirtColors.show();
              }


          });
