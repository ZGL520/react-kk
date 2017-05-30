/**
 * Created by YUN on 26/05/2017.
 */
import React from 'react';
import { WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';


class OrderInformation extends React.Component {
    render() {
        return (
            <div>
                <WingBlank>
                    <h1>This is the page of Order Information</h1>
                    <Link to='/checkOut'>
                        Place Order
                    </Link>
                </WingBlank>
            </div>
        )
    }
}

export default OrderInformation;