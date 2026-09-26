import { animate } from "./helpers"

const modal = () => {

    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block'

            if (window.innerWidth < 768) {
                return
            }

            modal.style.opacity = '0'
            modal.style.transform = 'translateY(-50px)'

            animate({
                duration: 500,

                timing(timeFraction) {
                    return timeFraction
                },

                draw(progress) {
                    modal.style.opacity = progress
                    modal.style.transform =
                        `translateY(${progress * 50 - 50}px)`
                }
            })
        })
    })

    modal.addEventListener('click', (e) => {

        if (
            !e.target.closest('.popup-content') ||
            e.target.classList.contains('popup-close')
        ) {
            modal.style.display = 'none'
        }

    })
}

export default modal
