//Componente para modificar la informacion del usuario
app.component('box-user-edit', {
    props: {
        name: {
            type: String,
            default: "user name"
        },
        about: {
            type: String,
            default: "default about me"
        },
    },
    template:
        /* html */
        `<div class="col">
            <div class="row elements-column">
                <div class="col">
                <form action="addinfo.php" method="post" enctype="multipart/form-data">
                    <label for="recipe_image">
                        <h2 class="mt-5 mb-3">Foto de perfil</h2>
                    </label>
                    <br><img id="preview cover" src="./images/imgs/PlaceholderSquare.png" width="125" height="125"
                class="img-fluid mt-2 size-img-detail" alt="Preview">
                    <br>
                    <input class="mt-5 img-fluid" id="recipe_image" type="file" name="recipe_image"
                        onchange="readURL(this)">
                </div>
                <div class="col start">
                    <div>
                    <h2 class="mt-5 mb-3">User information</h2>
                    <label class="form-label mt-3" for="title">Nombre</label>
                    <input id="name" class="form-control input-color" type="text" name="name">
                    <label class="form-label mt-3" for="title">Description</label>
                    <textarea id="description" class="form-control input-xl input-color" type="text" name="description"></textarea>
                </div>
                <div class="d-flex flex-row-reverse mt-4 end">
                <button class="btn-admin-red me-2 hover-grow" style="width: 11rem;" type="submit">Remove acount</button>
                <input class="btn-admin-orange me-2 hover-grow" type="button" value="Discard" onclick="history.back();">
                <button class="btn-admin-orange me-2 hover-grow" style="width: 11rem;" type="submit">Change password</button>
                
            </div>
        </div>`
})