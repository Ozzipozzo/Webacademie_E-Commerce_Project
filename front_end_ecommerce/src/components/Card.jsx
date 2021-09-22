import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BigCardStyle = styled.div`
    .main_card {
        border-radius: 30px;
        font-family: 'Poppins';
        background-color: #ecd7a4;
        height: 23rem;
        font-family: 'Poppins';
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
        ;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .header_card {
        padding-top: 3rem;
        font-size: 2rem;
        width: 50%;
        padding-left: 1rem;
    }

    .text_card {
        padding-left: 1rem;
    }

    .button_card {
        padding-left: 1rem;
        padding-top: 2rem;
        display: inline-block;
        text-decoration: none;
        color: black;
        top: 5em;
    }
    .img_card {
        width: 50%;

    }
`;

export default function Card({
    header='This is the header',
    text='This is default text',
    link='/products',
    btnText = 'Default text link',
    img = ''
}) {
    return (
        <BigCardStyle>
            <div className="main_card">
                <h2 className="header_card">{header}</h2>
                <p className="text_card">{text}</p>
                <Link className="button_card" to={link}>
                    {btnText}
                </Link>
                <img className='img_card' src={img} alt="" />
            </div>
        </BigCardStyle>
    )
}
