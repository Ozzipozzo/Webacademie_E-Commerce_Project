import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductStyle } from '../assets/style/ProductStyle';
import CategoryCard from './CategoryCard';

export default function Categories() {

    let history = useHistory();

    const [category, setCategory] = useState(null)

    useEffect(() => {
        
        fetch("http://localhost:8000/api/category")
        .then(res => res.json())
        .then(res => setCategory(res))
    }, [])


    console.log(category);

    if (!category) return <div>Chargement...</div>

    return (
        <ProductStyle>
            
            {category.map((category, index) => {
                return (
                    <CategoryCard key={index}
                        img={category.img}
                        name={category.name}
                        description={category.description}
                        price={category.price}
                        id={category.id}
                    />
                )
            })}
        </ProductStyle>
    )
}