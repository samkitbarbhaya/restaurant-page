import { $content } from "./index"

const menu = [
    {
      name: "Shahi Paneer",
      description:
        "Mughalai cuisine having white gravy made from tomatoes and yogurt",
      price: "20$",
    },
    {
      name: "Caesar Salad",
      description:
        "Romanian lettuce with Caesar dressing, chuncky croutons and shaved pasmesan cheese",
      price: "12$",
    },
    {
      name: "Pizza Capricciosa",
      description:
        "Gorgonzola, zucchini, artichokes, jalapeno",
      price: "30$",
    },
  ];

function  render() {

    const $pCursive = document.createElement("p")
    $pCursive.textContent = "Welcome"
    $pCursive.className = "cursive golden"

    const $h1 = document.createElement("h1")
    $h1.textContent = "MENU"

    const $hrMain = document.createElement("hr")

    const $div = document.createElement("div")
    $div.className = "main-menu-content"
    $div.append($pCursive, $h1, $hrMain)

    menu.forEach((item)=>{
        const $divMenuItem = document.createElement("div")
        $divMenuItem.className = "menu-items"

        const $h5Menu = document.createElement("h5")
        $h5Menu.className = "golden"
        $h5Menu.textContent = item.name

        const $pMenu = document.createElement("p")
        $pMenu.textContent = item.description

        const $h6Menu = document.createElement("h6")
        $h6Menu.className = "golden"
        $h6Menu.textContent = item.price

        const $hrMenu = document.createElement("hr")

        $divMenuItem.append($h5Menu,$pMenu,$h6Menu, $hrMenu)
        $div.append($divMenuItem)
    })
    
    const $main = document.createElement("main")
    $main.className = "main"
    $main.appendChild($div)
    $content.appendChild($main) 
}

export {render as renderMenu};