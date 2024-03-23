let incrBtn = document.getElementsByClassName('incr')[0];
let decrBtn = document.getElementsByClassName('decr')[0];
let realPrice1 = document.getElementsByClassName('realPrice1')[0].textContent;
let realPrice2 = document.getElementsByClassName('realPrice2')[0].textContent;
let realItem1 = Number(realPrice1);
let realItem2 = Number(realPrice2);

incrBtn.addEventListener('click', function incrval() {
    let changedItem = document.getElementById('chngngvalue').textContent;
    let changedNumber = Number(changedItem) + 1;
    let addCartitem =  document.getElementById('chngngvalue').innerHTML = changedNumber;

    let addCartitem1 =  document.getElementById('chngngvalue2').textContent;
    let addCinum = Number(addCartitem1)


    let newTotal1 = addCartitem * realItem1;
    document.getElementsByClassName('totalPrice1')[0].innerHTML = newTotal1;

    let ret = document.getElementsByClassName('totalPrice2')[0].textContent;
    let newTotal2 = Number(ret);
    let cartTotal = newTotal1 + newTotal2;
  

    document.getElementById('tprice').innerHTML = cartTotal;

    let cartTotallst = addCartitem + addCinum 
    console.log(cartTotallst)
    document.getElementById('tcart').innerHTML = cartTotallst;

})

decrBtn.addEventListener('click', function deccrval() {
    let changedItem = document.getElementById('chngngvalue').textContent;
    let changedNumber = Number(changedItem) - 1;
    let removeCartitem =  document.getElementById('chngngvalue').innerHTML = changedNumber;
    if (removeCartitem < 0) {
        alert("Item not be in negative");
        event.preventDefault();
    }
    else {
        let changedNumber = Number(changedItem) - 1;
        let removeCartitem =  document.getElementById('chngngvalue').innerHTML = changedNumber;

        let newTotal1 = removeCartitem  * realItem1;
        document.getElementsByClassName('totalPrice1')[0].innerHTML = newTotal1;


        let ret = document.getElementsByClassName('totalPrice2')[0].textContent;
        let newTotal2 = Number(ret);
        let cartTotal = newTotal1 + newTotal2;
        
        document.getElementById('tprice').innerHTML = cartTotal;

        let addCartitem1 =  document.getElementById('chngngvalue2').textContent;
        let addCinum = Number(addCartitem1)


        let cartTotallst = removeCartitem + addCinum 
        console.log(cartTotallst);
        document.getElementById('tcart').innerHTML = cartTotallst;



    }
})


// -=-=-=--=-==-=-=-=-=-=-==-=-=-=---=--=-=--=-=-===-----=-=-=--=-==-=-=-=-=-=-==-=-=-=---=--=-=--=-=-===----

let incrBtn2 = document.getElementsByClassName('incr2')[0];
let decrBtn2 = document.getElementsByClassName('decr2')[0];

incrBtn2.addEventListener('click', function incrval() {
    let changedItem = document.getElementById('chngngvalue2').textContent;
    let changedNumber = Number(changedItem) + 1;
    let itemAdded = document.getElementById('chngngvalue2').innerHTML = changedNumber;

    let itemPuu = document.getElementById('chngngvalue').textContent;
    let cartPrev = Number(itemPuu);


    let newTotal2 = changedNumber * realItem2;
    document.getElementsByClassName('totalPrice2')[0].innerHTML = newTotal2;

    let ret = document.getElementsByClassName('totalPrice1')[0].textContent;
    let newTotal1 = Number(ret);
    let cartTotal = newTotal1 + newTotal2;
    console.log(cartTotal)
    document.getElementById('tprice').innerHTML = cartTotal;

    let totalCart = cartPrev + itemAdded;
    console.log(totalCart);
    document.getElementById('tcart').innerHTML = totalCart;



})

decrBtn2.addEventListener('click', function deccrval() {
    let changedItem = document.getElementById('chngngvalue2').textContent[0];
    let changedNumber = Number(changedItem) - 1;
    if (changedNumber < 0) {
        alert("Item not be in negative");
        event.preventDefault();
    }
    else {
        let changedNumber = Number(changedItem) - 1;
        let cartAftertotal = document.getElementById('chngngvalue2').innerHTML = changedNumber;

        let newTotal2 = changedNumber * realItem2;
        document.getElementsByClassName('totalPrice2')[0].innerHTML = newTotal2;

        let prevCartitems = document.getElementById('chngngvalue').textContent;
        let prevcart = Number(prevCartitems)



        let ret = document.getElementsByClassName('totalPrice1')[0].textContent;
        let newTotal1 = Number(ret);
        let cartTotal = newTotal1 + newTotal2;
        console.log(cartTotal)
        document.getElementById('tprice').innerHTML = cartTotal;

        let cc = cartAftertotal + prevcart;
        console.log(cc);
        document.getElementById('tcart').innerHTML = cc;

    }
})