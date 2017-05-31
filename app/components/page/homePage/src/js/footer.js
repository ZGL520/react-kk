import React from 'react';
import ReactDOM from 'react-dom';
require('../css/footer.css');

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="foot_link">
                        <a href="">Terms & Conditions</a>
                    <p>|</p>
                        <a href="">Privacy Policy</a>
                    <p>|</p>
                        <a href="">Shopping & Returns</a>
                    <p>|</p>
                        <a href="">Bexome a Distributor</a>
                </div>
                <div className="copyright">
                    <p>All rights reserved © Kanabelle</p>
                </div>
            </div>
        )
    }
}

module.exports = Footer;
