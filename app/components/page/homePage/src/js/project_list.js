import React from 'react';
require('../css/productList.css');
class ProductList extends React.Component{
    render(){
        return(
            <div>
                <ul className="product">
                    <li>
                            <div className="product_photo">
                                <img src="./app/components/page/homePage/src/images/infant-small-min.png" alt="aa"/>
                            </div>
                            <div className="product_name">
                                <p>INFANT FORMULA</p>
                            </div>
                            <div className="product_btn">
                                <a href="">Explore</a>
                            </div>
                    </li>
                    <li>
                            <div className="product_photo">
                                <img src="./app/components/page/homePage/src/images/infant-small-min.png" alt="aa"/>
                            </div>
                            <div className="product_name">
                                <p>INFANT FORMULA</p>
                            </div>
                            <div className="product_btn">
                                <a href="">Explore</a>
                            </div>
                    </li>
                    <li>
                            <div className="product_photo">
                                <img src="./app/components/page/homePage/src/images/infant-small-min.png" alt="aa"/>
                            </div>
                            <div className="product_name">
                                <p>INFANT FORMULA</p>
                            </div>
                            <div className="product_btn">
                                <a href="">Explore</a>
                            </div>
                    </li>
                    <li>
                            <div className="product_photo">
                                <img src="./app/components/page/homePage/src/images/infant-small-min.png" alt="aa"/>
                            </div>
                            <div className="product_name">
                                <p>INFANT FORMULA</p>
                            </div>
                            <div className="product_btn">
                                <a href="">Explore</a>
                            </div>
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = ProductList;
