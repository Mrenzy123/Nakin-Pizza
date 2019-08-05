// business logic
// UI
$(document).ready(function(){
    var deliverAmount = 0;
    $("#ordernow").click(function(){
        var checkVal = $("input[name=Yes]:checked").val();
        if (checkVal === "yes"){
            deliverAmount = 700;
            var getLocation = prompt("Tell your location:");
            alert("Pizza will be delivered at " + getLocation);
        }
    })
    $("form").submit(function(event){
    var likeSize = parseFloat(document.getElementById('pizzasize').value);
    var  likeCrust = parseFloat(document.getElementById('pizzacrust').value);
    var likeTopping = parseFloat(document.getElementById('pizzatoppings').value);
    var likeQuantity = parseFloat(document.getElementById('pizzaquantity').value);
    var total = (likeSize + likeCrust + likeTopping + likeQuantity + deliverAmount);
    document.getElementById("getsizehistory").innerHTML =  likeSize;
    document.getElementById("getcrusthistory").innerHTML =   likeCrust;
    document.getElementById("gettoppinghistory").innerHTML =  likeTopping;
    document.getElementById("displaysum").innerHTML = total;
    event.preventDefault();
    })
})
