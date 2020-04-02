export default class Search{
    constructor(query){
        this.query=query
    }
    async getResult(){
        const key = 'b76a1dfaf8404a32b94355a195e6cf85';
        let response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}`);
        let data = await response.json();
       if(data.results.length === 0){
         data.results = 'No Result'
       }
        this.result =data.results
        
       
          
        }
      
        
}