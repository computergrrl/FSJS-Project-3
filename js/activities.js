/*******************************************************************
                        ACTIVITIES SECTION
******************************************************************/

const $activities = $('.activities input');
const $labels = $('.activities label');
const $act = $('.activities');

//create and append a p and span to display total cost in
const $showTotal = $('<p>Total Cost: $ <span id="totalCost"></span></p>');
$act.append($showTotal);

//create warning variable for if no boxes are checked upon submit
$activitiesWarning = $('<span>You must select at least one activity</span>');
$act.append($activitiesWarning);
//$activitiesWarning.hide();


//event listener for when there's a change in the activities section
$activities.on('change', function(e){

/************************************
FUNCTION TO ENABLE/DISABLE ACTIVITIES
***********************************/
    function activitiesToggler(inputName, itemNumber) {
    //checks if checked box has name equal to inputName argument
        if(e.target.getAttribute('name') === inputName) {

          /* If checkbox name equals inputName then toggle the css "disabled" class that I added to styles.css page */
              $labels.eq(itemNumber).toggleClass("disabled");

            /* Then check if the checkbox is disabled. If it is enable it and if it's already enabled then disable it*/
          if($activities.eq(itemNumber).prop("disabled")) {
             $activities.eq(itemNumber).prop("disabled" , false);

         } else if($activities.eq(itemNumber).prop("disabled" , false)) {
               $activities.eq(itemNumber).prop("disabled" , true);
           }

         }
    }
    /* run the activitiesToggler function on all 4 boxes which might conflict and enable or disable them accordingly */
    activitiesToggler("js-frameworks" , 3);
    activitiesToggler("express" , 1);
    activitiesToggler("js-libs" , 4);
    activitiesToggler("node" , 2);


      //create variable named total to store total price
      let total = 0;

      //if the first item is checked then add 200 to total
      const $main = $('#main');
      if ($main.prop("checked")) {
          total += 200;
      }
      /*
      loop through all the remaining check boxes to determine total. If checkbox is checked then add 100 to the total (start loop at i = 1 since we want to skip the first item in the list and the list is zero-indexed)
      */
      for (let i =1; i <= $activities.length; i++) {
           if ($activities.eq(i).prop("checked")) {
             total += 100;
           }
      }
      //update the total
      $('#totalCost').text(total);


}); //end of event listener
