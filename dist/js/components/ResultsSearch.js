app.component('results-search', {
    props:{
        search:{
            type: String,
            default: "Default search"
        }
    },
    template:
        /* html */
        `<div class="row g-0 mt-5">
        "<h4 class='text-center mt-3'>Results for <span class='fw-bolder'>{{search}}</span></h4>
        <h4 class='text-center mt-3'>No results for <span class='fw-bolder'>{{search}}</span></h4>
        </div>
        `
})

