import { renderNav } from "./navbar";
import { renderMainHome } from "./main-home";

const $content = document.getElementById("content");

function render(){
    renderNav()
    renderMainHome()
}

render();
export {$content};