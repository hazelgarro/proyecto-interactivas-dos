app.component('box-user', {
    props: {
        name: {
            type: String,
            default: "user name"
        },
        about: {
            type: String,
            default: "default about me"
        },
    },
    template:
        /* html */
        `<div class="container center mt-1 col-md-12 margin-box box-width">
            <div class="row box-user-big center mt-2 col margin-box center-img-detail">
                <div>
                    <i class="center mt-3"><img src="" alt="photo user"></i>
                    <h1 class="text-center mt-4 text-med">{{name}}</h1>
                    <p class="mt-2">About Me</p>
                    <p class="mt-2">{{about}}</p>
                </div>
                    <div class="row center">
                        <button class="center btn-orange-dark btn-long-dark mt-3 hover-grow">Log Out</button>
                    </div>
            </div>
        </div>`
})
