/**
 * Created by YUN on 26/05/2017.
 */
import React from 'react';
import Reflux from 'reflux';
import ProductStore from '../../../stores/ProductStore';
import ProductActions  from '../../../actions/ProductActions';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

class ProductsList extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = ProductStore;

    }

    componentWillMount()
    {

        console.log('1:componentWillMount');
        super.componentWillMount();
    }

    componentDidMount(){

        ProductActions.getAllProducts();
        console.log('3:componentDidMount',this.state.productsList);

    }

    shouldComponentUpdate() {
        console.log('4:shouldComponentUpdate',this.state.productsList);
        return true;
    }

    componentWillUnmount(){
        console.log('5:componentWillUnmount',this.state.productsList);
        super.componentWillMount();
    }


    render() {
        const products = this.state.productsList;
        console.log('2:render----products',products);

        return (
            <div>
                <h1>我是产品列表页面 {this.state.test}</h1>
                {!products &&
                <h1>No book</h1>
                }

                {products &&
                products.map((product,index)=>{
                    let id = product.fakeId;
                    return (
                        <WingBlank key={index}>
                            <WhiteSpace/>
                            <Link to={'/products/'+id}>
                                <Card>
                                    <Card.Header
                                        title={product.productName}
                                        thumb="">

                                    </Card.Header>
                                    <Card.Body>
                                        <img src={product.img_url} alt="product.productName"/>
                                    </Card.Body>
                                    <Card.Footer>

                                    </Card.Footer>
                                </Card>
                            </Link>

                            <WhiteSpace/>
                        </WingBlank>
                    )
                })
                }

            </div>
        )
    }
}

export default ProductsList;