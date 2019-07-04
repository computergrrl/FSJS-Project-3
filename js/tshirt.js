/*******************************************************************
                        T-SHIRT INFO SECTION
 ********************************************************************/

const $shirtTheme = $('#design');
const $theme = $('#design option:selected').val();
const $shirtColors = $('#colors-js-puns option');
const $shirtColorsMenu = $('#colors-js-puns');

if($theme === 'Select Theme') {
    $shirtColorsMenu.hide();
}
//event listener to detect change in the dropdown menu
$shirtTheme.on('change' , function(){


          //set a variable to the value of option selected in from dropdown
          const $theme = $('#design option:selected').val();

              if($theme === 'js puns') {
                  $shirtColorsMenu.show();
                  $shirtColors.eq(0).prop('selected' , 'true');


                  //show the first 3 and hide the last 3
                  $shirtColors.eq(3).hide();
                  $shirtColors.eq(4).hide();
                  $shirtColors.eq(5).hide();
                  $shirtColors.eq(0).show();
                  $shirtColors.eq(1).show();
                  $shirtColors.eq(2).show();



              } else if($theme === 'heart js') {

                    $shirtColorsMenu.show();
                    $shirtColors.eq(3).prop('selected' , 'true');

                    //show the last 3 and hide the first 3
                    $shirtColors.eq(0).hide();
                    $shirtColors.eq(1).hide();
                    $shirtColors.eq(2).hide();
                    $shirtColors.eq(3).show();
                    $shirtColors.eq(4).show();
                    $shirtColors.eq(5).show();

                //otherwise show all shirt color options
              }  else if($theme === 'Select Theme') {

                     $shirtColorsMenu.hide();
              }


          });
