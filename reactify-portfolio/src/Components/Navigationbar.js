import React, { Component } from 'react';

class Navigationbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

                    <div className="container">

                    <a className="navbar-logo" href="index.html"><img src="images/md_mahidul_moon_nametag.png" alt="logo" style={{height: '85px',width: '130px'}} /></a>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                        <ul className="navbar-nav">
                        <li className="navbar-item"><a className="navbar-link" href="#section-home">Home</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="#about-section">About</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="#section-services">Services</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="#resume-section">Resume</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="#section-contact">Contact</a></li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                    <section class="coverpic" style={{backgroundImage: "url( 'images/DSC_0280.JPG' )"}} id="section-home" >
                    <div class="container">
                        <div class="row intro-text align-items-center justify-content-center">
                        <div class="col-md-10 text-center">
                            <h1 class="site-heading site-animate">Whatever you are be <strong>a Good Man</strong></h1>
                            <p class="lead site-subheading mb-4 site-animate">Studying Dept of Software Engineering. Which is known as a large language ocean.</p>
                            <p><a href="#about-section" class="smoothscroll btn btn-primary px-4 py-3">More On Me</a></p>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default Navigationbar;