window.onscroll = function() {
    const scroll = document.getElementById('header-logo-img')
    if(document.documentElement.scrollTop >50 || document.body.scrollTop >50) {
        scroll.style.width = '30%'
    }
    else {
        scroll.style.width = '60%'
        
    }

}






function showHeaderSearch() {
    const showSearch = document.querySelector('.header-search-input')
    console.log(showSearch)
    showSearch.classList.toggle('header-search-input-show')
}

function navigation() {
    const navigate = document.querySelector('.img-slide')
    navigate.classList.toggle('navigation')
    console.log(navigate)
}

function dishMain({img, name, price}) {
    const dishs = document.getElementById('menu-row-1')
    if (dishs) {
        const dish = document.createElement('div')
        dish.classList.add('row')
        console.log(dish)
        dish.innerHTML = `
        <div class="col p-3 t-3 m-12 col-menu">
            <div class="dish">
                <img class="dish-img" src="${img}" alt="">
                <div class="dish-info">
                    <h3 class="dish-name">${name}</h2>
                        <span class="dish-price">From $${price}</span>
                        <span class="dish-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                        <button class="pre-oder">Pre-Order</button>
                </div>
            </div>
        </div>
        <div class="col p-3 t-3 m-12 col-menu">
            <div class="dish">
                <img class="dish-img" src="/assests/img/steak-1.jpg" alt="">
                <div class="dish-info">
                    <h3 class="dish-name">Rib Eye Steak</h2>
                    <span class="dish-price">From $500</span>
                    <span class="dish-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span>
                    <button class="pre-oder">Pre-Order</button>
                </div>
            </div>
        </div>
        <div class="col p-3 t-3 m-12 col-menu">
            <div class="dish">
                <img class="dish-img" src="/assests/img/steak-2.jpg" alt="">
                <div class="dish-info">
                    <h3 class="dish-name">Tenderloin Steak</h2>
                    <span class="dish-price">From $300</span>
                    <span class="dish-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span>
                    <button class="pre-oder">Pre-Order</button>
                </div>
            </div>
        </div>
        <div class="col p-3 t-3 m-12">
            <div class="dish">
                <img class="dish-img" src="/assests/img/steak-3.jpg" alt="">
                <div class="dish-info">
                    <h3 class="dish-name">Striploin Steak</h2>
                    <span class="dish-price">From $200</span>
                    <span class="dish-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span>
                    <button class="pre-oder">Pre-Order</button>
                </div>
            </div>
        </div>
        `
        dishs.appendChild(dish)
    }
    
}

function Appetizer() {
    dishMain({
        img: '/assests/img/steak-2.jpg',
        name: 'Rump Steak',
        price: '300'});
        
}


// 


function  showReserve(){
    const register = document.getElementById('show-Form-register')
    if(register){
        const registerNew = document.createElement('div')
        registerNew.classList.add('form-register')
        registerNew.innerHTML = `
        <div onclick="back()" class="form-register-overlay"></div>
        <div class="contact-form contact-form-show">
            <i onclick="back()" class="fas fa-times contact-form-show-close"></i>
            <div class="contact-form-content">
                <h2>Get in touch</h2>
                <div class="contact-form-input">
                    <input class="contact-form-input-item contact-form-input-item-1" type="text" placeholder="Name">
                    <input class="contact-form-input-item" type="text" placeholder="Phone Number">
                </div>
                <input class="contact-form-input-item" type="text" placeholder="Content">
                <input class="contact-form-input-item" type="text" placeholder="Note">
                <button onclick="sendMessage()" class="contact-form-btn">Send</button>
            </div>
        </div>
        `
        register.appendChild(registerNew)
    }
}
function showregister1(){
    showReserve();
}
function back(){
    const register = document.getElementById('show-Form-register')
    register.innerHTML = ''
}
function sendMessage() {
    alert('Thanks For send request. Restaurant is currently not oparating ')
    const register = document.getElementById('show-Form-register')
    register.innerHTML = ''
}