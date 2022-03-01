class Product {
    constructor(id, categoryId, title, thumb, view, favorite, intro, ingredients,  instructions) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title; 
        this.thumb = thumb;
        this.intro = intro;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.view = view;
        this.favorite = favorite;
    }
}

export default Product;