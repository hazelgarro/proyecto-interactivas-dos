//Componente del cuadro que muestra el texto del Pass Recovery Two
app.component('box-pass-recovery-two', {
    data() {
        return {
            password: localStorage.getItem("newPassword"),
            message: localStorage.getItem("message"),
        }
    },
    template:
        /* html */
        `<div class="container center mt-1 col-md-12 margin-box box-width">
        <div class="row box-pass-small center mt-2 col margin-box center-img-detail">
            <div>
                <i class="center mt-3"><img src="images/imgs/icons/task_alt.svg" alt="task icon"></i>
                <p class="text-center mt-4">{{message}}</p>
                <p class="text-center mt-2 text-med">New password: {{password}}</p>
                <div class="row center margin-box">
                    <a class="center btn-orange-dark mt-4 hover-grow" href="./login.html">Back to Login</a>
                </div>
            </div>
        </div>
    </div>`
})

localStorage.setItem("newPassword", response.data.password);
              localStorage.setItem("message", response.data.message);

