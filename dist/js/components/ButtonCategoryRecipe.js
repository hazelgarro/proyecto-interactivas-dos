app.component('recipe-category-button',{
    props:{
        category:{
            type: String,
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
    `<button class="btn-category" v-on:click="onClickCategoryButton">{{ category }}</button>`
})
