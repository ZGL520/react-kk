/**
 * Created by YUN on 26/05/2017.
 */
import React from 'react';
import { WingBlank,Button } from 'antd-mobile';
import { Link } from 'react-router-dom';


class PremiumInfantFormula extends React.Component {
    render() {
        return (
            <WingBlank>
                <h1>This is the detail page of Premium Infant Formula (id:371)</h1>
                <Button>Add to Cart</Button>
                <Link to="/orderInfo">
                    Check out
                </Link>

            </WingBlank>
        )
    }
}

export default PremiumInfantFormula;