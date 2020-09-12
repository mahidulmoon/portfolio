import React, { Component } from 'react';

class ContactMe extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="site-section bg-light" id="section-contact">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                            <h2>Wanna <strong>Start Work</strong> With Me?</h2>
                            </div>
                        </div>
                        
                        <div className="col-md-7 mb-5 mb-md-0">
                            <form className="site-form">
                            
                            <h3 className="mb-5">Information Please</h3>
                            <div className="form-group">
                                <input type="text" className="form-control px-3 py-4" name="uname" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control px-3 py-4" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control px-3 py-4" name="phone" placeholder="Your Phone" required />
                            </div>
                            <div className="form-group mb-5">
                                <textarea className="form-control px-3 py-4"cols="30" rows="10"  name="msg" placeholder="Write a Message" required></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message" />
                            </div>
                            </form>
                        </div>
                        <div className="col-md-5 pl-md-5">
                            <h3 className="mb-5">My Contact Details</h3>
                            <ul className="contact-details">
                            <li>
                                <span className="text-uppercase">Email</span>
                                mahidulmoon@gmail.com
                            </li>
                            <li>
                                <span className="text-uppercase">Phone</span>
                                +8801771042196
                            </li>
                            <li>
                                <span className="text-uppercase">Address</span>
                                YounusKhan's scholar's Garden<br/>
                                Ashulia <br/>
                                Savar, Dhaka.
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
            </React.Fragment>
        );
    }
}

export default ContactMe;