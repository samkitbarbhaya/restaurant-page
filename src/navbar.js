import { $content } from "./index"

function render() {
    const navItems = ["HOME","MENU","CONTACT"]
    const $ul = document.createElement("ul")
    navItems.forEach((item)=>{
        const $li = document.createElement("li")
        $li.textContent = item
        $ul.appendChild($li)
    })
    const $nav = document.createElement("nav")
    $nav.className = "navbar"
    $nav.appendChild($ul)
    $content.appendChild($nav);
}

export { render as renderNav};