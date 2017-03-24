// @flow
import React from 'react';
import { Grid, Row, Col, Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

const BookingForm = (
    props: {},
    state: {
        firstName: string,
        lastName: string,
        email: string,
        arrivalDate: ?Date,
        departureDate: ?Date,
        subject: string,
        message: string
    }
) => {
    const handleSubmit = (event: Event) => {
        console.log(JSON.stringify(state));

        event.preventDefault();
    };

    const handleChange = (event: SyntheticInputEvent) => {
        //setState({[event.target.name]: event.target.value});
    };

    const handleArrivalDateChange = (s: string) => {
        //  setState({arrivalDate: new Date(s)});
    };

    const handleDepartureDateChange = (s: string) => {
        //  setState({departureDate: new Date(s)});
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Grid>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <ControlLabel>First name</ControlLabel>
                            <FormControl onChange={handleChange} value={state.firstName}
                                         name="firstName"
                                         type="text" placeholder="John"/>
                        </FormGroup>

                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <ControlLabel>Last name</ControlLabel>
                            <FormControl onChange={handleChange} value={state.lastName} name="lastName"
                                         type="text" placeholder="Doe" required={true}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>E-Mail</ControlLabel>
                            <FormControl onChange={handleChange} value={state.email} name="email"
                                         type="text" placeholder="john.doe@gmail.com"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <ControlLabel>Arrival date</ControlLabel>
                            <DatePicker onChange={handleArrivalDateChange}
                                        value={state.arrivalDate ? state.arrivalDate.toISOString(): ''}
                                        name="arrivalDate" showClearButton={false} dateFormat="DD.MM.YYYY"/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <ControlLabel>Departure date</ControlLabel>
                            <DatePicker onChange={handleDepartureDateChange}
                                        value={state.departureDate ? state.departureDate.toISOString() : ''}
                                        name="departureDate" showClearButton={false} dateFormat="DD.MM.YYYY"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Subject</ControlLabel>
                            <FormControl onChange={handleChange} value={state.subject} name="subject"
                                         type="text" placeholder="Subject..."/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Message</ControlLabel>
                            <FormControl onChange={handleChange} value={state.message} name="message"
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
};

export default BookingForm;