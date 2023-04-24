app.component('navbar-menu',{
    template: 
    /* html */
    `<nav id="navbar-main" class="navbar navbar-expand-lg">
    <a class="navbar-brand color-header" href="#">
        <img src="./images/imgs/icons/Color=White.svg"
            class="ms-5 size-img-sm img-fluid d-inline-block align-text-middle" alt="logo"></a>
    <!--boton navbar-main-->
    <button class="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-4 justify-content-between" id="menu">
        <ul class="navbar-nav gap-5 box-navbar">
            <li class=" position-relative"><a class="header-link" href="index.html">Home</a></li>
            <li class=" position-relative"><a class="header-link " href="top-recipes.html">Top Recipes</a></li>
            <li class=" position-relative"><a class="header-link " href="categories.html">Categories</a></li>
            <li class=" position-relative"><a class="header-link " href="profile.html">Profile</a></li>
        </ul>
        <div class="me-5 box-navbar">
            <form class="d-flex input-group" action="search.php" method="get" role="search">
                <input class="form-control me-2 search-recipe input-search" type="search" name="keyword"
                    placeholder="Search something..." aria-label="Search">
                <button class="btn btn-search" type="submit"><img src="./images/imgs/icons/search.svg"
                        alt="search icon"></button>
            </form>
        </div>
    </div>
    </nav>`
})


