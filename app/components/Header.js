/**
 * Created by Eliteimac3 on 25/05/2017.
 */
var React = require('react');
import { List, NavBar  } from 'antd-mobile';
var Link =require('react-router-dom').Link;

const Item = List.Item;

function SideBar() {
    const MenuItems = [
        {
            itemName:'Home',
            path:'/'
        },
        {
            itemName:'Our Products',
            path:'/productsList'
        },
        {
            itemName:'About us',
            path:'/aboutUs'
        },
        {
            itemName:'Contact us',
            path:'/contactUs'
        },
        {
            itemName:'Sign in/Register',
            path:'/login'
        },
        {
            itemName:'Shopping cart',
            path:'/shoppingCart'
        },
        {
            itemName:'My Account',
            path:'/myAccount'
        }];
    return  (
        <div>
            <List className="menu-list" renderHeader = {()=>'菜单'}>
                <Item>
                    内容
                </Item>
                {MenuItems.map((item,index)=>{
                    return  (
                        <Item key={index}>
                            <Link to={item.path}>
                                {item.itemName}
                            </Link>
                        </Item>
                    )

                })}

            </List>
        </div>
    )
}


class Header extends React.Component {
    render() {

        return (
            <div>
                <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>Header</NavBar>
                <SideBar/>
            </div>
        )
    }
}

module.exports = Header;