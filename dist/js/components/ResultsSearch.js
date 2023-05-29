//Componente, muestra los resultados de la busqueda
app.component('results-search', {
    components: {
        NavbarMenu:'./NavbarMenu.js'
      },
  
    data() {
        return {
            resultsRecipes: [],
            keyword: "",
        }
    },
    mounted() {
        //this.getKeyword(valor);
        
        console.log(this.resultsRecipes)

        const params = window.location.search;
            //console.log(params);
            const urlParams = new URLSearchParams(params);
            const routeTxt = urlParams.get("keyword");
            this.keyword=routeTxt;
            //console.log("este es el id" +id);
            this.getResults();
    },
    methods: {
      
        getResults() {
            axios({
                method: 'get',
                url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.keyword

            })
                .then(
                    (response) => {

                        let resultsRecipes = response.data.meals;

                        console.log(resultsRecipes);

                        resultsRecipes.forEach((element) => {

                            this.resultsRecipes.push({
                                id: element.idMeal, //datos del api
                                image: element.strMealThumb,//datos del api
                                title: element.strMeal,//datos del api
                                category: "Beef",//datos del api
                                time: "20 mins",
                                difficult: "Easy",
                                likes: 2,
                                description: element.strInstructions,
                                portion: "3",
                                type: "Veg",
                                occasion: "All",
                                tag: element.strTags,
                                preparation: element.strInstructions,
                                ingredients: element.strIngredient1,
                            })
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        }
    },
    template:
        /* html */
        `<script>
            import NavbarMenu from './NavbarMenu.js'; 
        </script>
        <div class="row g-0 mt-5">
        <div v-if="resultsRecipes != null">
            <h4 class='text-center mt-3'>Results for <span class='fw-bolder'>{{this.keyword}}</span></h4>
        </div>
        <div  class="cards-lines-two">
            <div v-for="(recipe, index) in resultsRecipes" class="cards-position row">
                        <card-vertical :image="recipe.image" icon="images/imgs/icons/favorite.svg" :likes="recipe.likes"
                            :title="recipe.title" :description="recipe.description" :time="recipe.time"
                            :difficult="recipe.difficult" :id="recipe.id" v-on:recipedetails="onClickRecipeDetails"
                            v-on:recipelike="onClickRecipeLike"></card-vertical>
            </div>
        </div>
        <div v-if="resultsRecipes == ''">
        <h4 class='text-center mt-3'>No results for <span class='fw-bolder'>{{keyword}}</span></h4>
        </div>
        `
})
