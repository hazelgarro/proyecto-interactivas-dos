app.component('recipe-category-button',{
    props:{
        namecategory:{
            type: String,
        },
        category:{
            type: Number,
        }
    },
    methods: {
        onClickCategoryButton(){
            console.log(this.category)
            this.$emit('selectedcategory',this.category);
        }
    },
    template: 
    /* html */
    `<button class="btn-category" v-on:click="onClickCategoryButton">{{ namecategory }}</button>`
})
