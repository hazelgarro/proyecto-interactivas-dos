//Componente del formulario para ingresar

app.component('form-login', {
  methods: {
    login() {
      const user = document.getElementById('user').value;
      const password = document.getElementById('password').value;

      // Solicitud de inicio de sesión 
      axios.post('http://localhost/prueba/public/api/users/login', {
        email: user,
        password: password
      })
        .then(response => {
          
          localStorage.setItem("token", response.data.accessToken);

          localStorage.setItem("name", response.data.user.name+" "+response.data.user.last_name);
          localStorage.setItem("country", response.data.user.country);
          localStorage.setItem("id", response.data.user.id);

          window.location.href = 'http://localhost/TheKitchen2.0/dist/index.html';

        })
        .catch(error => {
          
          console.log(error);
          
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

