import React from 'react';
import { Container, Row, Box } from '../components';
import Contact from '../components/Contact';
import './Home.scss';

const SendEmail = () => {
  return (
    <Container twClasses={''} FULL={false} pageTitle={'Home'}>
      <Row twClasses={'prose'}>
        <h1 className='h1'>Send Email w/ EmailJS</h1>
      </Row>
      <Row>
        <Contact />
      </Row>
    </Container>
  );
};

export default SendEmail;
