
const createDots = () => {
    const sliders = document.querySelectorAll('.portfolio-item')
    const dotsWrapper = document.querySelector('.portfolio-dots')

    sliders.forEach((slider, index) => {
        const dot = document.createElement('li')

        dot.classList.add('dot')

        if(index === 0) {
            dot.classList.add('dot-active')
        }

        dotsWrapper.append(dot)
        
    });
}

export default createDots