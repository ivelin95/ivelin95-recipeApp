import {elements} from './base';
export const clearRecipe= () =>{
    elements.renderRecipe.innerHTML=""
}
const createIngredients =ingredient => `
<div class="shopping">
            

            <ul>
                <li>${ingredient.original}</li>
             
            </ul>

            
        </div>
`
export const renderRecipe= recipe =>{
    const markup = `
   
    <figure class="recipe__fig">
        <img src="${recipe.image}" alt="Tomato" class="recipe__img">
        <h1 class="recipe__title">
            <span>${recipe.title}</span>
        </h1>
    </figure>
    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.readyInMinutes}</span>
            <span class="recipe__info-text"> minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text"> servings</span>
           
            </div>
           
        
    </div>
    <div class="recipe_details-info">
    <span>${recipe.instructions}</span>
    <h3>Ingredients</h3>
    <span>${recipe.extendedIngredients.map(el =>createIngredients(el)).join('')}</span>
   
   </div>

    `;
    elements.renderRecipe.insertAdjacentHTML('afterbegin', markup);
};
