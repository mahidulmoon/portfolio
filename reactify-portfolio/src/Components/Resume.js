import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="site-section bg-light " id="resume-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                        <h2>My <strong>Resume</strong></h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-5">Education</h2>
                        <div className="resume-item mb-4">
                        <span className="date"> January 2003 - January 2004</span>
                        <h3>Primary institute</h3>
                        <p>People only remember the First and forget the Rest</p>
                        <span className="institute">Nou-Bahini institute,Dhaka</span>
                        </div>

                        <div className="resume-item mb-4">
                        <span className="date"> February 2004- December 2006 <br/>February 2011- March 2014 </span>
                        <h3>Primary & Secondary institute</h3>
                        <p>The Golden moment of my Life</p>
                        <span className="institute">Nou-Bahini institute,Chittagong</span>
                        </div>

                        <div className="resume-item mb-4">
                        <span className="date"> July 2014 - May 2016</span>
                        <h3>Higher Secondary</h3>
                        <p>Game changing period</p>
                        <span className="institute">Bangladesh Navy College,Chittagong</span>
                        </div>

                        <div className="resume-item mb-4">
                        <span className="date"> January 2017 - Present </span>
                        <h3>Bachelor of Science in SOFTWARE ENGINNERING</h3>
                        <p>Seriously thinking about life</p>
                        <span className="institute">Daffodil International University</span>
                        </div>

                    </div>
                    <div className="col-md-6">
                        

                        <h2 className="mb-5">Experience</h2>

                        <div className="resume-item mb-4">
                        <span className="date"> October 2020 - Present</span>
                        <h3>Backend Developer</h3>
                        <p>Golang, Gin, PostgreSQL</p>
                        <span className="institute">Upskill</span>
                        </div>

                        <div className="resume-item mb-4">
                        <span className="date"> March 2018 - Present</span>
                        <h3>Web Application Developer</h3>
                        <p>Anything you wanna know ,always be connected with the internet</p>
                        <span className="institute">Daffodil International University</span>
                        </div>

                        <div className="resume-item mb-4">
                        <span className="date"> March 2013 </span>
                        <h3>Physics Olympiad</h3>
                        <p>The world is all about physics</p>
                        <span className="institute">Science</span>
                        </div>

                        <div className="resume-item mb-4">
                        <span className="date"> Jun 2015</span>
                        <h3>Math Olympiad</h3>
                        <p>Door of science</p>
                        <span className="institute">Science</span>
                        </div>

                        <div className="resume-item mb-4">
                        <span className="date"> October 2015</span>
                        <h3>ICT Intra College Programming Contest</h3>
                        <p>Learn and face the technology</p>
                        <span className="institute">College</span>
                        </div>


                    </div>
                    </div>
                </div>
                </section> 
            </React.Fragment>
        );
    }
}

export default Resume;