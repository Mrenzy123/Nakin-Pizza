// business logic
// function Pizza(size,crust,topping){
//     this.Size = size;
//     this.Crust = crust;
//     this.Topping = topping;
// }
// function Smallpizza(){
//     var size = small;
//     var price = 950;
// }
// function mediumpizza(){
//     var size = medium;
//     var price = 1050;
// }
// function largepizza(){
//     var size = large;
//     var price = 1550;
// }
// function pizzaorder(){
//     var likesize = parseFloat(document.getElementById('pizzasize').value);
//     var  likecrust = parseFloat(document.getElementById('pizzacrust').value);
//     var liketopping = parseFloat(document.getElementById('pizzatoppings').value);
// }
// var checkedValue = document.getElementById('find').value;

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
