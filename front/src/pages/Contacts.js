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
               
                    {/* <div>
                        <h1>
                            <strong>Помощь по техническим вопросам</strong>
                        </h1>
                    </div> */}
                    <main className="section">
                        <div className="container">
                            <ul className="content-list">
                                <li className="content-list__item">
                                    <h1 className="title-2">Помощь по техническим вопросам</h1>
                                    <h2 className="title-3">Telegram / WhatsApp</h2>
                                    <p>
                                        <a href="tel:+78005553535">8 (800) 555-35-35</a>
                                    </p>
                                </li>
                                <li className="content-list__item">
                                    <h2 className="title-2">Email</h2>
                                    <p>
                                        <a href="mailto:BYP@mail.ru">
                                            BYP@mail.ru
                                        </a>
                                    </p>
                                </li>
                                <li className="content-list__item">
                                    <h1 className="title-2">Сотрудничество</h1>
                                    <a href="mailto:BYPCorp@mail.ru">
                                            BYPCorp@mail.ru
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </main>
            </div>
        </div>
    );
};

export default Contacts;