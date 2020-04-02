//app controler
import Search from './models/Search';
import {elements , renderLoader , removeLoader} from './views/base';
import * as searchView from './views/searchViews';
import * as recipeView from './views/recipeView';
import Recipe from './models/Recipe';
// global state of the app
const state ={}
//search controler 

const controlSearch = async ()=>{
     const query=searchView.getInput()//we have to do this from view module ..
     
     if(query){
         //new S object and add to state
         state.search=new Search(query);

         //prepare ui for result
        
        searchView.clearInput();
        searchView.clearResult();
        renderLoader(elements.loaderSpinar)
         //search for recipe
        await state.search.getResult()
         //render results
         removeLoader()
         searchView.renderResults(state.search.result)
        //console.log(state)
     }
}

elements.searchForm.addEventListener('submit' , e=>{
    e.preventDefault()
   
    controlSearch()
})
//e listener for paggination buttons
elements.resultButtons.addEventListener('click' , e=> {
   let btn= e.target.closest('.btn-inline');
  console.log(btn)
  if(btn){
      const page = parseInt(btn.dataset.page ,10)
      searchView.clearResult();
      searchView.renderResults(state.search.result , page)
      console.log(page)
  }
 
})
//Recipe Controler
const createRecipeById=async ()=>{
    const id = window.location.hash.replace("#","")
   if(id){
       //prepare UI
        recipeView.clearRecipe()
       //create new recipe
        state.recipe=new Recipe(id);
        renderLoader(elements.renderRecipe)
       //get recipe data
      await state.recipe.getRecipe();
       // render it to html
       removeLoader()
    recipeView.renderRecipe(state.recipe)
    console.log(state.recipe)
   }
}

window.addEventListener('hashchange',createRecipeById);
window.addEventListener('load',createRecipeById)
