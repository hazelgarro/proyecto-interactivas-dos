//Formulario para el registro
app.component('form-sign-up', {
    methods: {
        registerUser() {
            // Obtener los valores de los campos de entrada
            const name = document.getElementById('name').value;
            const lastName = document.getElementById('lastname').value;
            const country = document.getElementById('country').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Realizar la solicitud POST al endpoint de registro
            axios.post('http://localhost/prueba/public/api/users/register', {
                name: name,
                last_name: lastName,
                country: country,
                email: email,
                password: password
            })
                .then(response => {
                    // Registro exitoso
                    console.log(response.data);
                    // Redirigir a ../../login
                    //window.location.href = '../../login.html';
                })
                .catch(error => {
                    // Error en el registro
                    console.error(error);
                });
        }
    },
    template:
        /* html */
        `<div class="row container center mt-1 col-md-12 margin-box box-width">
        <div class="row box-signup mb-5 col-md-12 center ">

        <div class="mt-3">
            <label class="form-label text-forms mt-2" for="name">Name</label>
            <input id="name" class="form-control input-color" type="text" name="name">

            <label class="form-label text-forms mt-2" for="lastname">Last Name</label>
            <input id="lastname" class="form-control input-color" type="text" name="lastname">

            <label class="form-label" for="country">Country</label>
            <input id="country" class="form-control mb-2" type="text" name="country">

            <label class="form-label text-forms mt-2" for="email">Email</label>
            <input id="email" class="form-control input-color" type="mail" name="email">

            <!--<label class="form-label text-forms mt-2" for="user">User</label>
            <input id="user" class="form-control input-color" type="text" name="user">-->

            <!--<div class="password-icon">-->

            <label for="password" class="form-label mt-2 text-forms">Password</label>
            <input id="password" type="password" class="form-control input-color" name="password">

                <!--<img class="input-icon-position-signup" src="./images/imgs/icons/visibility.svg">
            </div>-->

            <div class="col center-button">
                <div class="row center">
                    <a href="./login.html" class="center btn-orange-light mt-4 hover-grow header-link" @click="registerUser" style="text-decoration: none; color:black">Sign up</a>
                    <!--<button class="center btn-orange-light mt-4 hover-grow" type="submit"><a class="header-link" href="login.html" style="text-decoration: none; color:black">Sign Up</a></button>-->
                </div>
                <div class="">
                    <span class=" line-deco mt-3 mb-3 mx-auto"></span>
                </div>
                <div class="row center">
                    <a href="./login.html" class="center btn-orange-dark mt-1 hover-grow header-link" style="text-decoration: none; color:black">Log in</a>
                    <!--<button class="center btn-orange-dark mt-1 hover-grow" type="submit"
                        value="Log in"><a class="header-link" href="login.html" style="text-decoration: none; color:black">Log in</a></button>-->
                </div>
            </div>
        </div>
    </div>
</div>`
});