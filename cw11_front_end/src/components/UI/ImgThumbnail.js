import React from 'react';
import imageNotAvailable from '../../assets/images/chat.png';
import {apiURL} from "../../constants";

const ImgThumbnail = props => {
    let image = imageNotAvailable;
    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }

    return <img src={image} className='img_thumbnail' alt={props.alt} />
};

export default ImgThumbnail;