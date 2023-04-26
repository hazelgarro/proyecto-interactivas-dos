app.component('form-delete-recipe', {
    props:{
        name:{
            type: String,
            default: "Default name"
        }
    },
    template:
        /* html */
        `<h2 class="m-5">Delete this recipe: {{name}}</h2>
    <form action="remove.php" method="post">
        <div class="d-flex me-3 mt-5 g-5">
            <input class="btn-admin-orange me-2 hover-grow ms-5 mt-5" type="submit" value="Yes">
            <input class="btn-admin-red me-5 hover-grow ms-5 mt-5" type="button" value="Cancel" onclick="history.back();">
            <input type="hidden" name="id" value="">
        </div>
    </form>`
})