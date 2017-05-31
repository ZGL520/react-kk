
import React from 'react';
require('../css/footnav.css');
class FootNav extends React.Component{
    render(){
        return(
            <div>
                <div className="foot_nav_logo">
                    <img src="./app/components/page/homePage/src/images/foot-logo.jpg" alt=""/>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">our products</a></li>
                        <li><a href="">about us</a></li>
                        <li><a href="">contact us</a></li>
                        <li><a href="">sign in/register</a></li>
                    </ul>
                </div>
                <div className="foot_nav_link">
                    <a href=""><img src="./app/components/page/homePage/src/images/group-106.png" alt=""/></a>
                    <a href=""><img src="./app/components/page/homePage/src/images/group-108.png" alt=""/></a>
                </div>
            </div>
        )
    }
}

module.exports = FootNav;
