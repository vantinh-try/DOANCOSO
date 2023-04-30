//Khởi tạo các đối tượng mặt hàng, ở đây em lấy tầm 6 cái nha anh em
const product = [
    {
        id: 0,
        image: './RAM1.jpg',
        title: 'Kingston Fury Beast',
        price: 6190000
    },
    {
        id: 3,
        image: './VGA1.png',
        title: 'RTX 4090ti',
        price: 55690000
    },
    {
        id: 4,
        image: './VGA6.jpg',
        title: 'AMD Radeon RX6700XT',
        price: 14590000
    },
    {
        id: 2,
        image: './13900K-KF-1-228x228.jpg',
        title: 'Intel Core i9 13900KF',
        price: 12190000
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var{image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            </div>
            <p>${title}</p>
            <h2>${price}</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Thêm vào giỏ</button>" + `</div>
        </div>`
    )
}).join('');

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function displaycart(a){
    let j = 0, total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length == 0){
        document.getElementById('cart-item').innerHTML = "Giỏ hàng đang trống";
        document.getElementById('total').innerHTML = 0 + "đ";
    }
    else{
        document.getElementById('cart-item').innerHTML = cart.map((items) => {
            var{image, title, price} = items;
            total+=price;
            document.getElementById('total').innerHTML = total + "đ";
            return(
                `<div class='cartitem'>
                <div class'row-img'>
                    <img class='rowimg' src = ${image}>
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

let popup = document.getElementById('popup');

function openPopup(){
    popup.classList
}


