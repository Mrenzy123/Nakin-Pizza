// business logic
function Pizza(size,crust,topping){
    this.Size = size;
    this.Crust = crust;
    this.Topping = topping;
}
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
function pizzaorder(){
    var likesize = parseFloat(document.getElementById('pizzasize').value);
    var  likecrust = parseFloat(document.getElementById('pizzacrust').value);
    var liketopping = parseFloat(document.getElementById('pizzatoppings').value);
}
// var checkedValue = document.getElementById('find').value;

// UI
$(document).ready(function(){
    $("form").submit(function(event){
    var likesize = parseFloat(document.getElementById('pizzasize').value);
    var likesize1 = document.getElementById('pizzasize').name;
    var  likecrust = parseFloat(document.getElementById('pizzacrust').value);
    var liketopping = parseFloat(document.getElementById('pizzatoppings').value);
    var total = (likesize + likecrust + liketopping);
    document.getElementById("getsizehistory").innerHTML = likesize1 + ":" + likesize;
    document.getElementById("getcrusthistory").innerHTML =   likecrust;
    document.getElementById("gettoppinghistory").innerHTML =  liketopping;
    document.getElementById("displaysum").innerHTML = total;
    document













    event.preventDefault();
    })
})
