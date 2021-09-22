import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ProductCardStyle = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 30%;
    justify-content: space-between;
    .article_card_main {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
        img {
            width: 60%;
            height: 60%auto;
        }
    }
    .article_card_main_premium {
    
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
        filter: blur(4px);
        img {
            width: 100%;
        }
    }
    button {
        background: none;
        border: 2px solid;
        font: inherit;
        line-height: 1;
        margin: 0.5em;
        padding: 1em 2em;
        
    }
    .p_button:hover,
    .p_button:focus {
        box-shadow: 0 0.5em 0.5em -0.4em;
        transform: translateY(-0.25em);
        color: #ffa260;
    }

`;

var element = {}, cart = [];

export default function ProductCard(props) {

    let history = useHistory();

    const handleId = (id) => {
        history.push(`/details_product/${id}`)
    }

    const handleProductCart = (id, name, price) => {

        element.id = id;
        element.name = name;
        element.price = price
        cart.push(element);

        localStorage.setItem('Products', JSON.stringify(cart))
        console.log(JSON.parse(localStorage.getItem('Products')))
    }

    return (
        <ProductCardStyle>
            <div className="article_card_main">
                <img src={props.img} alt="" />
                <h3 className="article_card_title">{props.name}</h3>
                <p className="article_card_text">{props.description}</p>
                <p className="product_details">{props.price}</p>
                <button className="p_button" onClick={() => handleId(props.id)}>Fiche produit</button>
                <button className="p_button" onClick={() => handleProductCart(props.id, props.name, props.price)}>Ajouter au panier</button>
            </div>
        </ProductCardStyle>
    )
}