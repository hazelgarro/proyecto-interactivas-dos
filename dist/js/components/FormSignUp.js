//Formulario para el registro
app.component('form-sign-up', {
    template:
        /* html */
        `<div class="row container center mt-1 col-md-12 margin-box box-width">
    <div class="row box-signup mb-5 col-md-12 center ">

        <form class="mt-3" action="login.php" method="post">
            <label class="form-label text-forms mt-2" for="name">Name</label>
            <input id="name" class="form-control input-color" type="text" name="name">
            <label class="form-label text-forms mt-2" for="lastname">Last Name</label>
            <input id="lastname" class="form-control input-color" type="text" name="lastname">
            <label class="form-label text-forms mt-2" for="email">Email</label>
            <input id="email" class="form-control input-color" type="mail" name="email">
            <label class="form-label text-forms mt-2" for="user">User</label>
            <input id="user" class="form-control input-color" type="text" name="user">
            <div class="password-icon">
                <label for="password" class="form-label mt-2 text-forms">Password</label>
                <input name="password" type="password" class="form-control input-color">
                <img class="input-icon-position-signup" src="./images/imgs/icons/visibility.svg">
            </div>


            
            <div class="col center-button">
                <div class="row center">
                    <button class="center btn-orange-light mt-4 hover-grow" type="submit"><a class="header-link" href="login.html" style="text-decoration: none; color:black">Sign Up</a></button>
                </div>
                <div class="">
                    <span class=" line-deco mt-3 mb-3 mx-auto"></span>
                </div>
                <div class="row center">
                    <button class="center btn-orange-dark mt-1 hover-grow" type="submit"
                        value="Log in"><a class="header-link" href="login.html" style="text-decoration: none; color:black">Log in</a></button>
                </div>
        </form>
    </div>
</div>`
})