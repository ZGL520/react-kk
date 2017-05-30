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
            test:'aaa'
        };
        this.listenToMany(ProductActions);
    }

    getAllProducts() {
        ProductsUtil.fetchAllProducts()
            .then( (response) =>{
                console.log('log,',response);
                this.setState({
                    productsList:response
                });
            });

    }

    getProduct() {
        console.log('getProduct');
    }
}

export default ProductStore;