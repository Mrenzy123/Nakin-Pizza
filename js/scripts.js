// business logic

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
})
