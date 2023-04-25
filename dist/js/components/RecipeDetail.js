app.component('recipe-detail', {
    props: {
        title: {
            type: String,
            default: "default title"
        },
        difficult: {
            type: String,
            default: "default difficult"
        },
        category: {
            type: String,
            default: "default category"
        },
        ocassion: {
            type: String,
            default: "default ocassion"
        },
        description: {
            type: String,
            default: "default description"
        },
        preparation: {
            type: String,
            default: "default description"
        },
        portions: {
            type: String,
            default: "default portions"
        },
        ingredients: {
            type: String,
            default: "default ingredients"
        },
        time: {
            type: String,
            default: "default time"
        },
        tag: {
            type: String,
            default: "default tag"
        },
        image: {
            type: String,
        },
        icon: {
            type: String,
        },
        likes: {
            type: Number,
            default: 1
        }
    },
    template:
        /* html */
        `<div class="center-img-detail col-md-4 col-lg-6">
        <div class="card text-bg-dark  max-box-size">
        <img v-bind:src="image" alt="photo food">
            <div class="card-img-overlay">
                <div>
                    <p class="align-content-center"><span class="badge-orange-big">{{tag}}</span></p>
                </div>
                <div class="align-end">
                    <button class="btn-circular mt-3 mb-3 hover-grow"><a type="button" href=""><span
                                class="img-fluid mx-auto mb-2" alt="favorite icon"><img
                                v-bind:src="icon"></span>
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{likes}}
                            </span></a></button>
                </div>
            </div>
        </div>
        <div class="">
            <h1 class="mt-4">{{name}}</h1>
            <!--  <p class="text-orange"><img src="./imgs/icons/star_rate.svg" alt="">200</p>-->
        </div>
        <div>
            <span class="badge badge-orange">{{category}}</span>
            <span class="badge badge-green">{{difficult}}</span>
            <span class="badge badge-orange">{{ocassion}}</span>
        </div>
        <!-- <div>
            <p><img src="./imgs/icons/Like Button.svg" alt=""></p>
            <p><img src="./imgs/icons/Like Button(1).svg" alt=""></p>
        </div>-->
        <div>
            <h2 class="mt-4">Description</h2>
            <div class="row">
                <p class="label-time ms-3"><img src="images/imgs/icons/wash.svg"
                        alt="preparation time icon">{{time}}</p>
                <p class="label-time ms-3"><img src="images/imgs/icons/local_fire_department.svg"
                        alt="cooking time icon">{{time}}</p>
                <p class="label-time ms-3"><img src="images/imgs/icons/nest_clock_farsight_analog-orange.svg" 
                        alt="total time icon">{{time}}</p>
                <p class="label-time ms-3"><img src="images/imgs/icons/pie_chart_orange.svg" 
                        alt="portions icon">{{portions}}</p>
            </div>
            <p>{{description}}</p>
            <h2 class="mt-2">Ingredients</h2>
            <ul>{{ingredients}}</ul>
            <h2 class="mt-2">Preparation</h2>
            <p>{{preparation}}</p>
        </div>
    </div>`
})





