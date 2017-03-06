// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import './Booking.css';

type Props = {}

export default class Booking extends Component {
    props: Props;

    state: {
        firstName: string,
        lastName: string,
        email: string,
        arrivalDate: ?Date,
        departureDate: ?Date,
        subject: string,
        message: string
    };

    handleSubmit: (Event) => void;
    handleChange: (SyntheticInputEvent) => void;
    handleDepartureDateChange: (string) => void;
    handleArrivalDateChange: (string) => void;

    constructor(props: Props) {
        super(props);

        this.state = {
            firstName: 'Test',
            lastName: '',
            email: '',
            arrivalDate: null,
            departureDate: null,
            subject: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleArrivalDateChange = this.handleArrivalDateChange.bind(this);
        this.handleDepartureDateChange = this.handleDepartureDateChange.bind(this);
    }

    handleSubmit(event: Event) {
        console.log(JSON.stringify(this.state));

        event.preventDefault();
    }

    handleChange(event: SyntheticInputEvent) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleArrivalDateChange(s: string) {
        this.setState({arrivalDate: new Date(s)});
    }

    handleDepartureDateChange(s: string) {
        this.setState({departureDate: new Date(s)});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Grid>
                    <Row>
                        <Col md={3}>
                            <FormGroup>
                                <ControlLabel>First name</ControlLabel>
                                <FormControl onChange={this.handleChange} value={this.state.firstName}
                                             name="firstName"
                                             type="text" placeholder="John"/>
                            </FormGroup>

                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <ControlLabel>Last name</ControlLabel>
                                <FormControl onChange={this.handleChange} value={this.state.lastName} name="lastName"
                                             type="text" placeholder="Doe" required={true}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>E-Mail</ControlLabel>
                                <FormControl onChange={this.handleChange} value={this.state.email} name="email"
                                             type="text" placeholder="john.doe@gmail.com"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <FormGroup>
                                <ControlLabel>Arrival date</ControlLabel>
                                <DatePicker onChange={this.handleArrivalDateChange}
                                            value={this.state.arrivalDate ? this.state.arrivalDate.toISOString(): ''}
                                            name="arrivalDate" showClearButton={false} dateFormat="DD.MM.YYYY"/>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <ControlLabel>Departure date</ControlLabel>
                                <DatePicker onChange={this.handleDepartureDateChange}
                                            value={this.state.departureDate ? this.state.departureDate.toISOString() : ''}
                                            name="departureDate" showClearButton={false} dateFormat="DD.MM.YYYY"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Subject</ControlLabel>
                                <FormControl onChange={this.handleChange} value={this.state.subject} name="subject"
                                             type="text" placeholder="Subject..."/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Message</ControlLabel>
                                <FormControl onChange={this.handleChange} value={this.state.message} name="message"
                                             componentClass="textarea" placeholder="Message..."/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Button bsStyle="primary" type="submit">Send</Button>
                        </Col>
                    </Row>
                </Grid>
            </Form>
        );
    }
}