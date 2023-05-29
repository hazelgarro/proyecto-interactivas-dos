//Componente, menu de navegacion para el usuario
app.component('navbar-menu', {
    data() {
        return {
            inputValue: '',
            keyword: '',
        };
    },
    methods: {
        onClickSearch(keyword) {
            this.keyword = this.inputValue;
             this.$emit('searchRecipes', this.keyword);
        }
    },
    template:
        /* html */
        `<nav id="navbar-main" class="navbar navbar-expand-lg">
    <a class="navbar-brand color-header hover-grow" href="index.html">
        <img src="./images/imgs/icons/Color=White.svg"
            class="position-logo size-img-sm img-fluid d-inline-block align-text-middle" alt="logo"></a>
    <!--boton navbar-main-->
    <button class="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-4 justify-content-between" id="menu">
        
        <ul class="navbar-nav gap-5 box-navbar">
            <li class=" position-relative"><a class="header-link hover-grow" href="index.html">Home</a></li>
            <li class=" position-relative"><a class="header-link hover-grow" href="top-recipes.html">Top Recipes</a></li>
            <li class=" position-relative"><a class="header-link hover-grow" href="categories.html">Categories</a></li>
        </ul>
        
        <div class="row box-navbar">
            <form class=" col d-flex center" action="search.html" method="get" role="search">
                <input class="form-control me-2 input-search" type="text" v-model="inputValue" name="keyword"
                    placeholder="Search something..." aria-label="Search">
                <button class="btn-search" type="submit" v-on:click="onClickSearch(keyword)"><img src="./images/imgs/icons/search.svg"
                        alt="search icon"></button>
            </form>
            <div class="col" id="photo-desk">
                <div class=" position-relative"><a class="header-link hover-grow" href="user-profile.html"><img class="photo-user-small me-5" src="./images/photos-users/photo-user.jpg" ></a></div>
            </div>
        </div>
        <div class="row mt-3 mb-3" id="photo-phone">
                <div class="position-relative"><a class="header-link hover-grow" href="user-profile.html"><img class="photo-user-small" src="./images/photos-users/photo-user.jpg" ></a></div>
        </div>
    </div>
    </nav>`
});