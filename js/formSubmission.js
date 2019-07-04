
/*************************************************************************
                          SUBMITTING THE FORM
*************************************************************************/
const $registerButton = $('button');

$registerButton.click(function(e){


    if ($('#totalCost').text() === "") {
        e.preventDefault();
        $activitiesWarning.show();
    }

});






//////////////////////
