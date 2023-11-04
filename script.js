const carrousel = document.getElementById("carrousel")
const navimg = document.getElementById("navimg").childNodes
navimg.forEach(element => {
    element.addEventListener("click", movecarrousel)
});
function movecarrousel(e) {
    let desloc=e.target.id
    /*  carrousel.style.transform="tranlateX(100%)" */
    console.log(desloc)
    carrousel.style.transform = `translateX(${-desloc * 25}%)`
    
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
const minus = document.getElementById("minus")
const num = document.getElementById("qtd").children[1]
const plus = document.getElementById("plus")
let qtd = 0
minus.addEventListener("click", changeqtd)
plus.addEventListener("click", changeqtd)

function changeqtd() {
    if (this.id == "minus" && qtd != 0)
        qtd--
    else if (this.id == "plus")
        qtd++
    num.innerHTML = qtd
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
const button = document.getElementById("btnadd")

let cartqtd = 0
let compqtd = null

button.addEventListener("click", addcart)

function addcart() {
    cartqtd += parseInt(num.innerHTML)
    console.log(cartqtd)
    qtd = 0
    num.innerHTML = 0

}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
const iconcart = document.getElementById("iconcart")
const cart = document.getElementById("cart")

iconcart.addEventListener("click", showcart)

function showcart() {
    if (compqtd != cartqtd) {
        let empty = cart.children[1]
        let product = cart.children[2]
        let product_btn = cart.children[3]
        let cartprice = document.getElementById("cartprice")
        if (cartqtd == 0) {
            let empty = cart.children[1]
            let product = cart.children[2]
            empty.style.display = "flex"
            product.style.display = "none"
            product_btn.style.display = "none"
        }
        else {
            cartprice.innerHTML = `$125.00 x ${cartqtd} <strong>${cartqtd * 125}.00<\strong>`
            empty.style.display = "none"
            product.style.display = "flex"
            product_btn.style.display = "block"
        }

        compqtd = cartqtd
    }

    if (cart.style.display == "block")
        cart.style.display = "none"
    else
        cart.style.display = "block"
}
/*-------------------------------------------------------------------------------------------- */
const garbage = document.getElementById("delete")
garbage.addEventListener("click", deletecont)

function deletecont() {
    cartqtd = 0
    showcart()
}

/*-------------------------------------------------------------------------------------------- */
const iconmenu = document.getElementById("iconmenu")
const closemenu = document.getElementById("closemenu")
const backmenu = document.getElementById("backmenu")
const menu = document.getElementById("menu")
iconmenu.addEventListener("click", controlmenu)
closemenu.addEventListener("click", controlmenu)


/* console.log(navimg[0]) */
function controlmenu() {

    if (this.id == "iconmenu") {
        backmenu.style.display = "block"
        setTimeout(() => { menu.style.transform = "translateX(0)" }, 100)

    }
    else {
        menu.style.transform = "translateX(-240px)"
        setTimeout(() => { backmenu.style.display = "none" }, 480)
    }
}