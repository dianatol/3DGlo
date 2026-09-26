const calculate = () => {
    const calcSquare = document.querySelector('input.calc-item.calc-square')
    const calcCount = document.querySelector('input.calc-item.calc-count')
    const calcDay = document.querySelector('input.calc-item.calc-day')
    const calcType = document.querySelector('select.calc-item.calc-type')
    const regExp = /\D/g
    

    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(regExp, "")
    })

    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(regExp, "")
    })

    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(regExp, "")
    })

    calcType.addEventListener('change', (e) => 
        { console.log(e.target.value) })

}

export default calculate