const loginForm = document.querySelectorAll('.login-signup')[0]

const signupForm = document.querySelectorAll('.login-signup')[1]

const nav_to_signup = document.querySelector('#nav-to-signup')

const nav_to_login = document.querySelector('#nav-to-login')

const login_submit = document.querySelector('#login-submit')

const signup_submit = document.querySelector('#signup-submit')

const forgotpwd = document.querySelector('.forgot-pwd')

const details = document.querySelector('.user-details')

nav_to_signup.addEventListener('click' , () => {
    loginForm.style.display = 'none'
    signupForm.style.display = 'block'
    document.querySelector('#login').reset()
})

nav_to_login.addEventListener('click' , () => {
    loginForm.style.display = 'block'
    signupForm.style.display = 'none'
    document.querySelector('#signup').reset()
})

