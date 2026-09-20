const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            if (window.innerWidth < 768) {
                modal.style.display = 'block'
                return
            }

            modal.style.display = 'block'
            modal.style.opacity = '0'
            modal.style.transform = 'translateY(-50px)'

            let opacity = 0
            let position = -50

            const animate = () => {
                opacity += 0.05
                position += 2

                modal.style.opacity = opacity
                modal.style.transform = `translateY(${position}px)`

                if (opacity < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default modal