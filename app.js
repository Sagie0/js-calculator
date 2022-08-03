const topScreen = document.querySelector('.topscreen')
const bottomScreen = document.querySelector('.bottomscreen')
const allBtns = document.querySelectorAll('.numpad button')

topScreen.innerHTML = '0'
bottomScreen.innerHTML = ''



allBtns.forEach(btn => {
    btn.onclick = function() {
        if (btn.classList.contains('clear')) {
            topScreen.innerHTML = "0"
            bottomScreen.innerHTML = " "
        } else if (btn.classList.contains('delete')) {
            bottomScreen.innerText = bottomScreen.innerText.slice(0, -1)
        } else if (btn.classList.contains('equal')) {
            topScreen.innerHTML = eval(bottomScreen.innerHTML)
        } else if (btn.classList.contains('perc')) {
            bottomScreen.innerHTML = (bottomScreen.innerHTML) / 100
        } else {
            bottomScreen.innerHTML += btn.innerHTML
        }
    } 
})