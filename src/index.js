import { renderNav } from "./navbar";
import { renderHome } from "./main-home";
import { renderFooter } from "./footer";
import { renderMenu } from "./main-menu";
import { renderAbout } from "./main-about";

const $content = document.getElementById("content");

function home(){
    renderHome()
    renderFooter()
}

function menu(){
    renderMenu()
    renderFooter()
}

function about(){
    renderAbout()
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
        }else if(e.target.className=="ABOUT"){
            about()
        }
    })
})

document.addEventListener( "click",(e)=>{
    const target = e.target.innerText
    if(target!="SEE THE MENU") return
    let children = $content.childNodes;
    if(children.length>2){
        $content.removeChild(children[2])
        $content.removeChild(children[2])
    }
    menu()
})

export {$content};