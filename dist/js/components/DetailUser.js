app.component('detail-user', {
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
        `<section>
                <div class="background-responsive">
                    <div class="row">
                        <i class="center mt-5"><img class="photo-user-big" src="./images/photos-users/photo-user.jpg" alt="photo user"></i>
                        <h1 class="text-center mt-4 text-big">{{name}}</h1>
                    </div>
                    <h4 class="mt-2 start ms-3 me-3">About Me</h4>
                    <p class="mt-2 start ms-3 me-3">{{about}}</p>
                </div>
                <div class="row center"> 
                    <button class="center btn-orange-light  mt-3 hover-grow"><a class="header-link" style="color:black" href="edit-profile.html">Edit profile</a></button>
                    <button class="center btn-orange-dark mt-3 mb-4 hover-grow">Log Out</button>
                </div>
        <section>`
})