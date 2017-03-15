// @flow
import React from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import SocialButton from './ScocialButton';
import './Footer.css';

const Header = () => (
    <Navbar componentClass="footer">
        <Grid>
            <Row>
                <Col md={6}>
                    <div classID="map" className="map">
                        <iframe
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCD-Nb8-3scEvrC0dUA9r3DNUgz_-fAv1Y&q=Space+Needle,Seattle+WA"
                        >
                        </iframe>
                    </div>
                </Col>
                <Col md={6} className="social-menu">
                    <SocialButton type="facebook"/>
                    <SocialButton type="twitter"/>
                    <SocialButton type="youtube"/>
                    <SocialButton type="instagram"/>
                    <SocialButton type="googlePlus"/>

                    <address>

                    </address>
                </Col>
            </Row>
        </Grid>
    </Navbar>
);

export default Header;
