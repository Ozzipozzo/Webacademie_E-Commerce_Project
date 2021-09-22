import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ArticleDetailsStyle = styled.div`
    margin: 0 auto;
    text-align: center;
    .main_img {
        width: 500px;
        height: 300px;
    }
`;

export default function DetailsProduct() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    console.log(params);

    useEffect(() => {
        fetch("http://localhost:8000/api/details_product/"+params.id)
       .then(res => res.json())
       .then(response => {
        setProduct(response)})
    }, [params]);

    if(!product) {
        return (
            <div>En cours de chargement ...</div>
        )
    }
    return (
        <ArticleDetailsStyle>
            <div className="main_container">
               <img src={product[0].img} alt="" className="main_img" />
               <h1 className="detail_title">{product[0].name}</h1>
               <p className="detail_content">{product[0].description}</p>
                <p className="detail_text">{product[0].price}</p>
            </div>
        </ArticleDetailsStyle>
    )
}