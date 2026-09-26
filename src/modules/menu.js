const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    const menuItems = menu.querySelectorAll('ul>li>a')

    menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active-menu')
    })
})
  
    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn')) {
            handleMenu()
        }

        if (e.target('ul>li>a')) {
            handleMenu()
        }
    })


}
export default menu
