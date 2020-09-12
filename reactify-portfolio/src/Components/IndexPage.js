import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import AboutMe from './AboutMe';
import Services from './Services';
import Resume from './Resume';
import ContactMe from './ContactMe';
import FooterFile from './FooterFile';
class IndexPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigationbar />
                <AboutMe />
                <Services />
                <Resume />
                <ContactMe />
                <FooterFile />
            </React.Fragment>
        );
    }
}

export default IndexPage;