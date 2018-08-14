document.addEventListener('DOMContentLoaded', function () {

    var menuToggler = document.getElementById("menu-toggler");
    var navbarMenu = document.getElementById("navbar-menu");

    menuToggler.addEventListener('click', function () {
        menuToggler.classList.toggle('is-active');
        navbarMenu.classList.toggle('is-expanded');
    });

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var fields = document.querySelectorAll('.contact-form input, .contact-form textarea');
        for (var i = 0; i < fields.length; i++) {
            fields[i].value = '';
        };
    });

    document.getElementById('contact-submit').addEventListener('click', test);

    function test() {
        var fields = document.querySelectorAll('.contact-form input, .contact-form textarea');

        for (var i = 0, fieldNotification; i < fields.length; i++) {

            fieldNotification = fields[i].parentNode.parentNode.querySelector('.contact-form__input-notification');
            
            if (fields[i].value === '' && fields[i].hasAttribute('required')) {
                
                fields[i].classList.add('is-invalid');
                if (fieldNotification == null) {
                    var notification = document.createElement('div');
                    notification.textContent = 'Laukelis privalomas!';
                    notification.setAttribute('class', 'contact-form__input-notification');
                    fields[i].parentNode.parentNode.appendChild(notification);
                }

            } else {

                fields[i].classList.remove('is-invalid');
                if (fields[i].parentNode.parentNode.contains(fieldNotification)) {
                    fields[i].parentNode.parentNode.removeChild(fieldNotification);
                }

            }
        };
    };
});
