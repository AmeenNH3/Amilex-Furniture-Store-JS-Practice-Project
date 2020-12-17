import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let companies =['all'];
    store.filter((product)=>{
        if(!companies.includes(product.company)){
            companies.push(product.company);
            return;
        }
        
    });
    const companiesDOM = getElement('.companies')
    companiesDOM.innerHTML = companies.map((item)=>{
            return `<button class="company-btn">${item}</button>`;
        }).join('');
        companiesDOM.addEventListener('click',function(e){
            if(e.target.classList.contains('company-btn')){
                const companyFilter = e.target.textContent;
            if(companyFilter==='all'){
                display(store,getElement('.products-container'));
                return;
            }
           
            const newStore = store.filter((product)=>{
                const {company} = product;
                if(company === companyFilter){
                    return product;
                }
            })
            display(newStore,getElement('.products-container'));
            }
            
        });
};

export default setupCompanies;
