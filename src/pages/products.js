// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const productsContainer = getElement('.products-container');
const loading = getElement('.page-loading');

display(store,productsContainer);
setupSearch(store);
setupCompanies(store);
loading.style.display = 'none';

