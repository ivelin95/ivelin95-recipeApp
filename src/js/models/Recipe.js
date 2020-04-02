export default class Recipe{
    constructor(id){
        this.id= id
    }
  async getRecipe(){
       const key = 'b76a1dfaf8404a32b94355a195e6cf85'
        let getInfo = await fetch(`https://api.spoonacular.com/recipes/${this.id}/information?apiKey=${key}`);
        let convertData = await getInfo.json();
        console.log(convertData)
        this.title=convertData.title
        this.readyInMinutes = convertData.readyInMinutes
        this.servings = convertData.servings
        this.image=convertData.image
        this.instructions=convertData.instructions 
        this.extendedIngredients=convertData.extendedIngredients
        
           
    }
};




