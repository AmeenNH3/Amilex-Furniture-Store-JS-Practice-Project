import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const form = getElement('.input-form');
    const nameInput = getElement('.search-input');
    form.addEventListener('keyup',function(){
        const value = nameInput.value;
        // console.log('hellpo');
       if(value){
        
        const newStore = store.filter((product)=>{
            let {name} = product;
            name=name.toLowerCase();
            if(name.startsWith(value)){
                return product;
            }
        })
        if(newStore.length >= 1){
            display(newStore,getElement('.products-container'));
        }
        else{
            getElement('.products-container').innerHTML = `<h3 class="filter-error">Sorry, No products matched your search
            </h3>`;
        }
       }
       else{
           display(store,getElement('.products-container'));
       }
    })
};

export default setupSearch;
