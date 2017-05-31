import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';
require('../css/ads.css');
class Adv extends React.Component{
    render(){
        return(
            <div className="ads">
                <Carousel autoplay>
                    <div><img src="./app/components/page/homePage/src/images/14788334532906.jpg" alt=""/></div>
                    <div><img src="./app/components/page/homePage/src/images/14788335472871.jpg" alt=""/></div>
                    <div><img src="./app/components/page/homePage/src/images/14788336347082.jpg" alt=""/></div>
                </Carousel>
            </div>
        )
    }
}
module.exports = Adv;
