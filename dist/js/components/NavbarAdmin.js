app.component('navbar-admin',{
    template: 
    /* html */
    `<nav id="navbar-main" class="navbar navbar-expand-lg">
    <a class="navbar-brand color-header" href="#">
        <img src="./images/imgs/icons/Color=White.svg"
            class="position-logo size-img-sm img-fluid d-inline-block align-text-middle" alt="logo"></a>
    <!--boton navbar-main-->
    <button class="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-4 justify-content-between" id="menu">
        <div class="col-5">
        <ul class="navbar-nav gap-5 box-navbar">
            <li class=" position-relative"><a class="header-link hover-grow" href="index.html">Home</a></li>
            <li class=" position-relative"><a class="header-link hover-grow" href="top-recipes.html">Top Recipes</a></li>
            <li class=" position-relative"><a class="header-link hover-grow" href="categories.html">Categories</a></li>
        </ul>
        </div>
        <div class="row me-5 box-navbar">
            <form class="col-7 d-flex " action="search.html" method="get" role="search">
                <input class="form-control me-2 input-search" type="search" name="keyword"
                    placeholder="Search something..." aria-label="Search">
                <button class="btn-search" type="submit"><img src="./images/imgs/icons/search.svg"
                        alt="search icon"></button>
            </form>
            <div class="col-1">
                <div class=" position-relative"><a class="header-link hover-grow" href="user-profile.html"><img class="photo-user-small" src="./images/photos-users/photo-user.jpg" ></a></div>
            </div>
            <div class="col-3 ms-3 center-items-list">
                <ul class="navbar-nav gap-5 box-navbar option-admi">
                    <li class=" position-relative"><a class="header-link hover-grow" href="recipe-list-admin.html">Admin options</a>
                        <ul class="submenu" style="list-style:none">
                            <li><a class="header-link hover-grow" href="recipe-list-admin.html">Recipes list</a></li>
                            <li><a class="header-link hover-grow" href="recipe-add.html">Recipe add</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </nav>`
})

