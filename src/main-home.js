import { $content } from "."

function render() {

    const $pWelcome = document.createElement("p")
    $pWelcome.className = "cursive golden welcome"
    $pWelcome.textContent = "Welcome"

    const $h1 = document.createElement("h1")
    $h1.textContent = "LA GATEAU"

    const $hr = document.createElement("hr")

    const $pDescription = document.createElement("p")
    $pDescription.className = "text-center white"
    $pDescription.textContent = "The pleasure of eating with your hands. Good land!"

    const $button = document.createElement("button")
    $button.textContent = "SEE THE MENU"
    
    const $div = document.createElement("div")
    $div.className = "main-content"
    $div.append($pWelcome, $h1, $hr, $pDescription, $button)

    const $main = document.createElement("main")
    $main.className = "main"
    $main.appendChild($div)

    $content.appendChild($main)
}

export {render as renderHome}