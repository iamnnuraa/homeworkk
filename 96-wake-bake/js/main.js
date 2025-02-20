// создать самовызывающуюся функцию
(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        // если тыкать на burgerIcon, burgerNavLink - .burger-icon и nav__link закроются

        if (!burgerIcon && !burgerNavLink) return
        // если нажимать не на эти 2 элемента - функция не работает и прекращается
        if (document.documentElement.clientWidth > 900) return
        // работает как медиа запрос на окно меньше 900

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
})()
