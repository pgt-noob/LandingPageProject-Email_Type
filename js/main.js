window.addEventListener('load', () => {
    const toggle = document.querySelector('.header_toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('click', () => {
        menu.setAttribute('style','transform: translate(0)')
    })
    menu.addEventListener('click', () => {
        console.log('hello')
    })
    document.body.addEventListener('click', function (e) {
        if (!e.target.matches('.header_toggle')) {
            menu.setAttribute('style','')
        }
    })
})