//Componente del formulario para ingresar

app.component('form-login', {
  methods: {
    login() {
      const user = document.getElementById('user').value;
      const password = document.getElementById('password').value;

      // Realizar la solicitud de inicio de sesión al API
      axios.post('http://localhost/prueba/public/api/users/login', {
        email: user,
        password: password
      })
        .then(response => {
          // Solicitud de inicio de sesión exitosa
          // Redirigir al usuario a ../../home.html
          console.log(response.data);
          localStorage.setItem("token", response.data.accessToken);
          window.location.href = 'http://localhost/TheKitchen2.0/dist/index.html';

        })
        .catch(error => {
          // Error en la solicitud de inicio de sesión
          console.log(error);
          // Puedes mostrar un mensaje de error o tomar otras acciones según tus necesidades
        });
    }
  },

  template:
    /* html */
    `<div class="row container center mt-1 col-md-12 margin-box box-width">
    <div class="row box-login col-md-12 center ">

        <form action="login.php" method="post">
            <label class="form-label text-forms" for="user">Email</label>
            <input id="user" class="form-control input-color" type="text" name="user">
            <div class="password-icon">
                <label for="password" class="form-label mt-4 text-forms">Password <span class="text-question"><a
                            href="./pass-recovery-one.html" class="text-question"> Forgot?</a></span></label>
                <input id="password" name="password" type="password" class="form-control input-color">
                <img class="input-icon-position-login" src="./images/imgs/icons/visibility.svg">
            </div>

            <div class="col center-button">
                <div class="row center">
                    <!-- Agregar el evento 'click' para llamar al método 'loginUser' -->
                    <a class="center btn-orange-dark mt-3 hover-grow" @click="login">Log in</a>
                    <!--<button class="center btn-orange-dark mt-3 hover-grow"><a class="header-link" href="index.html" style="text-decoration: none;">Log in</a></button>-->
                </div>
                <div class="">
                    <span class="line-deco mt-3 mb-3 mx-auto"></span>
                </div>
                <div class="row center">
                    <button class="center btn-orange-light mt-1 hover-grow"><a class="header-link" href="sign-up.html" style="text-decoration: none; color:black">Sign Up</a></button>
                </div>
            </div>
        </form>
    </div>
</div>`
})

