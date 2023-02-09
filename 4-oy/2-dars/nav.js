const toRegister = document.querySelector('#to_register')
const toLogin = document.querySelector('#to_login')
const toUsers = document.querySelector('#to_users')

const loginSection = document.querySelector('section#login')
const registerSection = document.querySelector('section#register')
const usersSection = document.querySelector('section#users')

toRegister.onclick = () => {
    registerSection.classList.remove('hide')
    loginSection.classList.add('hide')
    usersSection.classList.add('hide')
}

toLogin.onclick = () => {
    loginSection.classList.remove('hide')
    registerSection.classList.add('hide')
    usersSection.classList.add('hide')
}

toUsers.onclick = () => {
    usersSection.classList.remove('hide')
    loginSection.classList.add('hide')
    registerSection.classList.add('hide')

    window.showUsers()
}
