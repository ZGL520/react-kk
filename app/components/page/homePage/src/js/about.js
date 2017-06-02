import React from 'react'
require('../css/about.css');
class Ablut extends React.Component{
    render(){
        const str = 'asdfasdfsdfadfasdfasdfasfadfasdfasdfasdfadfasdfasasdfasdfsdfadfasdfasdfasdfadfasdfasdfasdfadfasdfas';
        const pic = {
          url1 : './app/components/page/homePage/src/images/gird-tu1.jpg',
          url2 : './app/components/page/homePage/src/images/img1.jpg',
          url3 : './app/components/page/homePage/src/images/img2.jpg',
          url4 : './app/components/page/homePage/src/images/img3.jpg',
          url5 : './app/components/page/homePage/src/images/gird-tu2.jpg',
          url6 : './app/components/page/homePage/src/images/gird-tu3.jpg',
          url7 : './app/components/page/homePage/src/images/img4.jpg',
          url8 : './app/components/page/homePage/src/images/img5.jpg'
        }
        return(
            <div className="about">
                <div>
                    <div className="about_kanabell">
                        <div className="about_kanabell_tit">
                            <p>About Kanabelle</p>
                        </div>
                        <div className="about_kanabell_info">
                            <img src={pic.url1} alt="aa"/>
                            <p>{str}</p>
                        </div>
                    </div>
                    <div className="about_pic">
                        <img src={pic.url2} alt="aa"/>
                        <img src={pic.ur3} alt="aa"/>
                        <img src={pic.url4} alt="aa"/>
                    </div>
                </div>
                <div>
                    <div className="about_kan_address">
                        <div className="about_kan_address_tip">
                            <p>Australian sourcing and safety facts</p>
                        </div>
                        <div className="about_kan_address_info">
                            <img src={pic.url5}alt=""/>
                            <p>{str}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="about_kan_safe">
                        <div className="about_kan_safe_tit">
                            <p>Dairy food safety</p>
                        </div>
                        <div className="about_kan_safe_info">
                            <img src={pic.url6} alt=""/>
                            <p>{str}</p>
                        </div>
                    </div>
                    <div className="about_pic">
                        <img src={pic.url7} alt=""/>
                        <img src={pic.url8} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Ablut;
