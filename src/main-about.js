import { $content } from "."

function render() {

    const $pWelcome = document.createElement("p")
    $pWelcome.className = "cursive golden welcome"
    $pWelcome.textContent = "Welcome"

    const $h1 = document.createElement("h1")
    $h1.textContent = "ABOUT US"

    const $hr = document.createElement("hr")

    const $pParagraph = document.createElement("p")
    $pParagraph.className = "text-center white"
    $pParagraph.textContent = "Welcome to our Indian restaurant where we bring the rich and diverse flavors of India to your table. Our restaurant is a family-owned business that has been serving the community for many years. We take great pride in our authentic Indian dishes and strive to offer our customers a memorable dining experience."
 
    const $button = document.createElement("button")
    $button.className = "menu-button"
    $button.textContent = "SEE THE MENU"

    const $div = document.createElement("div")
    $div.className = "main-about-content"
    $div.append($pWelcome, $h1, $hr, $pParagraph)

    const $main = document.createElement("main")
    $main.className = "main"
    $main.appendChild($div)

    $content.appendChild($main)
}

export {render as renderAbout}