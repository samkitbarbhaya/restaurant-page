import { renderNav } from "./navbar";
import { renderHome } from "./main-home";
import { renderFooter } from "./footer";
import { renderMenu } from "./main-menu";

const $content = document.getElementById("content");

function home(){
    renderHome()
    renderFooter()
}

function menu(){
    renderMenu()
    renderFooter()
}

renderNav();
home();

document.querySelectorAll("li").forEach((navElement)=>{
    navElement.addEventListener("click",(e)=>{
        let children = $content.childNodes;
        if(children.length>2){
            $content.removeChild(children[2])
            $content.removeChild(children[2])
        }
        if(e.target.className=="HOME"){
            home()
        }else if(e.target.className=="MENU"){
            menu()
        }
    })
})

export {$content};