import { renderNav } from "./navbar";
import { renderMainHome } from "./main-home";
import { renderFooter } from "./footer";

const $content = document.getElementById("content");

function render(){
    renderNav()
    renderMainHome()
    renderFooter()
}

render();
export {$content};