// @flow
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SocialButton.css';

type Props = {
    type: 'facebook' | 'twitter' | 'youtube' | 'instagram' | 'googlePlus'
}

export default class SocialButton extends Component {
    props: Props;
    static defaultProps = {};

    render() {


        const types = {
            facebook: {
                faIcon: 'facebook',
                cssClass: 'facebook'
            },
            twitter: {
                faIcon: 'twitter',
                cssClass: 'twitter'
            },
            youtube: {
                faIcon: 'youtube',
                cssClass: 'youtube'
            },
            instagram: {
                faIcon: 'instagram',
                cssClass: 'instagram'
            },
            googlePlus: {
                faIcon: 'google-plus',
                cssClass: 'google-plus'
            }
        };

        const button = <FontAwesome
            name={types[this.props.type].faIcon}
            size="2x"/>;

        return (
            <div className="social-button">
                <a href="#" className={types[this.props.type].cssClass}>
                    {button}
                </a>
            </div>
        );
    }
}