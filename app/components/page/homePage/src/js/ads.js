import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';
require('../css/ads.css');
class Adv extends React.Component{
    render(){
    const pic = {
      url1 : './app/components/page/homePage/src/images/14788334532906.jpg',
      url2 : './app/components/page/homePage/src/images/14788335472871.jpg',
      url3 : './app/components/page/homePage/src/images/14788336347082.jpg'
    }
        return(
            <div className="ads">
                <Carousel autoplay>
                    <div><img src={pic.url1} alt=""/></div>
                    <div><img src={pic.url2} alt=""/></div>
                    <div><img src={pic.url3} alt=""/></div>
                </Carousel>
            </div>
        )
    }
}
module.exports = Adv;
