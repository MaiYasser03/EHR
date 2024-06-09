// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';
import Layout from './layout'; // corrected import path

const Home = (props) => (
  <Layout>
    <Container textAlign='center' style={{ marginTop: '5em' }}>
      <Header as='h1'>Welcome to the EHR System</Header>
      <Button primary size='huge' as={Link} to='/doctor-registration' style={{ marginBottom: '1em' }}onClick={props.connectWallet}>
        I'm a Doctor
      </Button>
      <Button secondary size='huge' as={Link} to='/patient-registration' onClick={props.connectWallet}>
        I'm a Patient
      </Button>
    </Container>
  </Layout>
);

export default Home;
