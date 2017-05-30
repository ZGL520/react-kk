/**
 * Created by YUN on 26/05/2017.
 */

import React from 'react';
import { WingBlank,List} from 'antd-mobile';
import { Link } from 'react-router-dom';
const Item = List.Item;


class MyAccount extends React.Component {

    render() {
        const orders = [
            {
                orderId : 1,
                paid : true
            },
            {
                orderId : 2,
                paid:false
            },
            {
                orderId : 3,
                paid : false
            },
        ];


        return (
            <WingBlank>
                <h1>This is my account page</h1>
                <List renderHeader={() => 'Personal information'} >
                    <Item><Link to='/editPersonalInfo'>edit personal information</Link></Item>
                    <Item><Link to='/editAddress'>edit address book</Link></Item>



                </List>
                <List renderHeader={() => 'Recent orders'}>
                    {orders.map((order,index)=>{
                        return (
                            <Item key={index}>
                                {order.paid &&
                                'Order Id : ' + order.orderId + ' (Paid)'
                                }

                                {!order.paid &&

                                <Link to={'/unpaidOrders/'+order.orderId}>
                                   Order Id : {order.orderId} (Unpaid)
                                </Link>
                                }


                            </Item>
                        )
                    })}
                </List>
            </WingBlank>
        )
    }
}

export default MyAccount;