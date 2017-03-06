// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router'
import './LandingPage.css';

export default class LandingScene extends Component {
    render() {
        return (
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
    }
}