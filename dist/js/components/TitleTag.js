//Componente del logo 
app.component('title-tag', {
    props: {
        category: {
            type: String,
        }
    },
    template:
        /* html */
        `<div>
        <h2 class="mt-4">{{category}}</h2>
        </div>`
})