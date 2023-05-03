//Detalle de la receta, para la parte del administrador
app.component('table-recipe-detail', {
    props:{
        image:{
            type: String
        },
        name:{
            type: String,
            default: "default name"
        },
        category:{
            type: String,
            default: "default category"
        },
        level:{
            type: String,
            default: "default level"
        },
        ocassion:{
            type: String,
            default: "default ocassion"
        },
        time:{
            type: String,
            default: "default time"
        },
        portions:{
            type: String,
            default: "default portions"
        },
        description:{
            type: String,
            default: "default description"
        },
        ingredients:{
            type: String,
            default: "default ingredients"
        },
        preparation:{
            type: String,
            default: "default preparation"
        },
    },
    template:
        /* html */
        `<table>
        <section class="d-flex  ms-5">
            <td>
                <div class="ms-5 p-0">
                    <img class="size-img-detail" v-bind:src="image">
                </div>
            </td>

            <td>
                <div class="col ms-4 mt-4 me-5">
                    <h1>{{name}}</h1>
                    <div>
                        <span class="badge badge-orange m-1">{{category}}</span>
                        <span class="badge badge-green m-1">{{level}}</span>
                        <span class="badge badge-orange m-1">{{ocassion}}</span>
                    </div>
                    <h2 class="mt-4">Description</h2>
                    <div class="d-flex align-items-start">
                        <p class="label-time"><img src="images/imgs/icons/wash.svg" alt="preparation time icon">{{time}}</p>
                        <p class="label-time ms-2"><img src="images/imgs/icons/local_fire_department.svg"
                                alt="cooking time icon">{{time}}</p>
                        <p class="label-time ms-2"><img src="images/imgs/icons/nest_clock_farsight_analog-orange.svg"
                                alt="total time icon">{{time}}</p>
                        <p class="label-time ms-2"><img src="images/imgs/icons/pie_chart_orange.svg"
                                alt="portions time icon">{{portions}}</p>
                    </div>
                    <p>{{description}}</p>
                    <h2 class="mt-4">Ingredients</h2>
                    <p>{{ingredients}}
                    <p>
                    <h2>Preparation</h2>
                    <p>{{preparation}}</p>
                </div>
            </td>
        </section>
    </table>`
})

