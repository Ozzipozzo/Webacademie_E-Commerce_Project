import React from 'react';
import { Link } from "react-router-dom";
import { NavMenuStyle } from '../assets/style/NavMenuStyle';
import { LiStyle } from '../assets/style/NavMenuStyle';
import { createBrowserHistory } from "history";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavMenu() {
    let content = []
    console.log(window.localStorage.getItem("userId"));
    function loggout() {
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("userEmail");
        window.localStorage.removeItem("userFirstName");
        window.localStorage.removeItem("userLastName");

        const history = createBrowserHistory({forceRefresh:true});
        history.push("/");
    };

    if (window.localStorage.getItem("userId") !== null) {
        // console.log('localstorage rempli');
        content.push(
            <li key="id1" className="nav-item active">
                <Link to="/Myaccount">Profil</Link></li>
        )
        content.push(
            <li key="id2" className="nav-item active">
                <Link to="/" onClick={loggout}>Deconnexion</Link></li>
        )
    }
    else {
        console.log('localstorage vide');
        content.push(
            <li key="id3" className="nav-item active">
                <Link to="/Connexion">Connexion</Link></li>
        )
        content.push(
            <li key="id4" className="nav-item active">
                <Link to="/Inscription">Inscription</Link></li>
        )

    }


    return (
        <NavMenuStyle>
            <div className="free_shipping">
                Livraison gratuite en France à partir de 45€ d'achat
            </div>
            <nav className="stroke">
                <div>
                    <ul className="navbar-nav ml-auto">
                        <LiStyle>
                            <li className="nav-item active">
                                <Link to="/">Acceuil</Link></li>
                            <li className="nav-item active">
                                <Link to="/products">Nos produits</Link></li>
                                <li className="nav-item active">
                                <Link to="/categories">Catégories</Link></li>
                            <li className="nav-item active">
                                <Link to="/contact">Contactez-nous</Link></li>
                                {content}
                            <li className="nav-item active" id="cart_css">
                            <Link to="/cart"><AiOutlineShoppingCart /></Link></li>
                        </LiStyle>
                    </ul>
                </div>
            </nav>
        </NavMenuStyle>

    )

}
