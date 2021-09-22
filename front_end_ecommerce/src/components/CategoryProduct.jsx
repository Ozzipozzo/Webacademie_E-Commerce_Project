import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ProductStyle } from '../assets/style/ProductStyle';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';

export default function Categories() {

    const params = useParams();
    const [product, setProduct] = useState(null);

    let history = useHistory();

    useEffect(() => {
        fetch("http://localhost:8000/api/category/"+params.id)
       .then(res => res.json())
       .then(response => {
        setProduct(response)})
    }, [params]);

    console.log(product);

    if(!product) {
        return (
            <div>En cours de chargement ...</div>
        )
    }

    return (
        <ProductStyle>
            
            {product.map((products, index) => {
                return (
                    <ProductCard key={index}
                        img={products.img}
                        name={products.name}
                        description={products.description}
                        price={products.price}
                        id={products.id}
                    />
                )
            })}
        </ProductStyle>
    )
}