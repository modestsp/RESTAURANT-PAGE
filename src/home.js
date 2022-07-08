function home() {
    const main = document.createElement('main')
    main.classList.add("home_main")
    const main_title = document.createElement('h2')
    main_title.textContent = "Our History"
    const main_para = document.createElement('p');
    main_para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti debitis hic eos at veritatis minus suscipit, molestiae possimus aliquam expedita saepe non porro architecto magni quia. Consequatur quae natus fugit."
    const home_background_img = document.createElement('img')

    main.appendChild(main_title);
    main.appendChild(main_para);
    main.style.backgroundImage = "../src/github-icon.svg";

    return main
}

export default home;