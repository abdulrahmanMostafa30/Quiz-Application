// Signup function
function signup() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var user = {
        email: email,
        name: name,
        password: password,
        login: false
    };

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    window.location.href = 'login.html'
}