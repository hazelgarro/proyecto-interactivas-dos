const app = Vue.createApp({ //main application vue app
    data() {
        return {
            recipes: [],
            categories: [],
            recipe: [],
            filledRecipe : {},
            detailedRecipe:[],
        }
    },
    mounted: function () {
        axios({
            method: 'get',
            url: "https://www.themealdb.com/api/json/v1/1/categories.php"

        })
            .then(
                (response) => {
                    let items = response.data.categories;//esto es un array de objetos

                    // console.log(items);
                    items.forEach((element) => {
                        let category = {};
                        category.id = element.idCategory;//datos del api
                        category.name = element.strCategory,//datos del api
                            this.categories.push(category);

                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef' //categoria que carga por default
        })
            .then(
                (response) => {
                 //   console.log(response.data.meals);
                    let items = response.data.meals;
                    

                    items.forEach((element) => {

                        axios({
                            method: 'get', //method, este api solo permite get
                            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + element.idMeal //punto de acceso
                        })
                            .then(
                                (responseRec) => {
                                   this. filledRecipe=responseRec.data.meals;

                                    this.recipes.push({
                                        id: element.idMeal, //datos del api
                                        image: element.strMealThumb,//datos del api
                                        title: element.strMeal,//datos del api
                                        category: "Beef",//datos del api
                                        time: "20 mins",
                                        difficult: "Easy",
                                        likes: 2,
                                        description:this.filledRecipe[0].strInstructions,
                                        portion: "3",
                                        type: "Veg",
                                        occasion: "All",
                                        tag: this.filledRecipe[0].strTags,
                                        preparation: this.filledRecipe[0].strInstructions,
                                        ingredients: this.filledRecipe[0].strIngredient1,
                                    })

                                }

                            )
                            .catch(
                                error => console.log(error)
                            );

                        //push metodo de array para meter datos
                    });
                    // console.log(this.categories);
                }
            )
            .catch(
                error => console.log(error)
            );
    },
    methods: {
        onClickSelectedCategory(category) {
            axios({
                method: 'get', //method, este api solo permite get
                url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category //punto de acceso
            })
                .then(
                    (response) => {
                        console.log(response.data.meals);
                        let items = response.data.meals;//esto es un array de objetos
                        this.recipes = [];

                        items.forEach((element) => {

                            axios({
                                method: 'get', //method, este api solo permite get
                                url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + element.idMeal //punto de acceso
                            })
                                .then(
                                    (response) => {
                                        this.filledRecipe = response.data.meals;
                                        console.log(this.filledRecipe);
                                    }

                                )
                                .catch(
                                    error => console.log(error)
                                );

                            this.recipes.push({
                                id: element.idMeal, //datos del api
                                image: element.strMealThumb,//datos del api
                                title: element.strMeal,//datos del api
                                category: category,//datos del api
                                time: "20 mins",
                                difficult: "Easy",
                                likes: 2,
                                description: this.filledRecipe[0].strInstructions,
                                portion: "3",
                                type: "Veg",
                                occasion: "All",
                                tag: this.filledRecipe[0].strTags,
                                preparation: this.filledRecipe[0].strInstructions,
                                ingredients: this.filledRecipe[0].strIngredient1,
                            })//push metodo de array para meter datos

                        });
                        // console.log(this.categories);
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },

        onClickRecipeLike(id){ 
            this.recipes[id].likes ++;
            this.recipes.push({
                likes: likes,
            })
        },
        
    }
})

const emitter = mitt();
app.config.globalProperties.$test = emitter;