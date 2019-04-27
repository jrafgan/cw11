import React from 'react';
import ImgThumbnail from "./ImgThumbnail";
import {NavLink} from "react-router-dom";

const ProductThumbnail = props => {
    return (
        <div className="product_thumbnail">
            <ImgThumbnail image={props.image} alt={props.alt}/>
            <div>
                <NavLink to={"/" + props.id}>{props.title}</NavLink>
                <p>{props.price} сом</p>
            </div>
        </div>
    );
};

export default ProductThumbnail;