/**
 * Created by YUN on 29/05/2017.
 */

import Reflux from'reflux';
import ProductActions from '../actions/ProductActions';
import ProductsUtil from '../util/ProductsUtil';


class ProductStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {
            productsList:null,
            test:'bbb'
        };
        this.listenToMany(ProductActions);
    }

    getAllProducts() {
        ProductsUtil.fetchAllProducts()
            .then( (response) =>{
                this.setState({
                    productsList:response
                });
                console.log('log,',this.state.productsList);
            });

    }

    getProduct() {
        console.log('getProduct');
    }
}

export default ProductStore;