// @flow
import React, { Component } from 'react';
import './Home.css';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        let text = `
            The hostel is new, but the building is over 100 years old and typical canarian... And we love everything related to the canary islands.
            Sansofí means "Welcome guest" in guanche, the language of the canarian ancestors, and we definitely want you to feel welcome from the moment you enter Sansofís doors.
            If you feel for holidays away from mass tourism, yet near enough to local and tourist attractions: Then you are at the right place ;))
            If you are looking for a cosy and rural place to stay and you want to get to know the real Tenerife: Even better ;)))
            What defines us? Historical walls meets casual interior with all modern amenities. We offer private and shared bedrooms, a reception lounge and a livingroom with TV and games where you can socialise with other travellers. The kitchen is well equipped and shared with other guests. The bathrooms are also shared and they are provided with hairdryers and towels.There is also a large rooftop terrace. From one of the bedrooms you have direct access to this terrace but you can also reach it from the reception lounge. Take your breakfast up there in the morning, sunbath during the day or have a glass of wine in the evenings:
            The view down to the coast is amazing!
            Above all else, Sansofí is about Tenerife. We love the island and we live and breathe it.
            Our tip is to start by exploring San Miguel and its canarian life.
            Here you´ll find a supermarket, some small shops, a bakery and some nice little restaurants serving lovely canarian food.
            From here you can easily start your trecking or cycling tours, avoiding the traffic at the coastline. Or you rent a car and take it easy by going to the beach. It takes about 15 min by car to reach the nearest beach from the hostel. Though we recomend renting a car, there´s a busstop at 5 min walking from the hostel.
            At Sansofi´s you´ll be able to get to know the local life of Tenerife, yet it is near enough to the tourist places and beaches.
        `;

        return (
            <Grid>
                <Row>
                    <Col md={12}>{
                        text.split("\n").map((v) => {
                            if(!v) {
                                return null;
                            }

                            return <p key={v}>{v.trim()}</p>
                        })
                    }</Col>
                </Row>
            </Grid>
        );
    }
}