// @flow
import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SocialButton.css';

const SocialButton = (
    props: {type: 'facebook' | 'twitter' | 'youtube' | 'instagram' | 'googlePlus'}
) => {
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
        name={types[props.type].faIcon}
        size="2x"/>;

    return (
        <div className="social-button">
            <a href="#" className={types[props.type].cssClass}>
                {button}
            </a>
        </div>
    );
};


export default SocialButton;