const app = Vue.createApp({ //main application vue app
    data(){
        return{
            recipes: [],
            categories: [
                { name: 'main course'}, 
                { name: 'side dish'}, 
                { name: 'dessert'}, 
                { name: 'appetizer'}, 
                { name: 'salad'}, 
                { name: 'bread'}, 
                { name: 'bread'}, 
                { name: 'breakfast'}, 
                { name: 'soup'},  
                { name: 'beverage'}, 
                { name: 'sauce'}, 
                { name: 'marinade'}, 
                { name: 'fingerfood'}, 
                { name: 'snack'}, 
                { name: 'drink'}
            ], 
            recipe: {},
        }
    },
    mounted:function() {
        axios({
            method:'get',
            url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=63292a5b47ce4e3d9ebc6c9623d88942'
        })
        .then(
            (response) => {
                let items = response.data.results;//esto es un array de objetos
                console.log(items);

                items.forEach((element) => {
                    let temp={};
                    temp.id=element.id;//datos del api
                    temp.image=element.image,//datos del api
                    temp.title=element.title,//datos del api
                    temp.category='main course',//datos del api
                    temp.time="20 mins",
                    temp.difficult="Easy",
                    temp.likes=18, 
                    temp.description="default description", 
                    temp.ingredients="NA", 
                    temp.instructions="NA"
                    this.recipes.push(temp);
                    console.log(temp);
                });
            }
        )
        .catch(
            error => console.log(error)
        );
    },
    methods: {
        onClickRecipeLike(index){
            this.recipes[index].likes += 1; //o ++
        },
        onClickRecipeUnlike(index){
            if(this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        },
        onClickRecipeDetails(index){
            console.log("Recipe id " + index)
            axios({
                method:'get', //method, este api solo permite get
                url:'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=63292a5b47ce4e3d9ebc6c9623d88942' //punto de acceso
            })
            .then(
                (response) => {
                    let item = response.data;//esto es un array de objetos
                    console.log(item);

                    this.recipe.id = index;
                    this.recipe.image = item.image;
                    this.recipe.title = item.title;
                    this.recipe.category = item.dishTypes[0];
                    this.recipe.time = item.readyInMinutes + " mins";
                    this.recipe.difficult = "Easy";
                    this.recipe.likes = item.aggregateLikes;
                    this.recipe.instructions = item.instructions;

                    let ingredientsList = "";
                    for(let i=0; i< item.extendedIngredients.length; i++){
                        ingredientsList += item.extendedIngredients[i].original + "\n";
                    }

                    this.recipe.ingredients = ingredientsList;
                }
            )
            .catch(
                error => console.log(error)
            );
        },
        onClickViewRecipe(index){
            this.selectedIndex = index;
        },
        onClickSelectedCategory(category){
            axios({
                method:'get', //method, este api solo permite get
                url:'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey=63292a5b47ce4e3d9ebc6c9623d88942'
            })
            .then(
                (response) => {
                    let items = response.data.results;//esto es un array de objetos
                    console.log(items);
    
                    this.recipes = []; //esta limpiando el array
    
                    if(items.length > 0) this.loading = false;//loading
                    
                    items.forEach( (element) => {
                        this.recipes.push({
                            id: element.id, //datos del api
                            image: element.image,//datos del api
                            name: element.title,//datos del api
                            category: category,//datos del api
                            time: "20 mins",
                            level: "Easy",
                            likes: 18, 
                            ingredients: "NA", 
                            instructions: "NA"
                        })//push metodo de array para meter datos
                    });
                    //console.log(this.categories);
                }
            )
            .catch(
                error => console.log(error)
            );
        }
    },
})

const emitter = mitt();
app.config.globalProperties.$test = emitter;