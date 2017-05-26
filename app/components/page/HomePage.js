/**
 * Created by Eliteimac3 on 25/05/2017.
 */
var React = require('react');
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

function PlaceHolder(props) {
    return (
        <div
            style={{
            backgroundColor: '#ebebef',
            color: '#bbb',
            textAlign: 'center',
            height: '0.6rem',
            lineHeight: '0.6rem',
            width: '100%',}}
        >
            <Link
                style={{color:'#bbb'}}
                to={props.to}>
                {props.children}
            </Link>


        </div>
    )
}

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <WingBlank>
                <h1>This is HomePage</h1>
                <Flex>
                    <Flex.Item>
                        <PlaceHolder to='/infant_formula'>
                            INFANT FORMULA
                        </PlaceHolder>
                    </Flex.Item>
                    <Flex.Item>
                        <PlaceHolder to="/nutritional_formula">
                            NUTRITIONAL FORMULA
                        </PlaceHolder>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item>
                        <PlaceHolder to="/full_cream_milk">
                            FULL CREAM MILK
                        </PlaceHolder>
                    </Flex.Item>
                    <Flex.Item>
                        <PlaceHolder to="/uht_milk">
                            UHT MILK
                        </PlaceHolder>
                    </Flex.Item>
                </Flex>
                </WingBlank>
            </div>
        )
    }
}

module.exports = HomePage;