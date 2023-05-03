//Componente del formulario para ingresar los datos de una nueva receta
app.component('form-new-recipe', {
    props: {
        image: {
            type: String
        },
        name: {
            type: String,
            default: "Default name"
        },
        category: {
            type: String,
            default: "Default category"
        },
        difficult: {
            type: String,
            default: "Default difficult"
        },
        ocassion: {
            type: String,
            default: "Default ocassion"
        },
        tag: {
            type: String,
            default: "Default tag"
        },
        timepreparation: {
            type: String,
            default: "Default timepreparation"
        },
        timecooking: {
            type: String,
            default: "Default timecooking"
        },
        timetotal: {
            type: String,
            default: "Default timetotal"
        },
        portions: {
            type: String,
            default: "Default portions"
        },
        description: {
            type: String,
            default: "Default description"
        },
        ingredients: {
            type: String,
            default: "Default ingredients"
        },
        preparation: {
            type: String,
            default: "Default preparation"
        },
    },
    template:
        /* html */
        `<section class="mt-4">
        <div class="row elements-column width-elements-responsive">
            <div class="col-3 ms-5 mb-5 width-elements-responsive">
                <!--start form col1-->
                <form action="addinfo.php" method="post" enctype="multipart/form-data">
                    <label for="recipe_image">
                        <h2>Imagen principal</h2>
                    </label>
                    <br><img id="preview" src="./images/imgs/PlaceholderSquare.png" width="125" height="125"
                class="img-fluid mt-4 size-img-detail" alt="Preview">
                    <br>
                    <input class="mt-5 img-fluid" id="recipe_image" type="file" name="recipe_image"
                        onchange="readURL(this)">
            </div>

            <div class="col-8 ms-4 me-5 width-elements-responsive">
                <h2>Recipe Basic Informations</h2>
                <!--start form col2-->
                <!--recipe title-->

                <label class="form-label" for="title">Recipe title</label>
                <input id="title" class="form-control input-color" type="text" name="title">
                <!--recipe categories-->
                <div class="row mt-2">
                    <div class="col ">
                        <label class="form-label" for="category">Category</label>
                        <select class="form-select form-select-md mb-3 input-color" aria-label=".form-select-lg example"
                            name="category">
                            <option value=""></option>
                        </select>
                    </div>
                    <!--recipe difficulties-->
                    <div class="col">
                        <label class="form-label" for="difficulty">Difficulty</label>
                        <select class="form-select form-select-md mb-3 input-color" aria-label=".form-select-lg example"
                            name="difficulty">
                            <option value=""></option>
                        </select>
                    </div>
                    <!--recipe event-->
                    <div class="col">
                        <label class="form-label" for="event">Event</label>
                        <select class="form-select form-select-md mb-3 input-color" aria-label=".form-select-lg example"
                            name="ocassions">
                            <option value="' . $ocassions[$i]['id_recipe_ocassion'] . '"></option>
                        </select>
                    </div>
                </div>
                <!--recipe tag-->
                <div class="col-4 mt-2">
                    <label class="form-label" for="tag">Tag</label>
                    <input id="tag" class="form-control input-color" type="text" name="tag">
                </div>

                <h2 class="mt-4">Description</h2>
                <!--recipe times-->
                <div class="row mt-2">
                    <div class="col">
                        <label class="form-label" for="prep-time">Preparation Time</label>
                        <input id="prep-time" class="form-control input-color" name="prep-time">


                    </div>
                    <div class="col">
                        <label class="form-label" for="cooking">Cooking Time</label>
                        <input id="prep-time" class="form-control input-color" name="cooking">
                    </div>
                    <div class="col">
                        <label class="form-label" for="total-time">Total Time</label>
                        <input id="total-time" class="form-control input-color" name="total-time">
                    </div>
                    <!--recipe portions-->
                    <div class="col">
                        <label class="form-label" for="portions">Portions</label>
                        <input id="portions" class="form-control input-color" type="number" name="portions">
                    </div>
                </div>
                <!--recipe description-->
                <label class="form-label mt-2" for="description">Description </label>
                <textarea id="description" class="form-control input-xl input-color" name="description">

                </textarea>
                <!--recipe ingredients-->
                <label class="form-label mt-2" for="Ingredientes">Ingredients </label>
                <div class="" id="ingredients">
                <textarea  id="ingredientes" class="form-control input-xl input-color" name="ingredientes"  ></textarea>
                </div>

                <br>
                <!--recipe preparation-->
                <label class="form-label mt-2" for="preparation">Preparation</label>
                <textarea id="preparation" class="form-control input-xl input-color" type="text" name="preparation"></textarea>
            </div>
        </div>

    </section>

    <!--buttons-->
    <div class="d-flex flex-row-reverse me-3 mt-4">
        <input class="btn-admin-red me-5 hover-grow" type="button" value="Discard" onclick="history.back();">
        <button class="btn-admin-orange me-2 hover-grow" type="submit"> Save</button>
    </div>
    </form>`
})
