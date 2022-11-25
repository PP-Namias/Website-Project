//show cart toggle on
(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
})();

// How much items selected and what total price before selecting any items
(function(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
    
    const totalMoney = total.reduce((total, item) => {
        total += item;
        return total;
    }, 0)
    const finalMoney = totalMoney.toFixed(2);
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length
    
})();

// add items to the cart
(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = 
                event.target.parentElement.previousElementSibling.src;
                
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;

                let name = event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                const cartItem = document.createElement('div');
                cartItem.classList.add(
                    'cart-item',
                    'd-flex', 
                    'justify-content-between',
                    'text-capitalize',
                    'my-3');

                cartItem.innerHTML = `
                  <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                  <div class="item-text">
      
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>₱</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                  </div>
                  <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                  </a>
                </div>
                `;

                // select  cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert('Item added to the cart');
                
                showTotals();
            }
        })
    })

    // show Totals after selecting any items
    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        })
        
        const totalMoney = total.reduce((total, item) => {
            total += item;
            return total;
        }, 0)
        const finalMoney = totalMoney.toFixed(2);
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length
        
    }
})();

data_filter("all")
function data_filter(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    namiasRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) namiasAddClass(x[i], "show");
  }
}

function namiasAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function namiasRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      ;     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/* END OF THE app.js FILE IN PERFORMANCE TASK 1 & 2 AT COMPUTER PROGRAMMING */