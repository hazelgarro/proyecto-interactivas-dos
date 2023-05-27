//Detalle de la receta, para la parte del administrador
app.component('table-recipe-detail', {
    props:{
       /* image:{
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
        },*/
    },
    data() {
        return {
            id : "",
            image : "",
            title : "",
            category : "",
            time : "",
            difficult : "",
            description : "",
            portions : "",
            type : "",
            occasion : "",
            preparation : "",
            ingredients: ""
        }
    },
    mounted() {

            const params = window.location.search;
            //console.log(params);
            const urlParams = new URLSearchParams(params);
            const id = urlParams.get("id");
            //console.log("este es el id" +id);

            this.getDetails(id);
       
    },
    methods: {
        getDetails(id){
            axios({
                method: 'get',
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id

            })
                .then(
                    (response) => {

                        let detailedRecipe = response.data.meals[0];
                        
                        console.log(response);

                        this.id = detailedRecipe.idMeal; //datos del api
                        this.image = detailedRecipe.strMealThumb;//datos del api
                        this.title = detailedRecipe.strMeal;//datos del api
                        this.category = detailedRecipe.strCategory;//datos del api
                        this.time = "20 mins";
                        this.difficult = "Easy";
                        this.likes = 2;
                        this.description = detailedRecipe.strInstructions;
                        this.portions = "3";
                        this.type = "Veg";
                        this.occasion = "All";
                        this.tag = detailedRecipe.strTags;
                        this.preparation = detailedRecipe.strInstructions;
                        this.ingredients = detailedRecipe.strIngredient1;

                        console.log(response);
                    }
                )
                .catch(
                    error => console.log(error)
                );
        }
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
                        <span class="badge badge-green m-1">{{difficult}}</span>
                        <span class="badge badge-orange m-1">{{occasion}}</span>
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

