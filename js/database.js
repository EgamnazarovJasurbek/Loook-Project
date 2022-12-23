let users = window.localStorage.getItem('users')
let foods = window.localStorage.getItem('foods')
let orders = window.localStorage.getItem('orders')


users = JSON.parse(users) || [
    { userId: 1, username: 'Odil', contact: "998994742222" },
    { userId: 2, username: 'Ali', contact: "998911031337" },
    { userId: 3, username: 'Shoxrux', contact: "998941646446" },
    { userId: 4, username: 'Nurali', contact: "998941631233" }
] 

foods = JSON.parse(foods) || [
    { foodId: 1, foodName: 'burger cheese', foodImg: './img/burger_cheese.jpeg' },
    { foodId: 2, foodName: 'chicken togora', foodImg: './img/chicken_togora.jpeg' },
    { foodId: 3, foodName: 'chicken wings', foodImg: './img/chicken_wings.jpeg' },
    { foodId: 4, foodName: 'cola', foodImg: './img/cola.jpeg' },
    { foodId: 5, foodName: 'combo', foodImg: './img/combo.jpeg' },
    { foodId: 6, foodName: 'fanta', foodImg: './img/fanta.jpeg' },
    { foodId: 7, foodName: 'spinner', foodImg: './img/spinner.jpeg' },
]

orders = JSON.parse(orders) || [
    { userId: 1, foodId: 1, count: 2 }, // Odil 2 burger cheese order
    { userId: 2, foodId: 5, count: 3 }, // Ali 3ta combo order
    { userId: 3, foodId: 2, count: 2 } // Shoxrux 2ta chicken togora order 
]