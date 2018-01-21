import React from 'react';
import FooterImage from '../../images/footerImage.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="inner-container">
                <img className="footer-image" src={FooterImage} /> 
                <span className="footer-text">@2012 Adslot | Adslot Publisher | Adslot Create | Terms | Privacy Policy | Payment Policy </span>
            </div>
        </div>
    );
};

export default Footer;