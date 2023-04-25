app.component('form-login', {
    template:
        /* html */
        `<div class="row container center mt-1 col-md-12 margin-box box-width">
    <div class="row box-login col-md-12 center ">

        <form action="login.php" method="post">
            <label class="form-label text-forms" for="username">User</label>
            <input id="username" class="form-control" type="text" name="username">
            <label for="password" class="form-label mt-4 text-forms">Password <span class="text-question"><a
                        href="" class="text-question"> Forgot?</a></span></label>
            <input name="password" type="password" class="form-control color-input">
            <div class="col center-button">
                <div class="row center">
                    <input class="center btn-orange-dark btn-long-dark mt-3 hover-grow" type="submit"
                        value="Log in">
                </div>
                <div class="">
                    <span class=" line-deco mt-3 mb-3 mx-auto"></span>
                </div>
                <div class="row center">
                    <input class="center btn-orange-dark btn-long-dark mt-1 hover-grow" type="submit"
                        value="Sign Up">
                </div>
        </form>
    </div>
</div>`
})

