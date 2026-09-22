const calculate = () => {
    const calcSquare = document.querySelector('input.calc-item.calc-square')
    const calcCount = document.querySelector('input.calc-item.calc-count')
    const calcDay = document.querySelector('input.calc-item.calc-day')
    const calcType = document.querySelector('select.calc-item.calc-type')

    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "")
    })

    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "")
    })

    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "")
    })

    calcType.addEventListener('change', (e) => 
        { console.log(e.target.value) })

}

export default calculate