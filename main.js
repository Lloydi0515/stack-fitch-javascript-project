// userInfo
const userInfo = [
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
            // document.write('<h1 class="container"></h1>')
            // document.write(`Welcome ${username}`)

        } else {
            alert("Invalid password or Username")
        }       
        
    }
    
}

function logout() {
  window.open("index.html")
  alert("Successfully logged out")
} 


// const button = document.getElementById("convert")
// const box = document.getElementById("box")

// function adder(number1, number2) {
//     return parseInt(number1 + number2)
// }


// button.onclick = () => {
//     const display = document.getElementById("display")
//     const timeAdder1 = document.getElementById("number1")
//     const timeAdder2 = document.getElementById("number2")
//     const timeAdderResult = document.getElementsByClassName("sleepTime")
//     display.innerHTML = adder(parseInt(timeAdder1.value + timeAdder2))
//     timeAdderResult.value = ""

//     display.className = "sleepTime"
// }

const healthVideo = {
    healthPage: [
        "https://www.youtube.com/embed/cGz9VSVTEXo",
        "https://www.youtube.com/embed/t0kACis_dJE",
        "https://www.youtube.com/embed/OdRM9chZHaY",
        "https://www.youtube.com/embed/Fpoa8siZYk0",
        "https://www.youtube.com/embed/cqUKJroJzHo",
        "https://www.youtube.com/embed/fk-_SwHhLLc"
    ]
}

const video = document.getElementById("video")

for (let link of healthVideo['healthPage']) {
    const listed = document.createElement("div")
    listed.innerHTML +=  `<iframe width="400" height="315" src="${link}" frameborder="0" allowfullscreen></iframe>`

    video.append(listed)

}


const blog = [
    {
        title: "AASM | Sleeping Education Blog",
        content: "The American Academy of Sleep Medicine (AASM) launched the Sleep Education website in 2005. The site has reliable information about sleep, sleep disorders, & treatment options. It is a valuable resource for patients who have sleep disorders. The site provides accurate medical & scientific insight in a concise manner that is easy to understand. It also provides facts that will be useful to anyone who wants to learn more about sleep."
        // link: "sleepeducation.org/blogs"
    },
    {
        title: " Better Sleep Council Blog",
        content: "The Better Sleep Council (BSC) provides research, insights and educational resources to empower consumers to make smarter sleep decisions. If you are not sleeping on the latest industry news then explore the Better Sleep Council blog to learn about emerging trends, recent announcements, expert analysis, and more.",
        // link: "bettersleep.org/blog"
    },
    {
        title: "Little Z's Sleep Consulting Blog",
        content: "Hey there! I'm Becca Campbell, your Pediatric Sleep Consultant and this is the Little Z's Sleep blog where I'm committed to resolving your child's exhausting sleep habits! The ultimate goal is to help families find wellness by creating a plan for their baby. We work together to implement a solution for all. Let's make sleep a thing!"
        // link: "littlezsleep.com/blog"
    },
    {
        title: "The Sleep Consultant Blog",
        content: "Riley Jarvis Sleep Consulting helps CEOs & top performers transform their sleep, increasing their productivity with the best-in-class individualized sleep training. Riley is an internationally renowned Sleep Consultant who has helped high functioning individuals achieve more out of their life & business using cutting edge sleeping strategies. Read his blog to learn the essentials of what you can do right now to start sleeping better tonight."
        // link: "thesleepconsultant.com/blog"
    }
]

const health = document.getElementById("health")

blog.forEach(blogs => {
    const list = document.createElement("div")
    list.innerHTML = `<h3>${blogs.title}</h3>`
    list.innerHTML += `<p>${blogs.content}</p><button>More</button>`

    health.append(list)

})