import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mobi-footer">
            <div className="container container-footer">
                <div className="row">
                    <div className="col-md-6 foot-txt">
                        <ul>
                            <li>
                                &copy 2020 kawolegal. All Rights Reserved.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 social">
                        <ul>
                            <li><a href=""><i className="mdi mdi-facebook"  aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="mdi mdi-twitter"   aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="mdi mdi-instagram" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="mdi mdi-linkedin"  aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
