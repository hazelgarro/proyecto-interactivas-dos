app.component('form-sign-up', {
    template:
        /* html */
        `<div class="row container center mt-1 col-md-12 margin-box box-width">
    <div class="row box-signup col-md-12 center ">

        <form action="login.php" method="post">
            <label class="form-label text-forms" for="name">Name</label>
            <input id="name" class="form-control" type="text" name="name">
            <label class="form-label text-forms" for="lastname">Last Name</label>
            <input id="lastname" class="form-control" type="text" name="lastname">
            <label class="form-label text-forms" for="email">Email</label>
            <input id="email" class="form-control" type="mail" name="email">
            <label class="form-label text-forms" for="user">User</label>
            <input id="user" class="form-control" type="text" name="user">
            <label for="password" class="form-label mt-4 text-forms">Password</label>
            <input name="password" type="password" class="form-control color-input">
            <div class="col center-button">
                <div class="row center">
                    <input class="center btn-orange-dark btn-long-dark mt-3 hover-grow" type="submit"
                        value="Sign Up">
                </div>
                <div class="">
                    <span class=" line-deco mt-3 mb-3 mx-auto"></span>
                </div>
                <div class="row center">
                    <input class="center btn-orange-dark btn-long-dark mt-1 hover-grow" type="submit"
                        value="Log in">
                </div>
        </form>
    </div>
</div>`
})