app.component('box-new-password', {
    template:
        /* html */
        `<div class="container center mt-1">
            <div class="row box-pass-big center center-img-detail">
                <div class="row">
                    <p class="text-center mt-3 text-med">New password</p>
                    <form class="input-wrapper">
                        <label class="form-label" for="password">Password must contain at least 7 letters and 1
                            number</label>
                        <input id="new-password" class="form-control mt-2" type="password" name="new-password">
                        <img src="./imgs/icons/visibility.svg" class="input-icon password me-2 margin-icon"
                            alt="visibility icon">
                    </form>
                    <div class="center row">
                        <a href="#" class="btn-orange-dark btn-width-max mt-3 ms-4 mb-2 hover-grow">Reset password</a>
                    </div>
                </div>
            </div>
        </div>`
})

