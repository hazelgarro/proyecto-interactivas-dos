//Componente del cuadro que muestra el texto para indicarle al usuario que resete su contraseña
app.component('box-reset-password', {
    template:
        /* html */
        `<div class="container center mt-1">
        <div class="row box-pass-small center mt-2 col margin-box center-img-detail">
            <div class="mt-3 mb-3">
                <p class="text-center text-med">Hello [user-name]</p>
                <p class="text-center">A request has been made to reset your password. If you made this request,
                    please click on the button below</p>
                <div class="col center-button">
                    <div class="row center"><a href="#" class="btn-orange-dark btn-width-max hover-grow">Reset
                            password</a></div>
                </div>
            </div>
        </div>
    </div>`
})


