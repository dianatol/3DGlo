const timer = (deadline) => {
    console.log(deadline)
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor((timeRemaining / 60 / 60))
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return {
            hours,
            minutes,
            seconds, 
            timeRemaining
        }
    }

const updateClock = () => {
    let getTime = getTimeRemaining()

    let hours = getTime.hours
    let minutes = getTime.minutes
    let seconds = getTime.seconds

    if (getTime.timeRemaining <= 0) {
        hours = 0
        minutes = 0
        seconds = 0

        clearInterval(interval)
    }

    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')

    timerHours.textContent = hours
    timerMinutes.textContent = minutes
    timerSeconds.textContent = seconds
}
    
    const interval = setInterval(updateClock, 1000) 
}

export default timer