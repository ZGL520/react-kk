/**
 * Created by YUN on 26/05/2017.
 */


import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

// import ProductStore from '../../stores/ProductStore';


class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        // this.store = ProductStore;

    }

    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     console.log('e2',this.state.productsList);
    //     return true;
    // }
    //
    // componentDidMount(){
    //     ProductStore.getAllProducts();
    //     console.log('e',this.state.productsList);
    // }


    render() {
        const products = [
            {
                id:'1',
                productName:'Premium Infant Formula',
                img_url:'https://www.kanabelle.com.au/static/team/2016/1019/14768365756335.jpg',
            },
            {
                id:'2',
                productName:'Premium Follow-on Formula',
                img_url:'https://www.kanabelle.com.au/static/team/2016/1019/14768365939634.jpg',
            },
            {
                id:'3',
                productName:'Toddler Nutritious Milk Drink ',
                img_url:'https://www.kanabelle.com.au/static/team/2016/1019/14768366091173.jpg',
            },
            {
                id:'4',
                productName:'Instant Full Cream Milk Powder ',
                img_url:'https://www.kanabelle.com.au/static/team/2016/1018/14767651501004.jpg',
            },
            {
                id:'5',
                productName:'Nutritional Formula For Children',
                img_url:'https://www.kanabelle.com.au/static/team/2016/1019/14768434138624.jpg',
            },
            {
                id:'6',
                productName:'Nutritional Formula For Pregnant Mother ',
                img_url:'https://www.kanabelle.com.au/static/team/2016/1018/14767650796278.jpg',
            },
            {
                id:'7',
                productName:'Nutritional Formula For Elderly',
                img_url:'https://www.kanabelle.com.au/static/team/2016/1018/14767650649086.jpg',
            },
        ];
        return (
            <div>
                <h1>我是产品列表页面</h1>
                {products === null &&
                <h1>No Products</h1>
                }
                {products.map((product,index)=>{
                    return (
                        <WingBlank key={index}>
                            <WhiteSpace/>
                            <Link to={'/products/'+product.id}>
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

                })}

            </div>
        )
    }
}

export default ProductsList;