import React, { Component } from 'react';

class FooterFile extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="site-footer">
                <div className="container">
                    <div className="row mb-3">
                    <div className="col-md-12 text-center">
                        <p>
                        <a href="https://www.facebook.com/mdmahidul.moon/" target="_blank" rel="noopener noreferrer" className="social-item">f</a>
                        <a href="/" className="social-item">t</a>
                        <a href="https://www.instagram.com/m4h1dul_m00n/" target="_blank" rel="noopener noreferrer" className="social-item">i</a>
                        <a href="https://www.linkedin.com/in/mahidul-moon-281509144/" target="_blank" rel="noopener noreferrer" className="social-item">in</a>
                        </p>
                    </div>
                    </div>
                    <div className="row">
                    <p className="col-12 text-center">
                        This template is made by <i>@Md.Mahidul Islam</i> | Copyright &copy; 2020 All rights reserved
                    </p>
                    </div>
                </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterFile;