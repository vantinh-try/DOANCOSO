//Khởi tạo các đối tượng mặt hàng, ở đây em lấy tầm 6 cái nha anh em
const product = [
    {
        id: 0,
        image: './RAM1.jpg',
        title: 'Kingston Fury Beast',
        price: 6190000
    },
    {
        id: 1,
        image: './cat_ laptop_v2.png',
        title: 'ASUS ROG Strix G17',
        price: 54490000
    },
    {
        id: 2,
        image: './Z790M AORUS ELITE AX-01-228x228.png',
        title: 'Mainboard Z790M AORUS ELITE',
        price: 12000000
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
    var(image, title, price)
})

