// business logic
function myDelivery(){
    var genderS = document.getElementById("myRadio");
    x.checked = true;
}
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return alert(val); // return value of checked radio or undefined if none checked
}
// UI
$(document).ready(function(){
    $("form").submit(function(event){
    var likeSize = parseFloat(document.getElementById('pizzasize').value);
    var  likeCrust = parseFloat(document.getElementById('pizzacrust').value);
    var likeTopping = parseFloat(document.getElementById('pizzatoppings').value);
    var likeQuantity = parseFloat(document.getElementById('pizzaquantity').value);
    var total = (likeSize + likeCrust + likeTopping + likeQuantity);
    document.getElementById("getsizehistory").innerHTML =  likeSize;
    document.getElementById("getcrusthistory").innerHTML =   likeCrust;
    document.getElementById("gettoppinghistory").innerHTML =  likeTopping;
    document.getElementById("displaysum").innerHTML = total;

    event.preventDefault();
    })
    $("form#delivery").submit(function(event){
        var checkVal 
    })
})
