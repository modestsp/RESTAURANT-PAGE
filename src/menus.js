

function menus() {
    const main = document.createElement('main');
    main.classList.add('menus_main')
    const menus_title = document.createElement('h2');
    menus_title.textContent = "Our Menu's";
    main.appendChild(menus_title);
    const menus_container = document.createElement('div');
    main.appendChild(menus_container);
    const menu1 = document.createElement('article')
    const menu2 = document.createElement('article')
    const menu3 = document.createElement('article')
    const menu4 = document.createElement('article')
    menu1.textContent = "Menu 1"
    menu2.textContent = "Menu 2"
    menu3.textContent = "Menu 3"
    menu4.textContent = "Menu 4"
    menus_container.appendChild(menu1)
    menus_container.appendChild(menu2)
    menus_container.appendChild(menu3)
    menus_container.appendChild(menu4)
    const para1 = document.createElement('p')
    para1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi iste, obcaecati debitis unde commodi, quis voluptate, esse veritatis praesentium qui placeat. Corrupti soluta sapiente alias veritatis neque nihil a!"
    const para2 = document.createElement('p')
    para2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi iste, obcaecati debitis unde commodi, quis voluptate, esse veritatis praesentium qui placeat. Corrupti soluta sapiente alias veritatis neque nihil a!"
    const para3 = document.createElement('p')
    para3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi iste, obcaecati debitis unde commodi, quis voluptate, esse veritatis praesentium qui placeat. Corrupti soluta sapiente alias veritatis neque nihil a!"
    const para4 = document.createElement('p')
    para4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi iste, obcaecati debitis unde commodi, quis voluptate, esse veritatis praesentium qui placeat. Corrupti soluta sapiente alias veritatis neque nihil a!"

    menu1.appendChild(para1)
    menu2.appendChild(para2)
    menu3.appendChild(para3)
    menu4.appendChild(para4)

    return main;
}



export {
    menus
};