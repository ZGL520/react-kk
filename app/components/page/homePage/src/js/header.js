import React from 'react';
import { fadeIn,fadeOut } from 'react-animations';
require('../css/header.css');

class HHeader extends React.Component{

    render(){
        const pic = {
          url1 : './app/components/page/homePage/src/images/hamburger.gif',
          url2 : './app/components/page/homePage/src/images/foot-logo.jpg',
          url3 : './app/components/page/homePage/src/images/cart-img.jpg'
        }
        const changeClick = ()=>{
          if ( this.refs.content.state == 0){
            this.refs.content.state = 1;
            console.log(this.refs.content.state);
          }else if (this.refs.content.state == 1) {
            this.refs.content.state = 0;
            console.log(this.refs.content.state);
          }else {
            this.refs.content.state = 0;
            console.log(this.refs.content.state);
          }
          console.log(this.refs.content.state);
        };

        return(
            <div className="header">
                <div className="toppic">
                        <div className="headernav" ref="action" onClick = {changeClick}>
                                <img id="pic" src = {pic.url1} alt="aa"/>
                        </div>
                        <div className="logo">
                            <img src={pic.url2} alt="aa"/>
                        </div>
                        <div className="cart">
                            <a href="">
                                <img src={pic.url3} alt="aa"/>
                            </a>
                        </div>
                </div>
                <div className="topnav" ref = "content">
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
