//Componente para el apartado de descripcion de las paginas  del usuario final
app.component('banner-description',{
    props:{
        title:{
            type: String,
            default: "default title"
        },
        description:{
            type: String,
            default: "default description"
        },
    },
    template: 
    /* html */
    `<div class="row">
    <div class="col-lg-7  col-md-12">
        <h1 class="mt-5">{{title}}</h1>
        <p class="mt-3 text-description-banner">{{description}}</p>
    </div>
    <div class="col-4 ocultar">
        <p><img class="animate__animated animate__slideInRight size-img-banner" src="images/imgs/Maskgroup.png" alt="photo food"></p>
    </div>
</div>`
})