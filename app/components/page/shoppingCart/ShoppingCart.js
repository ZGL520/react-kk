/**
 * Created by YUN on 26/05/2017.
 */
import React from 'react';
import { Flex, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
    render() {
        return (
            <div>
                <WingBlank>
                    <h1>This is the shopping cart page</h1>
                    <Flex>
                        <Flex.Item>
                            <Link to='/productsList'>
                                Continue shopping
                            </Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to='/orderInfo'>
                                Check out
                            </Link>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}

export default ShoppingCart;