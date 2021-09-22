import React from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import Card from "./Card";
import PackagesCBD from '../assets/images/PackagesCBD.png';
import Liqui from '../assets/images/eliqui.png';

const HomeStyle = styled.div`
    .shop_now {
        margin-top: 6rem;
        display: flex;
        justify-content: space-around;
    }

    .products_home {
        background-color: #e8e8eb;
    }
    .products_title_home {
        margin-top: 4em;
    }
`;


export default function Home() {

    return (
        <HomeStyle>
            <div className="main_home">
                <Carousel />
            </div>
            <div className="shop_now">
                <Card header="Essayez une des meilleurs CBD de France" text="Tous nos produits respectent le taux de 0.2% de THC"
                link="/products"
                btnText="Parcourir les produits !"
                img={PackagesCBD}
                />
                <Card header="Essayez une des meilleurs E-Liquid CBD" text="Tous nos produits respectent le taux de 0.2% de THC"
                link="/products"
                btnText="Parcourir les produits !"
                img={Liqui}
                />
            </div>
            {/* <div className="products_home">
                <h2 className="products_title_home">Trouvez les produits qui vous correspondent</h2>
            </div> */}
        </HomeStyle>
    )
}
