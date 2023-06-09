//Componente, card horizontal de la receta
app.component('card-horizontal', {
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
        portion: {
            type: String,
            default: "default  portion"
        },
        type: {
            type: String,
            default: "default type"
        },
        occasion: {
            type: String,
            default: "default occasion"
        },
        image: {
            type: String,
        },
        icon: {
            type: String,
        },
        likes: {
            type: Number,
            default: 1
        },
        tag: {
            type: Number,
            default: "1"
        },
        id:{
            type: String,
            default: "1"
        },
        imgsave: {
            type: String,
        }
    },
    methods: {
        onClickRecipeLike(){
            this.$emit('recipelike', this.id);
        },
        onClickViewRecipe(){
            this.$emit('recipedetails', this.id);
        },
        onClickSave(){
            this.$emit('saverecipe', this.id);
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
        `<div class="card mb-3">
        <div class="row">
            <div class="col-md-6">
                <div class="rounded-start box-top-recipes hover-grow">{{tag}}</div>
                <img class="size-img-big img-fluid" v-bind:src="image" alt="photo food" height="362" width="266">
                <button class="btn-save-card-big" v-on:click="onClickSave(id)"><img v-bind:src="imgsave"></button>
            </div>
            <div class="col-md-6">
                <div class="card-body padding-0">
                    <div class="row">
                        <div class="col-6">
                            <a :href="'recipe-detail.html?id=' + id" style="text-decoration:none" v-on:click="onClickViewRecipe(id)">
                                <h5 class="card-title ms-3 overflow text-title-recipe">{{title}}</h5>
                            </a>
                        </div>
                        <div class="col-6">
                            <a v-on:click="onClickLevel()"><span class="badge badge-orange m-1">{{type}}</span></a>
                            <a v-on:click="onClickLevel()"><span class="badge badge-green m-1">{{difficult}}</span></a>
                            <a v-on:click="onClickLevel()"><span class="badge badge-yellow m-1">{{occasion}}</span></a>
                        </div>
                    </div>
                    <p class="card-text  ms-3 recipe-description-space-top10 overflow">{{description}}</p>
                    <div class="row ms-1 ms-3">
                        <p class="label-time text-label-time"><img
                            src="images/imgs/icons/nest_clock_farsight_analog-orange.svg"
                            alt="preparation time icon">{{time}}</p>
                        <p class="label-time ms-3"><img
                            src="images/imgs/icons/pie_chart_orange.svg" alt="portions icon">{{portion}}</p>
                    </div>
                    <div class="row ms-2">
                        <div class="col-10">
                            <p class="card-text"><small class="text-muted">{{time}}</small></p>
                        </div>
                        <div class="col-1 p-1">
                            <button class="btn-circular mt-3 mb-3 hover-grow" v-on:click="onClickRecipeLike(id)"><span
                                    class="img-fluid mx-auto mb-2"
                                    alt="favorite icon"><img v-bind:src="icon"></span><span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{likes}}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})

