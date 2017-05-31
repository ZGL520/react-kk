/**
 * Created by YUN on 29/05/2017.
 */

import axios from 'axios';
const url = 'http://rest.learncode.academy/api/yuncrystal/products';


function fetchAllProducts() {
    return axios.get(url)
        .then((response) => {
            return response.data;
        });
}


export default {
    fetchAllProducts
}