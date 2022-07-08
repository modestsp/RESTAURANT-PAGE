function contact() {
    const main = document.createElement('main')
    main.classList.add('contact_main')
    const contact_title = document.createElement('h1')
    contact_title.textContent = "Contact Us"
    const twitter_link = document.createElement('a')
    twitter_link.textContent = "Twitter"
    const instagram_link = document.createElement('a')
    instagram_link.textContent = "Instagram"
    main.appendChild(contact_title)
    main.appendChild(twitter_link)
    main.appendChild(instagram_link)

    return main
}

export default contact;