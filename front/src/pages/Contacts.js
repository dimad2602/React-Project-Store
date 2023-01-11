import React from 'react';
import contactspng from '../assets/contactspng.png';
import {Dimensions} from 'react-native';
import './css/Contacts.css';

const Contacts = ({src, alt}) => {

    const screenHeight = Dimensions.get('screen').height;
    const screenWidth = Dimensions.get('screen').width;

    

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{background: `url(${contactspng}) no-repeat center center`, 
            width:screenWidth, height: screenHeight, 
            backgroundSize: 'cover', fontSize:64}}
        >
            <div className="square2">
                <p class="text">Square text</p>
            </div>
        </div>
            
    );
};

export default Contacts;