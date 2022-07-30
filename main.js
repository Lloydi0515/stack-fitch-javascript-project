// userInfo

let userInfo = [
    {
        username: "lloyd",
        password: "stack"
    },
    {
        username: "kim",
        password: "trek"
    },
    {
        username: "shen",
        password: "bootcamp"
    },
    {
        username: "louie",
        password: "webdev"
    }
]

function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    for (let i = 0; i < userInfo.length; i++) {
        if (username == userInfo[i].username && password == userInfo[i].password) {
            
            window.open("earn.html")

        } else {
            alert("Invalid password or Username")
        }       
        
    }
    
}

function logout() {
  window.open("index.html")
}



