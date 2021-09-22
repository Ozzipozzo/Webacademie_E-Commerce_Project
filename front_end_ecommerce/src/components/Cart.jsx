import React, { useState } from 'react';
import styled from 'styled-components';
import PaypalButton from './PaypalButton';

const CartStyle = styled.div`
        margin-top: 5rem;
    .main_cart {
        padding-top: 1.5rem;
        width: 30%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
    }
    .paypal {
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
`;

export default function Cart() {
    var calc = 0

    const [checkout, setCheckout] = useState(false);
    const [cart, setCart] = useState([]);

    var all_items = JSON.parse(localStorage.getItem('Products'));

    // console.log(all_items)
    if(all_items) {
        all_items.map((item, index) => {
            var test = item.price.slice(0, -1);
            test = parseInt(test)
            calc += test;
            console.log(calc)
            return (
                calc
            )
        })
    }

    if(!all_items) {
        return (
            <div className="no_items">Vous n'avez pas d'items dans votree panier</div>
        )
    }

    return (
        <CartStyle>
            <div className="main_cart">
                {
                    all_items.map((item,index)=> {
                        return (
                            <li>{item.name} {item.price}</li>
                        )
                    })
                }
                <p>Prix total {calc}€</p>
            </div>
                <div className="paypal">

                <PaypalButton
                    total={calc}
                    clearcart="0"
                />
                </div>
        </CartStyle>
    )

}
