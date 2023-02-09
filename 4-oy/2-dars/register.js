const username = document.querySelector('#reg_username')
const password = document.querySelector('#reg_password')
const name = document.querySelector('#reg_name')
const age = document.querySelector('#reg_age')

const register = document.querySelector('button#register')

register.onclick = () => {

    window.users = []

    const user = {
        "username": username.value,
        "password": password.value,
        "name": name.value,
        "age": age.value
}
   //save user
   window.users.push(user)
}