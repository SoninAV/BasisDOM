const container = document.querySelector(".container")

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div')
    const randomNumber = Math.round(Math.random() * 99) + 1
    div.textContent = randomNumber
    div.classList.add('number-box')

    if (randomNumber < 31) {
        div.style.backgroundColor = 'green'
    } else if (randomNumber > 70) {
        div.style.backgroundColor = 'red'
    }

    container.appendChild(div)
}