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
            levels: []
        }
    },
    mounted() {
        console.log(this.resultsRecipes)
        const params = window.location.search;
            //console.log(params);
            const urlParams = new URLSearchParams(params);
            const routeTxt = urlParams.get("keyword");
            this.keyword=routeTxt;
            localStorage.getItem("level")==""?  this.getResults(): this.onClickLevel();
           
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
        },
        onClickLevel() {
         
            let   levelRecipe= localStorage.getItem("level");
            let    category=localStorage.getItem("category");
            let   occasion=localStorage.getItem("occasion");
            let key="";
            let searchWord="";

          if(levelRecipe!=""){
            searchWord="level";
            switch (levelRecipe) {
                case  "Easy":
                    key=1;
                    break;
                case  "Intermediate":
                    key=2;
                break;  
                case  "Advanced":
                    key=3;
                break;
                default:
                    key= 0;
                    break;
            }
          } else {
            if(category!=""){
                searchWord="category";
                switch (category) {
                    case  "Breakfast":
                        key=1;
                        break;
                    case  "Drinks":
                        key=2;
                    break;  
                    case  "Lunch":
                        key=3;
                    break;
                    case  "Desserts":
                        key=4;
                    break;
                    case  "Soups":
                        key=5;
                    break;
                    case  "Entrees":
                        key=6;
                    break;
                    default:
                        key= 0;
                        break;
                }
            }
            else {
                if(occasion!=""){
                    searchWord="occasion";
                    switch (occasion) {
                        case  "Birthday":
                            key=1;
                            break;
                        case  "Father's Day":
                            key=2;
                        break;  
                        case  "Mother's Day":
                            key=3;
                        break;
                        case  "Children":
                            key=4;
                        break;
                        case  "Christmas":
                            key=5;
                        break;
                        case  "Summer":
                            key=6;
                        break;
                        default:
                            this.key= 0;
                            break;
                    }
                }
              }
          }
            
            localStorage.setItem("level","");
            localStorage.setItem("category","");
            localStorage.setItem("occasion","");

            axios({
                method: 'get',
                url: "http://localhost/prueba/public/api/recipes/filterby/"+searchWord+"/"+key
    
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
                                            time:40,
                                            difficult: element.level,
                                            likes: element.likes,
                                            description: element.description,
                                            portion:5,
                                            type: "Veg",
                                            occasion: element.occasion,
                                            
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
            <div v-for="(recipe, index) in resultsRecipes" class="cards-position row mb-5">
                        <card-vertical :image="recipe.image" imgsave="images/imgs/icons/save.png" icon="images/imgs/icons/favorite.svg" :likes="recipe.likes"
                            :title="recipe.title" :description="recipe.description" :time="recipe.time"
                            :difficult="recipe.difficult" :id="recipe.id" v-on:recipedetails="onClickRecipeDetails"
                            v-on:recipelike="onClickRecipeLike" v-on:recipeslevel="onClickLevel()" v-on:saverecipe="onClickSave"></card-vertical>
            </div>
        </div>
        <div v-if="resultsRecipes === null">
        <h4 class='text-center mt-3'>No results for <span class='fw-bolder'>{{keyword}}</span></h4>
        </div>
        `
})
