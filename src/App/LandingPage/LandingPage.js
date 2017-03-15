// @flow
import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import './LandingPage.css';

const LandingScene = () => (
    <div>
        <Grid>
            <Row>
                <Col>
                    <Jumbotron>
                        Wilkommen bei Sansofi Hostel <br />
                        <Link to="/home">Home</Link>
                    </Jumbotron>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default LandingScene;