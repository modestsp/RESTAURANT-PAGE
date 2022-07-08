import './style.css';
import { menus } from './menus.js'
import home from './home'
import contact from './contact';

function header() {
    const header = document.createElement('header');
    const titleLogo = document.createElement('h1');
    const ul = document.createElement('ul');
    const btn_home = document.createElement('button');
    btn_home.id = "btn_home";
    const btn_menus = document.createElement('button')
    btn_menus.id = "btn_menus"
    const btn_contact = document.createElement('button')
    btn_contact.id = "btn_contact"
    btn_home.textContent = "HOME"
    btn_menus.textContent = "MENUS"
    btn_contact.textContent = "CONTACT"
    titleLogo.textContent = "RESTAURANT"
    header.appendChild(titleLogo);
    header.appendChild(ul)
    ul.appendChild(btn_home)
    ul.appendChild(btn_menus)
    ul.appendChild(btn_contact)
    return header;
}



function footer() {
    const footer = document.createElement('footer');
    const gitHub = document.createElement('a')
    gitHub.textContent = "Copyright © 2022 srsebbi"
    const gitHub_icon = document.createElement('img');
    gitHub_icon.src = "../src/images/github-icon.svg"
    gitHub.href = "https://github.com/srsebbi"

    footer.appendChild(gitHub_icon);
    footer.appendChild(gitHub);

    return footer
}

const content = document.querySelector('.content')
content.appendChild(header()); // Header Creation
content.appendChild(home()); // Home creation
content.appendChild(footer()); //Footer Creation


// Removing main content and adding home section
const btn_home = document.querySelector('#btn_home')
btn_home.addEventListener('click', () => {
    content.removeChild(content.childNodes[1])
    const header = document.querySelector('header')
    header.insertAdjacentElement('afterend', home());
})


// Removing main content and adding menus section
const btn_menus = document.querySelector('#btn_menus')
btn_menus.addEventListener('click', () => {
    content.removeChild(content.childNodes[1]);
    const header = document.querySelector('header')
    header.insertAdjacentElement('afterend', menus());
})

// Removing main content and adding contact section
const btn_contact = document.querySelector('#btn_contact')
btn_contact.addEventListener('click', () => {
    content.removeChild(content.childNodes[1]);
    const header = document.querySelector('header')
    header.insertAdjacentElement('afterend', contact());
})

// import Background from './background-img.png'


// const myBackground = new Image();
// myBackground.src = Background;

// document.querySelector('body').style.backgroundImage = Background;