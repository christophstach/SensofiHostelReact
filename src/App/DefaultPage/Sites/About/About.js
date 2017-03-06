// @flow
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>About</Col>
                </Row>
            </Grid>
        );
    }
}