//Componente, formulario del Pass Recovery One, para ingresar el correo al que se le hara llegar el link para cambio de contraseña
app.component('form-pass-recovery-one', {
    methods: {
        recoveryPassword() {
          const email = document.getElementById('email').value;
    
          // Realizar la solicitud de pass recovery al API
          axios.post('http://localhost/prueba/public/api/users/recoverpassword', {
            email: email
          })
            .then(response => {

              localStorage.setItem("newPassword", response.data.password);
              localStorage.setItem("message", response.data.message);
    
              window.location.href = 'http://localhost/TheKitchen2.0/dist/pass-recovery-two.html';
    
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
            <div class="row box-pass-big col-md-10 center center-img-detail">
                <div>
                    <p class="text-center mt-2">Enter your email and we’ll send you a link to reset your password</p>
                    <form>
                        <label class="form-label text-forms" for="email">Email</label>
                        <input id="email" class="form-control input-color" type="email" placeholder="Enter your email" name="email">
                        <div class="col col-md-12 center-button margin-box ">
                            <div class="row center margin-box">
                                <a class="center btn-orange-dark mt-4 hover-grow" @click="recoveryPassword">Send email</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>`
})
