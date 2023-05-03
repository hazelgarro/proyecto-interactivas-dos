//Componente, para mostrar los detalles de la receta
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
        `<div class="center-img-detail col-lg-6">
        <div class="card card-detail-big text-bg-dark  max-box-size">
        <img v-bind:src="image" alt="photo food">
            <div class="card-img-overlay">
                <div class="ajust-card-big">
                    <p class="align-content-center"><span class="badge-orange-big hover-grow">{{tag}}</span></p>
                    <button class="btn-circular hover-grow"><a type="button" href=""><span
                                class="img-fluid mx-auto mb-2" alt="favorite icon"><img
                                v-bind:src="icon"></span>
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{likes}}
                            </span></a></button>
                </div>
            </div>
        </div>
        <div class="ajust-card-big">
            <h1 class="mt-4">{{title}}</h1>
            <p class="text-orange m-2 text-total-top hover-grow"><img class="m-2" src="images/imgs/icons/star_rate.svg" alt="">200</p>
        </div>
        <div class="col-6">
            <span class="badge badge-orange m-1">{{category}}</span>
            <span class="badge badge-green m-1">{{difficult}}</span>
            <span class="badge badge-orange m-1">{{ocassion}}</span>
        </div>
        <div>
            <h2 class="mt-4">Description</h2>
            <div class="row">
                <p class="label-time ms-3 "><img src="images/imgs/icons/wash.svg"
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





