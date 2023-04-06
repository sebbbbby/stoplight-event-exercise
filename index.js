//creating variables of the actual button
let stopBtn = document.getElementById('stopButton')
let slowBtn = document.getElementById('slowButton')
let goBtn = document.getElementById('goButton')
//variables of the actual image/bulb
let stopLight = document.getElementById('stopLight')
let slowLight = document.getElementById('slowLight')
let goLight = document.getElementById('goLight')
//the function will toggle true or false to activate the classList located in the css
let redLight = function () {
    stopLight.classList.toggle('stop')
}

let yellowLight = function () {
    slowLight.classList.toggle('slow')
}
let greenLight = function () {
    goLight.classList.toggle('go')
}

stopBtn.addEventListener('click', redLight)
slowBtn.addEventListener('click', yellowLight)
goBtn.addEventListener('click', greenLight)

// let mouseEnter = function () {
//     console.log('you did it')
// }

let buttons = document.querySelectorAll('.button')
// console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
    document
        .querySelectorAll('.button')
        [i].addEventListener('mouseenter', function (event) {
            let buttonInner = event.target.textContent
            console.log(`you entered the ${buttonInner} button!`)
        })
}
// console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
    document
        .querySelectorAll('.button')
        [i].addEventListener('mouseleave', function (event) {
            let buttonInner = event.target.textContent
            console.log(`you left the ${buttonInner} button!`)
        })
}

//.this is much more complex than event.target function. .this ofc works but will learn more later
//figuring out if a button was clicked or not
//
document.body.addEventListener('click', function (event) {
    let lightButtons = event.target.className
    if (lightButtons !== 'button') {
        return
    }
    if (event.target.id === 'stopButton') {
        if (stopLight.classList.contains('stop')) {
            console.log(`${event.target.textContent} bulb on`)
        } else {
            console.log(`${event.target.textContent} bulb off`)
        }
    } else if (event.target.id === 'slowButton') {
        if (slowLight.classList.contains('slow')) {
            console.log(`${event.target.textContent} bulb on`)
        } else {
            console.log(`${event.target.textContent} bulb off`)
        }
    } else if (event.target.id === 'goButton') {
        if (goLight.classList.contains('go')) {
            console.log(`${event.target.textContent} bulb on`)
        } else {
            console.log(`${event.target.textContent} bulb off`)
        }
    }
})
