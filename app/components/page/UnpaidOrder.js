/**
 * Created by Eliteimac3 on 26/05/2017.
 */
var React = require('react');
import { WingBlank } from 'antd-mobile';


class UnpaidOrder extends React.Component {
    render() {
        return (
            <WingBlank>
                <h1>This is the page of unpaid order</h1>
                <h1>Order id = {this.props.match.params.id}</h1>
            </WingBlank>
        )
    }
}

module.exports = UnpaidOrder;