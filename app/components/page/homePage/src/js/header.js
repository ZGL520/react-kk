import React from 'react';
import  $ from 'jquery';
require('../css/header.css');

class HHeader extends React.Component{

    render(){

        return(

            <div className="header">
                <div className="toppic">
                        <div className="headernav" ref="action">
                                <img id="pic" src="./app/components/page/homePage/src/images/hamburger.gif" alt="aa"/>
                        </div>
                        <div className="logo">
                            <img src="./app/components/page/homePage/src/images/foot-logo.jpg" alt="aa"/>
                        </div>
                        <div className="cart">
                            <a href="">
                                <img src='./app/components/page/homePage/src/images/cart-img.jpg' alt="aa"/>
                            </a>
                        </div>
                </div>
                <div className="topnav">
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">our products</a></li>
                        <li><a href="">about us</a></li>
                        <li><a href="">contact us</a></li>
                        <li><a href="">sign in/register</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = HHeader;
