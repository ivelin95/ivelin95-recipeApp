export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchList: document.querySelector('.results__list'),
    loaderSpinar:document.querySelector('.results'),
    resultButtons: document.querySelector('.results__pages'),
    renderRecipe: document.querySelector('.recipe')
   // clearList: document.querySelector('.results__link')
    
};
//loader spinner

export const renderLoader = parentEl=>{
    const loader= `
        <div class='loader'>
            <svg>
                <use href="img/icons.svg#icon-cw"></use>            
            </svg>
        </div>
    `;
     parentEl.insertAdjacentHTML('afterbegin', loader)

}
//remove laoder after searh is ready
export const removeLoader = () =>{
    const loader = document.querySelector('.loader')
    if(loader) loader.parentElement.removeChild(loader)
}