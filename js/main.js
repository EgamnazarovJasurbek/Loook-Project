const customersList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('.customer-name')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')


function renderUsers() {
    customersList.innerHTML = null

    for (let user of users) {
        const [li,span,a] = createElement('li','span','a')
        // let li = document.createElement('li')
        // let span = document.createElement('span') 
        // let a = document.createElement('a')

        li.classList.add('customer-item')
        span.classList.add('customer-name')
        a.classList.add('customer-phone')

        a.setAttribute('href',"tel:" + user.contact)
        span.textContent = user.username
        a.textContent = user.contact

        li.append(span,a)
        customersList.append(li)

        li.addEventListener('click', () => {
            renderOrders(user.userId)
            customerName.textContent = user.username
            clientId.textContent = user.userId

            window.localStorage.setItem('userId', user.userId)
            window.localStorage.setItem('username', user.username)
        })
    }
    
}


function renderFoods() {
    for (const food of foods) {
        const [option] = createElement('option')
        
        option.textContent = food.foodName
        option.value = food.foodId

        foodsSelect.append(option)
    }
}


function renderOrders(userId) {
    if(!userId) return
    ordersList.innerHTML = null

for(let order of orders){
    if(!(order.userId == userId)) continue
       
    const food = foods.find(el => el.foodId == order.foodId);
    

    const [liEl,imgEl,divEl,nameEl,countEl] = createElement('li','img','div','span','span')
   
    liEl.classList.add('order-item')
    nameEl.classList.add('order-name')
    countEl.classList.add('order-count')
    imgEl.setAttribute('src', food.foodImg)

    nameEl.textContent = food.foodName
    countEl.textContent = order.count

    divEl.append(nameEl,countEl)
    liEl.append(imgEl,divEl)
    ordersList.append(liEl)
}
}


function addOrder(event){
    event.preventDefault()

    const foodId = foodsSelect.value
    const count = foodsCount.value
    const userId = clientId.innerHTML

    let order = orders.find(el => el.foodId == foodId && el.userId == userId)

    if(
        !count ||
        +count > 10 ||
        !userId
    ) return
    
    if(order){
        order.count = +count + +order.count
    } else {
        order = {foodId:foodId, userId:userId, count:count}
        orders.push(order)
    }
    window.localStorage.setItem('orders', JSON.stringify(orders))
    return renderOrders(userId)
}


userAdd.addEventListener('submit',(event) => {
    event.preventDefault()
    const username = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()

    if(!username || username.length > 20) {
        return alert('Invalid Username❌')
    }

    if(!(/998(9[01345789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)){
        return alert('Invalid contact❌')
    }

    const newUser = {
        userId: users.length ? users[users.length - 1].userId + 1 : 1,
        username: username, // key bn value bir xil bop qosa bita keyni ozini yozsa boladi
        contact: contact 
    }
    users.push(newUser)
    window.localStorage.setItem('users', JSON.stringify(users))
    return renderUsers()
})

foodsForm.addEventListener('submit', addOrder)



const userId = window.localStorage.getItem('userId')
const username = window.localStorage.getItem('username')
username && (customerName.textContent = username)
userId && (clientId.textContent = userId)


renderUsers()
renderFoods()
renderOrders(userId)


// CRUD => Create read update delete
// malumotni = qoshish oqish ozgartirish delete