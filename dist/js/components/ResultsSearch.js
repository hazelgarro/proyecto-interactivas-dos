//Componente, muestra los resultados de la busqueda
app.component('results-search', {
    components: {
        NavbarMenu:'./NavbarMenu.js'
      },
  
    data() {
        return {
            resultsRecipes: [],
            keyword: "",
            recipes:[],
        }
    },
    mounted() {
        console.log(this.resultsRecipes)
        const params = window.location.search;
            //console.log(params);
            const urlParams = new URLSearchParams(params);
            const routeTxt = urlParams.get("keyword");
            this.keyword=routeTxt;
            this.getResults();
    },
    methods: {
        getResults() {
            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/recipes/searchbyname/" + this.keyword

            })
                .then(
                    (response) => {
                        let items = response.data;
                        this.resultsRecipes = [];

                        items.forEach((element) => {

                            this.resultsRecipes.push({
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
                            })
                        });

                        console.log(this.resultsRecipes);
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
            <div v-for="(recipe, index) in resultsRecipes" class="cards-position row mb-5">
                        <card-vertical :image="recipe.image" imgsave="images/imgs/icons/save.png" icon="images/imgs/icons/favorite.svg" :likes="recipe.likes"
                            :title="recipe.title" :description="recipe.description" :time="recipe.time"
                            :difficult="recipe.difficult" :id="recipe.id" v-on:recipedetails="onClickRecipeDetails"
                            v-on:recipelike="onClickRecipeLike" v-on:saverecipe="onClickSave"></card-vertical>
            </div>
        </div>
        <div v-if="resultsRecipes == ''">
        <h4 class='text-center mt-3'>No results for <span class='fw-bolder'>{{keyword}}</span></h4>
        </div>
        `
})
