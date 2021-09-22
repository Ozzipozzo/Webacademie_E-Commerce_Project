import React, { useEffect, useState } from 'react';
import { ProductStyle } from '../assets/style/ProductStyle';
import ProductCard from './ProductCard';

export default function Products() {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        
        fetch("http://localhost:8000/api/product")
        .then(res => res.json())
        .then(res => setProducts(res))
    }, [])

    console.log(products);

    if (!products) return <div>Chargement...</div>

    return (
        <ProductStyle>
            {products.map((product, index) => {
                return (
                    <ProductCard key={index}
                        img={product.img}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        id={product.id}
                    />
                )
            })}
        </ProductStyle>
    )
}
