//Componente de lista de recetas para el administrador
app.component('list-recipes', {
    template:
        /* html */
        `<div class="">
            <div class="row ms-5">
                <div class="col-3">
                    <img class="size-img-list" src="images/images-recipes/recipe-1exZxh80HP.png">
                </div> 
                <div class="col-7 center center-items-list">
                    <div class="row position-text-list-recipes">
                        <h3>Recipe Name</h3>
                        <p>Update 3min ago</p>
                    </div>
                </div>
                <div class="col-2 center-items-list">
                    <button class="btn-item-list hover-grow"><a href="recipe-detail-admin.html" class="header-link">View detail</a></button>
                </div>
            </div>
        </div>
        <hr>`
})

