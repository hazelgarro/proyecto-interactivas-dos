const app = Vue.createApp({ //main application vue app
    data() {
        return {
            recipes: [],
            categories: [],
            filledRecipe: {},
            top10Recipes: [],
            savedRecipes: [],
            recipesLevel: [],
        }
    },
    mounted: function () {
        axios({
            method: 'get',
            url: "http://localhost/prueba/public/api/recipes/categories"

        })
            .then(
                (response) => {
                    let items = response.data;

                    // console.log(items);
                    items.forEach((element) => {
                        let category = {};
                        category.id = element.id;//datos del api
                        category.name = element.category,//datos del api
                            this.categories.push(category);

                    });
                }
            )
            .catch(
                error => console.log(error)
            );

            //TOP 10
            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/recipes/top10"
    
            })
                .then(
                    (response) => {
                        let items = response.data;
    
                        items.forEach((element) => {
    
                            axios({
                                method: 'get',
                                url: 'http://localhost/prueba/public/api/recipes/recipe/' + element.id// + element.idMeal punto de acceso
                            })
                                .then(
                                    (responseDetails) => {
                                        this.recipeDetail = responseDetails.data[0];
                                        this.recipeIngredients = responseDetails.data[1];
    
                                        //for(let i=0; i<recipeIngredients.length; i++) {
                                        // this.listIngredients =+ recipeIngredients[i];
                                        //}
    
                                        this.top10Recipes.push({
                                            id: element.id, //datos del api
                                            image: "http://localhost/prueba/public/storage/imgs/" + element.image,//datos del api
                                            title: element.name,//datos del api
                                            category: element.category,
                                            time: this.recipeDetail[0].total_time + " min",
                                            difficult: element.level,
                                            likes: element.likes,
                                            description: element.description,
                                            portion: this.recipeDetail[0].portions,
                                            type: element.category,
                                            occasion: element.occasion,
                                            tag: "",
                                            preparation: this.recipeDetail.preparation_instructions,
                                            ingredients: "", //this.listIngredients
                                        })
                                    }
    
                                )
                                .catch(
                                    error => console.log(error)
                                );
                        });
    
    
                    }
                )
                .catch(
                    error => console.log(error)
                );

        axios({
            method: 'get',
            url: 'http://localhost/prueba/public/api/recipes/filterby/category/1' //categoria que carga por default Breakfast
        })
            .then(
                (response) => {
                    let items = response.data;

                    items.forEach((element) => {

                        axios({
                            method: 'get',
                            url: 'http://localhost/prueba/public/api/recipes/recipe/' + element.id// + element.idMeal punto de acceso
                        })
                            .then(
                                (responseDetails) => {
                                    this.recipeDetail = responseDetails.data[0];
                                    this.recipeIngredients = responseDetails.data[1];
                                    let listIngredients;

                                    //for(let i=0; i<recipeIngredients.length; i++) {
                                    // this.listIngredients =+ recipeIngredients[i];
                                    //}

                                    this.recipes.push({
                                        id: element.id, //datos del api
                                        image: "http://localhost/prueba/public/storage/imgs/" + element.image,//datos del api
                                        title: element.name,//datos del api
                                        category: element.category,
                                        time: this.recipeDetail[0].total_time + " min",
                                        difficult: element.level,
                                        likes: element.likes,
                                        description: element.description,
                                        portion: this.recipeDetail.portions,
                                        type: "Veg",
                                        occasion: element.occasion,
                                        tag: "",
                                        preparation: this.recipeDetail.preparation_instructions,
                                        ingredients: "", //this.listIngredients
                                    })

                                }

                            )
                            .catch(
                                error => console.log(error)
                            );
                    });


                }
            )
            .catch(
                error => console.log(error)
            );

            //get saved recipes
            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/users/savedrecipes/1"
    
            })
                .then(
                    (response) => {
                        let items = response.data;
                        items.forEach((element) => {
    
                            axios({
                                method: 'get',
                                url: 'http://localhost/prueba/public/api/recipes/recipe/' + element.id
                            })
                                .then(
                                    (responseDetails) => {
                                        this.recipeDetail = responseDetails.data[0];
                                        this.recipeIngredients = responseDetails.data[1];
    
                                        //for(let i=0; i<recipeIngredients.length; i++) {
                                        // this.listIngredients =+ recipeIngredients[i];
                                        //}
    
                                        this.savedRecipes.push({
                                            id: element.id, //datos del api
                                            image: "http://localhost/prueba/public/storage/imgs/" + element.image,//datos del api
                                            title: element.name,//datos del api
                                            category: element.category,
                                            time: this.recipeDetail[0].total_time + " min",
                                            difficult: element.level,
                                            likes: element.likes,
                                            description: element.description,
                                            portion: this.recipeDetail[0].portions,
                                            type: element.category,
                                            occasion: element.occasion,
                                            tag: "",
                                            preparation: this.recipeDetail.preparation_instructions,
                                            ingredients: "", 
                                        })
                                    }
    
                                )
                                .catch(
                                    error => console.log(error)
                                );
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
    },
    methods: {
        onClickSelectedCategory(category) {
            axios({
                method: 'get',
                url: 'http://localhost/prueba/public/api/recipes/filterby/category/' + category // punto de acceso
            })
                .then(
                    (response) => {
                        console.log(response.data);
                        let items = response.data;
                        this.recipes = [];

                        items.forEach((element) => {

                            axios({
                                method: 'get',
                                url: 'http://localhost/prueba/public/api/recipes/recipe/' + element.id //punto de acceso
                            })
                                .then(
                                    (response) => {
                                        this.filledRecipe = response.data;
                                        console.log(this.filledRecipe);
                                    }

                                )
                                .catch(
                                    error => console.log(error)
                                );

                            this.recipes.push({
                                id: element.id,
                                image: "http://localhost/prueba/public/storage/imgs/" + element.image,
                                title: element.name,
                                category: element.category,
                                time: element.total_time,
                                difficult: element.level,
                                likes: element.likes,
                                description: element.description,
                                portion: element.portions,
                                type: "Veg",
                                occasion: element.occasion,
                                tag: this.filledRecipe[0].strTags,
                                preparation: this.filledRecipe[0].strInstructions,
                                ingredients: this.filledRecipe[0].strIngredient1,
                            })
                        });
                        // console.log(this.categories);
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickRecipeLike: function (id) {

            this.recipes.forEach(recipe => {
                if (recipe.id == id) {

                    axios({
                        method: 'get',
                        url: "http://localhost/prueba/public/api/users/likes/1/"+id
            
                    })
                        .then(
                            (response) => {
                                console.log(response);
                                console.log(recipe.likes);
                                //document.getElementById(id).text = response.data.likes;
                            }
                        )
                        .catch(
                            error => console.log(error)
                        );

                }
            });
        },
        onClickSave: function(id){
            this.recipes.forEach(recipe => {
                if (recipe.id == id) {

                    axios({
                        method: 'get',
                        url: "http://localhost/prueba/public/api/users/saverecipe/1/"+id
            
                    })
                        .then(
                            (response) => {
                                console.log(response);
                                console.log("recipe save successfull");
                                console.log(this.savedRecipes);
                            }
                        )
                        .catch(
                            error => console.log(error)
                        );
                }
            });
        },
        /* onClickLevel: function (difficult) {
            let id = "";
            levels[
                {id: 1, level: "Easy Recipes"},
                {id: 2, level: "Intermediate Recipes"},
                {id: 3, level: "Advanced Recipes"}
            ]

            this.levels.forEach(level => {
                if(level.level == difficult){
                    this.id = level.id;
                }
            })

            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/recipes/filterby/level/"+this.id
    
            })
                .then(
                    (response) => {
                        let items = response.data;
                        this.recipesLevel = [];

                        items.forEach((element) => {

                            axios({
                                method: 'get',
                                url: 'http://localhost/prueba/public/api/recipes/recipe/' + element.id //punto de acceso
                            })
                                .then(
                                    (response) => {
                                        this.filledRecipe = response.data;
                                        console.log(this.filledRecipe);
                                    }

                                )
                                .catch(
                                    error => console.log(error)
                                );

                            this.recipesLevel.push({
                                id: element.id,
                                image: "http://localhost/prueba/public/storage/imgs/" + element.image,
                                title: element.name,
                                category: element.category,
                                time: element.total_time,
                                difficult: element.level,
                                likes: element.likes,
                                description: element.description,
                                portion: element.portions,
                                type: "Veg",
                                occasion: element.occasion,
                                tag: this.filledRecipe[0].strTags,
                                preparation: this.filledRecipe[0].strInstructions,
                                ingredients: this.filledRecipe[0].strIngredient1,
                            })
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );

        } */
    }
})

const emitter = mitt();
app.config.globalProperties.$test = emitter;