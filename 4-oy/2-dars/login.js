const username = document.querySelector('#username')
const password = document.querySelector('#password')

const login = document.querySelector('button#login')

login.onclick = () => {
    let _username = username.value
    let _password = password.value

    let user = window.users.find(u => u.password == _password && u.username == _username)

    if(user == undefined){
        alert('User not found, please register')
    }
    else{
        alert('Successful register')
    }
}