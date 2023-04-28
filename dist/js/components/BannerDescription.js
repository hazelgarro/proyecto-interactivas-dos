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
        <p><img src="images/imgs/Maskgroup.png" alt="photo food"></p>
    </div>
</div>`
})