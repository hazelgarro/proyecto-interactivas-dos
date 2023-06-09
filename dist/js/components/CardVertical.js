//Componente, card vertical de la receta
app.component('card-vertical', {
    props: {
        title: {
            type: String,
            default: "default title"
        },
        difficult: {
            type: String,
            default: "default difficult"
        },
        description: {
            type: String,
            default: "default description"
        },
        time: {
            type: String,
            default: "default time"
        },
        image: {
            type: String,
        },
        icon: {
            type: String,
        },
        imgsave: {
            type: String,
        },
        likes: {
            type: Number,
            default: 1
        },
        id:{
            type: String,
            default: "1"
        }
    },
    methods: {
        onClickRecipeLike(){
            this.$emit('recipelike', this.id);
        },
        onClickViewRecipe(){
            this.$emit('recipedetails', this.id);
        },
        onClickLevel(){
            //this.$emit('recipeslevel', this.difficult);
            localStorage.setItem("level", this.difficult);
            window.location.href = 'http://localhost/TheKitchen2.0/dist/search.html';

        },
        onClickSave(){
            this.$emit('saverecipe', this.id);
        }
    },
    template:
        /* html */
        `<div class="position-relative box-home col-lg-3 col-md-3 p-0 m-0 mb-4 m-3">
    <img v-bind:src="image" class="img-fluid top-border-photo"
        alt="photo food">
        <button class="btn-save" v-on:click="onClickSave(id)"><img v-bind:src="imgsave"></button>
    <div class="text-start ms-2 me-2">
        <div class="d-flex justify-content-between">
            <a :href="'recipe-detail.html?id=' + id" style="text-decoration:none" v-on:click="onClickViewRecipe(id)">
                <h5 class="mt-2 overflow-title text-title-recipe">{{title}}</h5>
            </a>
            <h6><a v-on:click="onClickLevel()"><span class="badge badge-green">{{difficult}}</span></a></h6>
        </div>
        <div>
            <p class="pt-2 overflow recipe-description-space">{{description}}</p>
        </div>
        <div class="d-flex justify-content-between gap-1">
            <h6 class="mt-4 opacity-50"><small>{{time}}</small></h6>
            <button class="btn-circular mt-3 mb-3 hover-grow me-2" v-on:click="onClickRecipeLike(id)"><span
                        class="img-fluid mx-auto mb-2" alt="favorite icon"><img
                        v-bind:src="icon"></span><span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{likes}}</span></button>
        </div>

        <!--:id={{id}}-->
    </div>
</div>`
})


