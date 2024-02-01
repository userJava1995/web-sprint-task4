let users = [
    {
        'email': 'ilyas@gmail.com',
        'password': '123',
        'fullName': 'Ilyas Zhuanyshev',
        'country': 'Kazakhstan',
        'birthdate': '1990-03-22'
    }
]

function registerInit() {
    document.querySelector('.btn').addEventListener('click', register)
}

function loginInit() {
    document.querySelector('.btn').addEventListener('click', login)
}

function register() {
    let email = document.querySelector('.email').value
    let passsword = document.querySelector('.password').value
    let fullName = document.querySelector('.fullName').value
    let country = document.querySelector('.country').value
    let birthdate = document.querySelector('.birthdate').value

    let userList = JSON.parse(localStorage.users)

    if (userList == null) {
        userList = users
    }

    let flag = false
    for (let user of userList) {
        if (user.email !== email) {
            flag = false
        } else {
            flag = true
            break
        }
    }

    if (!flag) {
        let newUser = {
            'email': email,
            'password': passsword,
            'fullName': fullName,
            'country': country,
            'birthdate': birthdate
        }
        userList.push(newUser)
    }

    localStorage.setItem('users', JSON.stringify(userList))
}

function login() {
    let email = document.querySelector('.email').value
    let passsword = document.querySelector('.password').value

    let userList = JSON.parse(localStorage.users)

    for (let user of userList) {
        if (user.email === email && user.password === passsword) {
            document.querySelector('.form').style.display = 'none'
            let block_profile = document.querySelector('.profile_block')
            let h1 = document.createElement('h1')
            block_profile.style.display = "block"
            
            h1.innerText = "Welcome " + user.fullName
            block_profile.prepend(h1)

            document.querySelector('.profile_block form label:nth-child(1)').innerHTML += "<h4>" + user.email + "</h4>"
            document.querySelector('.profile_block form label:nth-child(2)').innerHTML += "<h4>" + user.fullName + "</h4>"
            document.querySelector('.profile_block form label:nth-child(3)').innerHTML += "<h4>" + user.country + "</h4>"
            document.querySelector('.profile_block form label:nth-child(4)').innerHTML += "<h4>" + user.birthdate + "</h4>"
            document.querySelector('.header_login_link').innerText = user.fullName
            document.querySelector('.header_register_link').innerText = 'Logout'

            // До сюда
            break
        }
    }
}
