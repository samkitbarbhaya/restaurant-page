import { $content } from "./index"

function render() {
    const $footer = document.createElement("footer")
    $footer.className = "footer"

    const $p = document.createElement("p")
    $p.textContent = "Developed by Samkit Barbhaya"

    $footer.appendChild($p)
    
    $content.appendChild($footer)
}

export { render as renderFooter};