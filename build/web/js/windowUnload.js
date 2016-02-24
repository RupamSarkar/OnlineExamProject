/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var newtab=false ;
$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type  && !newtab ) {   
        switch (e.type) {
            case "blur":
                var check = confirm("Are you sure , you want to quit ?");
                if(check)
                {
                    $("#header1").text("exam closed!");
                    //stop the exam
                    newtab = true ;
                }
                else
                {    //continue 
                    return false ;
                }
                
                break;
        }
    }

    $(this).data("prevType", e.type);
});
window.onbeforeunload = function() {
    return 'Do you want to close the exam ? ';
}