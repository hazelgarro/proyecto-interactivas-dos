//Componente, para mostrar los detalles de la receta
app.component('recipe-detail', { 
    props: {
        icon:{
            type: String,
        },
        imgsave: {
            type: String,
        }
    },
    data() {
        return {
            id : "",
            image : "",
            title : "",
            category : "",
            time : "",
            difficult : "",
            likes : "",
            description : "",
            portions : "",
            type : "",
            occasion : "",
            tag : "",
            preparation : "",
            ingredients: "",
        }
    },
    mounted() {

            const params = window.location.search;
            //console.log(params);
            const urlParams = new URLSearchParams(params);
            const id = urlParams.get("id");
            this.getDetails(id);
       
    },
    methods: {
        getDetails(id){
            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/recipes/recipe/" + id

            })
                .then(
                    (response) => {

                        let detailedRecipe = response.data[0];
                        let listIngredients = response.data[1];
                        
                        //console.log(listIngredients);

                        this.id = detailedRecipe[0].id; 
                        this.image = "http://localhost/prueba/public/storage/imgs/"+detailedRecipe[0].image;
                        this.title = detailedRecipe[0].name;
                        this.category = detailedRecipe[0].category;
                        this.time = detailedRecipe[0].total_time+" mins";
                        this.difficult = detailedRecipe[0].level;
                        this.likes = detailedRecipe[0].likes;
                        this.description = detailedRecipe[0].description;
                        this.portions = detailedRecipe[0].portions;
                        this.type = detailedRecipe[0].category;
                        this.occasion = detailedRecipe[0].occasion;
                        this.tag = "Yummy";
                        this.preparation = detailedRecipe[0].preparation_instructions;

                        listIngredients.forEach(ingredient => {
                            //console.log(ingredient.description);
                            this.ingredients += ingredient.amount + " "+ ingredient.measurement_unit +" "+ ingredient.description +"\n" ;
                        });

                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickRecipeLike(){
            
            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/users/likes/1/"+this.id
    
            })
                .then(
                    (response) => {
                        console.log(response);
                    }
                )
                .catch(
                    error => console.log(error)
                );

        },
        onClickSave(){
            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/users/saverecipe/1/"+this.id
    
            })
                .then(
                    (response) => {
                        console.log(response);
                        console.log("recipe save successfull");
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickLevel(){
            //this.$emit('recipeslevel', this.difficult);
            localStorage.setItem("level", this.difficult);
            localStorage.setItem("category", this.type);
            localStorage.setItem("occasion", this.occasion);
            window.location.href = 'http://localhost/TheKitchen2.0/dist/search.html';

        },
    },
    template:
        /* html */
        `<div class="center-img-detail col-lg-6">
        <div class="card card-detail-big text-bg-dark  max-box-size">
        <img v-bind:src="image" alt="photo food">
            <div class="card-img-overlay">
                <div class="ajust-card-big">
                <button class="btn-save-detailsrecipe" v-on:click="onClickSave(id)"><img v-bind:src="imgsave"></button>
                    <p class="align-content-center"><span class="badge-orange-big hover-grow">{{tag}}</span></p>
                    <button class="btn-circular hover-grow" v-on:click="onClickRecipeLike(id)"><span
                                class="img-fluid mx-auto mb-2" alt="favorite icon"><img
                                v-bind:src="icon"></span>
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{likes}}
                            </span></button>
                </div>
            </div>
        </div>
        <div class="ajust-card-big">
            <h1 class="mt-4">{{title}}</h1>
            <p class="text-orange m-2 text-total-top hover-grow"><img class="m-2" src="images/imgs/icons/star_rate.svg" alt="">{{id}}</p>
        </div>
        <div class="col-6">
            <span v-on:click="onClickLevel()" class="badge badge-orange m-1">{{category}}</span>
            <span v-on:click="onClickLevel()" class="badge badge-green m-1">{{difficult}}</span>
            <span v-on:click="onClickLevel()" class="badge badge-orange m-1">{{ocassion}}</span>
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





