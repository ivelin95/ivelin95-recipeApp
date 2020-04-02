import {elements} from './base';

export const getInput = () => elements.searchInput.value;
export const clearResult = ()=> {
    
    elements.searchList.innerHTML=" ";
    elements.resultButtons.innerHTML= " ";
};
export const clearInput= ()=>{
    elements.searchInput.value=" ";
};
const renderButtons = (page,type) =>
   `
    <button class="btn-inline results__btn--${type}" data-page=${type === 'prev' ? page -1 : page +1 }>
         <svg class="search__icon">
           <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
         </svg>
         <span>Page ${type === 'prev' ? page -1 : page +1 }</span>
    </button>`;
 
    
 ;

//make buttons for paggination
const createButton=(page,numResult,resPerPage)=>{
   
    //how much pages we have ?
   var btn
    const pages =Math.ceil(numResult/resPerPage);
    console.log( pages,page,numResult,resPerPage)
    if(page === 1){
       btn= renderButtons(page,"next");
    }else if (page < pages){
        //call same function , but i must have 2 button for back and next
      btn=`${renderButtons(page,"prev")}
           ${renderButtons(page,"next")}`
      
       
    }else if(page === pages && pages >1){
        //same function ...but with button for go back
       btn= renderButtons(page,"prev");
       
    }
    
    elements.resultButtons.innerHTML=btn
   
  
};



const renderRecipe=recipe=>{
    var markup =`
    <li>
        <a  href="#${recipe.id}" target="_self" class="results__link">
            <figure class="results__fig">
                <img src="https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg"  alt="no image">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author"></p>
            </div>
    </a>
</li>
    `;
    elements.searchList.insertAdjacentHTML('beforeend', markup)

}

export const renderResults= (recipes ,page = 1, resPerPage = 4) =>{
    const start = (page - 1)* resPerPage
    const perPage = resPerPage * page;
    //if we dont have result
    if(recipes === 'No Result'){
        recipes = `<h1 style="text-align:center;">No Results<h1>`
        elements.searchList.insertAdjacentHTML('beforeend', recipes)
    }else{
    recipes.slice(start , perPage).forEach(renderRecipe)
    createButton(page, recipes.length, resPerPage)
 }
}