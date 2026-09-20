const now = new Date()

let hours = now.getHours()

let greeting

if (hours >= 5 && hours < 12) {
    greeting = 'Доброе утро'
} else if (hours >= 12 && hours < 18) {
    greeting = 'Добрый день'
} else if (hours >= 18 && hours < 24) {
    greeting = 'Добрый вечер'
} else {
    greeting = 'Доброй ночи'
}


const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
]

const day = days[now.getDay()]


let minutes = String(now.getMinutes()).padStart(2, '0')
let seconds = String(now.getSeconds()).padStart(2, '0')

const ampm = hours >= 12 ? 'PM' : 'AM'

let displayHours = hours % 12

if (displayHours === 0) {
    displayHours = 12
}

displayHours = String(displayHours).padStart(2, '0')


const currentYear = now.getFullYear()

const newYear = new Date(currentYear + 1, 0, 1)

const difference = newYear - now

const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24))


document.getElementById('greeting').textContent = greeting

document.getElementById('day').textContent = `Сегодня: ${day}`

document.getElementById('time').textContent =
    `Текущее время: ${displayHours}:${minutes}:${seconds} ${ampm}`

document.getElementById('newYear').textContent =
    `До нового года осталось ${daysLeft} дней`