import React from 'react'
require('../css/about.css');
class Ablut extends React.Component{
    render(){
        const str = 'asdfasdfsdfadfasdfasdfasfadfasdfasdfasdfadfasdfasasdfasdfsdfadfasdfasdfasdfadfasdfasdfasdfadfasdfas';
        return(
            <div className="about">
                <div>
                    <div className="about_kanabell">
                        <div className="about_kanabell_tit">
                            <p>About Kanabelle</p>
                        </div>
                        <div className="about_kanabell_info">
                            <img src="./app/components/page/homePage/src/images/gird-tu1.jpg" alt="aa"/>
                            <p>{str}</p>
                        </div>
                    </div>
                    <div className="about_pic">
                        <img src="./app/components/page/homePage/src/images/img1.jpg" alt="aa"/>
                        <img src="./app/components/page/homePage/src/images/img2.jpg" alt="aa"/>
                        <img src="./app/components/page/homePage/src/images/img3.jpg" alt="aa"/>
                    </div>
                </div>
                <div>
                    <div className="about_kan_address">
                        <div className="about_kan_address_tip">
                            <p>Australian sourcing and safety facts</p>
                        </div>
                        <div className="about_kan_address_info">
                            <img src="./app/components/page/homePage/src/images/gird-tu2.jpg"alt=""/>
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
                            <img src="./app/components/page/homePage/src/images/gird-tu3.jpg" alt=""/>
                            <p>{str}</p>
                        </div>
                    </div>
                    <div className="about_pic">
                        <img src="./app/components/page/homePage/src/images/img4.jpg" alt=""/>
                        <img src="./app/components/page/homePage/src/images/img5.jpg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Ablut;
