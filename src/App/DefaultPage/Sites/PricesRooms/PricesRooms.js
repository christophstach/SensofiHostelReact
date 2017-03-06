// @flow
import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './PricesRooms.css';

export default class PricesRooms extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        Prices & Rooms
                    </Col>
                </Row>
            </Grid>
        );
    }
}