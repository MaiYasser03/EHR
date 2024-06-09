// src/components/Layout.js

import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import MenuBar from './MenuBar';
import '../Styles/Medilab.css'; // Import the custom stylesheet

const Layout = ({ children }) => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            <Segment
                inverted
                textAlign='center'
                className='header' // Use custom CSS class
                style={{ minHeight: 340 }}
            >
                <MenuBar />
                <Icon size='huge' name='hospital' />
                <Header as='h2' color='blue' style={{ fontSize: '3em', fontWeight: 'normal' }} content='Blockchain Medical Records' />
                <Header as='h3' style={{ fontSize: '1.5em', fontWeight: 'normal' }} content='Ensure that your records are safe and sound' />
            </Segment>

            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout;
