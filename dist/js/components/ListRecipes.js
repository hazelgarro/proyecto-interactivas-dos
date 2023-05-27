//Componente de lista de recetas para el administrador
app.component('list-recipes', {
    props: {
        title: {
            type: String,
            default: "default title"
        },
        image: {
            type: String,
        },
        id:{
            type: String,
            default: "1"
        }
    },
    methods: {
        onClickViewRecipe(){
            this.$emit('recipedetails', this.id);
        }
    },
    template:
        /* html */
        `<div class="">
            <div class="row ms-5">
                <div class="col-3">
                    <img class="size-img-list" v-bind:src="image">
                </div> 
                <div class="col-7 center center-items-list">
                    <div class="row position-text-list-recipes">
                        <h3>{{title}}</h3>
                        <p>Update 3min ago</p>
                    </div>
                </div>
                <div class="col-2 center-items-list">
                    <button class="btn-item-list hover-grow"><a :href="'recipe-detail-admin.html?id=' + id" v-on:click="onClickViewRecipe(id)" class="header-link">View detail</a></button>
                </div>
            </div>
        </div>
        <hr>`
})

